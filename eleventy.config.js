module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the output folder untouched
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/uploads");

  // ==========================================================================
  // PATH PREFIX (shared)
  // Computed once here so both the site config (below) and the fixPaths
  // filter (below) always agree on the current prefix.
  // ==========================================================================
  const currentPathPrefix =
    process.env.ELEVENTY_ENV === "production" ? "/" : "/fight-with-your-mind/";

  function withPrefix(path) {
    if (!path) return path;
    // Leave external URLs, anchors, and mailto links untouched
    if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(path) || path.startsWith("#") || path.startsWith("mailto:")) {
      return path;
    }
    const prefix = currentPathPrefix === "/" ? "" : currentPathPrefix.replace(/\/$/, "");
    return prefix + path;
  }

  // ==========================================================================
  // FIXPATHS FILTER
  // Front-matter fields that hold raw HTML blocks (noteAside, extraSection,
  // introHtml) are just YAML string DATA — Eleventy never runs Nunjucks or
  // the "url" filter over them, even though markdownTemplateEngine is "njk"
  // (that setting only covers the post BODY, not front-matter values). Any
  // image or link path written inside one of those fields needs to go
  // through this filter wherever it's output, or it'll silently stay
  // unprefixed (or output literally, if someone tries "{{ '...' | url }}"
  // inside the front matter — that text is never evaluated, it just prints).
  // Usage: {{ someRawHtmlField | fixPaths | safe }}
  // Write plain paths in these fields, e.g. src="/uploads/2020/x.png" —
  // this filter finds and prefixes them automatically.
  // ==========================================================================
  eleventyConfig.addFilter("fixPaths", function (html) {
    if (!html) return html;
    return html
      // Clean up any accidental "{{ '...' | url }}" left in front matter —
      // that syntax never gets evaluated there, so treat it as the plain
      // path it was trying to express.
      .replace(/(src|href)=(["'])\{\{\s*'([^']+)'\s*\|\s*url\s*\}\}\2/g, (m, attr, q, path) => {
        return `${attr}=${q}${withPrefix(path)}${q}`;
      })
      // Prefix any remaining plain internal path.
      .replace(/(src|href)=(["'])(\/(?!\/)[^"']*)\2/g, (m, attr, q, path) => {
        if (currentPathPrefix !== "/" && path.startsWith(currentPathPrefix)) return m;
        return `${attr}=${q}${withPrefix(path)}${q}`;
      });
  });

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
    // On the GitHub Pages preview (no custom domain yet), the site lives at
    // bauhausfarmhouse.github.io/fight-with-your-mind/ — a subpath — so every
    // internal link and asset path needs that subpath prepended.
    // Once the custom domain is pointed at GitHub Pages, the site instead
    // lives at the domain root, so no prefix should be added at all.
    // ELEVENTY_ENV=production is set in the GitHub Actions workflow for the
    // custom-domain deploy; everything else (local dev, and the plain preview
    // build) falls back to the subpath prefix.
    pathPrefix: currentPathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
