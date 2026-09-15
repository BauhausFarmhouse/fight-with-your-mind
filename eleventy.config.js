module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the output folder untouched
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/uploads");

  // ==========================================================================
  // CATEGORY COLLECTIONS
  // The site has 6 fixed categories. This builds one Eleventy "collection"
  // per category by scanning every post's front matter "category" field.
  // A collection is just a pre-sorted list of posts Eleventy hands to any
  // template that asks for it by name (e.g. "collections.questioning-and-thought").
  // This is what lets a category page automatically show every post
  // tagged with that category, sorted newest-first, with zero manual work
  // required when a new post gets added later.
  // ==========================================================================
  const categories = [
    "questioning-and-thought",
    "deprogramming-and-education",
    "the-expanse",
    "communication-and-empathy",
    "meaningful-action",
    "social",
  ];

  categories.forEach((cat) => {
    eleventyConfig.addCollection(cat, function (collectionApi) {
      return collectionApi
        .getFilteredByGlob("src/posts/**/*.md")
        .filter((post) => post.data.category === cat)
        .sort((a, b) => {
          // Published posts (clickable, with real content) always come
          // before "upcoming" placeholder posts, regardless of date —
          // readers should see what they can actually read first.
          const aUpcoming = a.data.upcoming ? 1 : 0;
          const bUpcoming = b.data.upcoming ? 1 : 0;
          if (aUpcoming !== bUpcoming) {
            return aUpcoming - bUpcoming;
          }
          // Within the same group (published vs. upcoming), manual "order"
          // front matter wins if present on BOTH posts being compared.
          // Otherwise, falls back to newest-date-first.
          const aOrder = a.data.order;
          const bOrder = b.data.order;
          if (aOrder !== undefined && bOrder !== undefined) {
            return aOrder - bOrder;
          }
          return b.date - a.date;
        });
    });
  });

  // A combined "allPosts" collection (every post, regardless of category),
  // used for resolving manually-specified relatedPosts by URL.
  eleventyConfig.addCollection("allPosts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });

  // ==========================================================================
  // RELATED POSTS FILTERS
  // Two small helper functions, used inside post.njk, that do the actual
  // work of picking related posts — either automatically (by category) or
  // by resolving a manual list of URLs from front matter.
  // ==========================================================================

  // Given a category's collection and the current post's URL, returns up
  // to 3 OTHER posts from that same category, most recent first.
  eleventyConfig.addFilter("relatedByCategory", function (categoryPosts, currentUrl) {
    if (!categoryPosts) return [];
    return categoryPosts
      // Never suggest the post itself, or "upcoming" placeholder posts —
      // those don't have a real page to link to (post.url is false for
      // them), which would otherwise produce a broken related-post link.
      .filter((post) => post.url !== currentUrl && post.url !== false && !post.data.upcoming)
      // categoryPosts is already sorted published-first, newest-first
      // (see the collection sort above), so the first 3 remaining are
      // exactly the 3 most recent OTHER published posts in this category.
      .slice(0, 3);
  });

  // Given the full list of every post and an array of URLs from a post's
  // manual "relatedPosts" front matter field, returns the matching posts
  // in the order the URLs were listed.
  eleventyConfig.addFilter("relatedByUrls", function (allPosts, urls) {
    if (!allPosts || !urls) return [];
    return urls
      .map((url) => allPosts.find((post) => post.url === url))
      .filter(Boolean);
  });

  // Given the full categories list and the current category's slug,
  // returns up to 4 OTHER categories (excluding "social") to show as
  // cross-link thumbnails at the top of a category page.
  //
  // This matches the live site's behavior: the 4 thumbnails aren't a
  // fixed, unchanging set — they cycle. Starting right after whichever
  // category you're currently viewing, walk forward through the list
  // (wrapping back to the start if needed) and collect the next 4
  // categories in that order. This makes the thumbnails feel like a
  // "next in the sequence" progression rather than a static menu.
  eleventyConfig.addFilter("otherCategories", function (allCategories, currentSlug) {
    const currentIndex = allCategories.findIndex((c) => c.slug === currentSlug);
    if (currentIndex === -1) {
      // Current category not found in the list (shouldn't normally happen) —
      // fall back to the old simple behavior rather than erroring out.
      return allCategories.filter((c) => c.slug !== "social").slice(0, 4);
    }

    const ordered = [];
    for (let step = 1; step <= allCategories.length; step++) {
      const candidate = allCategories[(currentIndex + step) % allCategories.length];
      if (candidate.slug !== currentSlug && candidate.slug !== "social") {
        ordered.push(candidate);
      }
      if (ordered.length === 4) break;
    }
    return ordered;
  });

  return {
    pathPrefix: "/fight-with-your-mind/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
