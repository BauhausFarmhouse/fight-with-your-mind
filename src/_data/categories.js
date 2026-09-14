/*
  CATEGORY DATA
  =============
  One object per category. The category.njk template loops over this file
  to generate all 6 category pages automatically (via Eleventy pagination).

  Fields:
    slug        - matches the "category" front matter value used on posts,
                  and becomes the URL: /category/<slug>/
    title       - the page heading
    heroImage   - the large banner image at the top of the category page
    thumbImage  - the small square version used when THIS category shows
                  up as a link on OTHER category pages
    introHeading / introText - the custom editorial writeup for this
                  category (this is where you write what makes this
                  category unique, same as the real site does)
    linksHeading - heading above the curated outside-link list
    links       - curated outside articles/videos related to this
                  category. Each needs: url, image, title, text

  IMPORTANT: only "questioning-and-thought" is filled in with real content
  right now, using what you pasted from the live site. The other 5 are
  placeholders with a TODO — same shape, just waiting on your real
  editorial text so I'm not inventing content for you.
*/
module.exports = [
  {
    slug: "questioning-and-thought",
    title: "Questioning and Thought",
    heroImage: "/uploads/2019/12/questioning-and-knowledge-hero.png",
    thumbImage: "/uploads/2019/12/questioning-and-knowledge.png",
    introHeading: "Our Relationship with the Truth",
    introText: [
      "Much of this site explores the influences and tactics used to alter the truth but the ability to abuse the truth in the first place originates in ourselves and predates any propaganda or programming experienced from the outside world. Our relationship with the truth started in our homes, with our families as children learning the boundaries and values of the society we are born into.",
      "Our society has an unhealthy relationship with the truth that we think is harmless. We use lies as tools to escape accountability, appear better to others, to get more, to do less. We are told that there are white lies and lies of omission, and even that there are lies we tell as kindnesses to others. We unburden ourselves by judging the lie to be harmless or justifying it as a behavior that everyone participates in, but collectively, we are missing the most destructive consequence of a lie--the loss of a shared reality.",
    ],
    introQuote: "the ability to abuse the truth in the first place originates in ourselves and predates any propaganda or programming",
    introTextAfterQuote: [
      "When we lie we make a decision for the person we lied to. We are stealing the right of a person to know their own reality. When we lie, it is a choice and a dignity we have taken from someone else in order to create a situation for ourselves. Ideally, we as individuals have rights until we infringe on someone else's rights. Does a lie not cross that boundary? Here we explore the boundaries of our thoughts, how those boundaries can have consequences for others that we might not be aware of, and how giving away our shared reality one lie at a time has resulted in a world that can no longer agree on what is truth and what is fact.",
    ],
    linksHeading: "Browse the Fight With Your Mind curated links to inform, update, and evolve your views.",
    linksIntro: "We should all periodically examine our opinions against new available information and update our views accordingly. Fight With Your Mind challenges you to challenge yourself by identifying the influences that led you down the path to the views you hold today, and re-examine them to determine if that information still holds up as the best or most relevant.",
    links: [
      {
        url: "https://youtu.be/FyAgx_tzh80",
        image: "/uploads/2020/08/ThinkingOutsideYourNeurologicalNetwork.jpg",
        title: "Thinking outside of your neurological network",
        text: "We tend to get stuck in our ways as we age because we have reinforced our neural networks through use. Imagine a magic solution that could help us make more well rounded connections to information by getting us out of the ruts we have created over lifespans. Question your preconceived ideas, give thought to the facts.",
      },
      {
        url: "https://science.howstuffworks.com/life/inside-the-mind/human-brain/conspiracy-theorists-brains-really-are-different.htm",
        image: "/uploads/2020/08/ConspiracyBrain.jpg",
        title: "Studies show that the brains of conspiracy theorists are different",
        text: "Some of us may be more susceptible to believing conspiracy theories than others. Research shows false pattern recognition in higher levels for those that also gravitate toward conspiracies and supernatural beliefs.",
      },
    ],
  },
  {
    slug: "deprogramming-and-education",
    title: "Deprogramming and Education",
    heroImage: "/uploads/2020/05/deprogramming-and-education-hero.jpg",
    thumbImage: "/uploads/2019/12/deprogramming-and-education.jpg",
    // This category's featured post has no orange "FEATURED POST" banner
    // above it on the live site (unlike other categories) — confirmed
    // directly from the page source.
    hideFeaturedBanner: true,
    // introHtml is the exact raw markup from the live site (copied from
    // page source), because this category's intro isn't simple stacked
    // paragraphs — it's two side-by-side ".inset-row" pairings (text next
    // to a quote). Rather than force that into generic fields that don't
    // fit, this is hand-written HTML, same approach as post content.
    introHtml: `
      <h1 style="font-size:4vmax;">Deprogramming can only occur when we realize we must have compassion for a victim, not disagreement with an enemy</h1>
      <div class="inset-row">
        <div class="column">
          <p>It is unrealistic to ask an individual that has been subject to brainwashing or behavioral manipulation to merely change their mind. It is important to remember that a brainwashed person is a victim that has been taken advantage of. This programming is the result of an outside entity systematically targeting specific fears and weaknesses the individual possesses, and this tie to vulnerability makes undoing the process difficult. To further complicate the situation, many victims of brainwashing believe that the propaganda that has been fed to them is their own opinion, not the opinion of others placed on them.</p>
        </div>
        <div class="column">
          <blockquote>The first step in dismantling the damage done by brainwashing is to disconnect an individual's identity from the opinions they hold.</blockquote>
          <p>Once an individual no longer feels that their identity is under attack, they are more willing to listen to information that might contradict the brainwashing.</p>
        </div>
      </div>
      <h4>How do you reach a person that doesn't share your reality?</h4>
      <div class="inset-row">
        <div class="column">
          <p>To help our fallen soldiers in a war that they didn't join willingly, we must show compassion and judge only those that waged war, not those that were caught up in it. In this space we explore the tactics themselves that manipulate the behaviors of the public, explain their power, and prepare anyone willing to learn how to protect themselves against being used by power unknowingly.</p>
        </div>
        <div class="column">
          <p><i>It is only from a position of power that one can brainwash another individual. We could no longer stay silent when the tactics of our industry have been hijacked and weaponized. As marketers we urge the public to assess its relationship to the truth, and that relationship's impact on our shared reality.</i><br><br>-Honest Marketing and Business Development</p>
        </div>
      </div>
    `,
    linksHeading: "Understanding Influence",
    linksIntro: "There are a myriad of techniques that can be used to influence every demographic imaginable. Many of these posts explore very effective techniques that should only be used to enhance honest communication with the public, and we ask that no one abuse the information they learn here.",
    links: [
      {
        url: "https://www.independent.co.uk/voices/us-election-trump-cambridge-analytica-facebook-fake-news-brexit-vote-leave-a9304421.html",
        image: "/uploads/2020/08/BrittanyKaiser.jpg",
        title: "Selling our democracy, one ad space at a time",
        text: "Brittany Kaiser from Cambridge Analytica talks about Facebook's role in everything from the destruction of our democracy to genocide around the world.",
      },
      {
        url: "https://philadelphia.cbslocal.com/2018/11/28/payless-palessi-opens-fake-luxury-store-experiment-sells-customers-expensive-shoes-luxury-adweek-marketing/",
        image: "/uploads/2020/08/PaylessShoes.jpg",
        title: "Judging a book by its cover",
        text: "Marketing can change perceived value easily. A social experiment reveals our vulnerability to marketers made possible by our obsession with status.",
      },
      {
        url: "https://www.themandarin.com.au/123455-bots-will-dominate-political-debate-experts-warn/",
        image: "/uploads/2020/08/ArmyOfRobots.jpg",
        title: "The army of robots is here",
        text: "Experts warn the public about computer-generated disinformation campaigns that obfuscate facts and real human communication.",
      },
      {
        url: "https://clients.bythebootstrap.us/marketing-101/",
        image: "/uploads/2020/08/Marketing101.jpg",
        title: "Marketing 101",
        text: "Most people don't have an understanding of what marketing is. Until this is clear, audiences won't be able to identify the influences in their life. Remember, marketing is not limited to the business world.",
      },
      {
        url: "https://clients.bythebootstrap.us/pre-marketing-the-things-that-all-businesses-should-examine-first/",
        image: "/uploads/2020/08/Pre-Marketing.jpg",
        title: "Dishonorable marketing is a choice",
        text: "Marketing can be done honorably–an inside look at responsible approaches that work better than slimy tactics.",
      },
      {
        url: "https://clients.bythebootstrap.us/what-disability-means-in-marketing/",
        image: "/uploads/2020/08/DisabilityMarketing.jpg",
        title: "What \"Disability\" means in Marketing",
        text: "An inside look at what good marketers consider to help include all audiences. Not all marketing tactics are bad.",
      },
      {
        url: "https://clients.bythebootstrap.us/gender-shopping-habits-and-desires/",
        image: "/uploads/2020/08/GenderHabits.jpg",
        title: "Gender Habits & Desires",
        text: "Marketing is so effective because it utilizes psychology. Studies identify preferences and habits of different demographics, which then can be used to enhance communication, or can be exploited.",
      },
      {
        url: "https://clients.bythebootstrap.us/including-or-targeting-the-lgbtq-community/",
        image: "/uploads/2020/08/TargetingLGBTQIAplus.jpg",
        title: "Including or targeting the LGBTQIA+ Community",
        text: "An argument for including LGBTQIA+ individuals in targeted audiences that isn't about politics or religion. Treating people equally and with dignity is the right thing to do, but it's also just good for business.",
      },
      {
        url: "https://clients.bythebootstrap.us/advertising-to-children/",
        image: "/uploads/2020/08/AdvertisingToChildren.jpg",
        title: "Advertising to Children",
        text: "Understand the conversation that is being had about your children in order to protect them against targeting from malicious advertising or manipulation.",
      },
      {
        url: "https://clients.bythebootstrap.us/advertising-to-teens/",
        image: "/uploads/2020/08/AdvertisingToTeens.jpg",
        title: "Advertising to Teens",
        text: "Teenagers are old enough to understand the conversation being had about how advertisers target them.",
      },
      {
        url: "https://clients.bythebootstrap.us/advertising-to-different-income-brackets/",
        image: "/uploads/2020/08/DifferentIncomeBrackets.jpg",
        title: "Advertising to Different Income Brackets",
        text: "Marketing can be a mirror for our society–ads only work because the people that created them understand what you want.",
      },
      {
        url: "https://clients.bythebootstrap.us/general-advertising-techniques/",
        image: "/uploads/2020/08/TeachingOurFutureToUseSlimyTactics.jpg",
        title: "Teaching our future to use slimy tactics",
        text: "Tactics are taught in schools as tools to be successful in a job, and the marketing industry and university system look the other way when the tactic is at the cost of the consumer.",
      },
      {
        url: "https://clients.bythebootstrap.us/diversity-marketing/",
        image: "/uploads/2020/08/DiversityMarketing.jpg",
        title: "Diversity Marketing",
        text: "Diversity marketing means adapting the message to the market, instead of trying to adapt the market to the message.",
      },
    ],
  },
  {
    slug: "the-expanse",
    title: "The Expanse",
    heroImage: "/uploads/2019/12/the-expanse-hero.png",
    thumbImage: "/uploads/2019/12/the-expanse.png",
    introHeading: "What is Reality?",
    introText: [
      "Is reality an entity, a concept, or no more than an invention of language that we have given meaning? Why is it so important for us to know not only what reality is for ourselves, but for others as well? We try to define it, to control it, make others see it our way, and avoid seeing reality through another's perspective. Why do we feel that the way we experience our surroundings and events is such a part of our identity? Are we afraid that if we strip away the labels, the groups, the culture, or the nationalism that there will be nothing left? Isn't it still reality even when it isn't recognizable? Should we be afraid or should we feel infinite with possibility?",
    ],
    introQuote: "Why is it so important for us to know not only what reality is for ourselves, but for others as well?",
    introTextAfterQuote: [
      "This section explores reality experienced from non traditional, unrecognizable, and outlying positions. Through the extremes we hope to show that changing one's opinions or one's reality does not strip away the self. Remember that we hold on the hardest when we feel fear and that even if you change yourself entirely, your experience won't be erased, it will be what propels you to your future.",
    ],
    linksHeading: "Browse the Fight With Your Mind curated links to inform, update, and evolve your views.",
    linksIntro: "Fight With Your Mind challenges you to read about perceptions or experiences that are wildly different than your own, to expand your universe by adding that new information into your repositories, and to use the open mind you have when exploring to try to understand the differences in the people you interact with.",
    links: [
      {
        url: "https://www.gondwana-collection.com/blog/how-do-namibian-himbas-see-colour/",
        image: "/uploads/2020/08/Color.jpg",
        title: "Nothing is universal, not even color",
        text: "Loosening our death grip on our opinions is easier once we understand how perception isn't universal. A study reveals how even the perception of color is informed by language.",
      },
      {
        url: "https://youtu.be/lyu7v7nWzfo",
        image: "/uploads/2020/08/Consciousness-TedTalk-Gabe.jpg",
        title: "We predict ourselves into existence",
        text: "Exploring consciousness and the predictions we use to create the world around us. If we construct our world, partially with predictions, we should be aware that those same predictions dramatically impact the way we see others.",
      },
      {
        url: "https://youtu.be/cd2Ua9dKEl8",
        image: "/uploads/2020/08/Spin.jpg",
        title: "What is Spin?",
        text: "Feeling like we understand something stops us from asking what it is. Not knowing things isn't dumb, but pretending you do is.",
      },
      {
        url: "http://www.empiricalzeal.com/2012/06/05/the-crayola-fication-of-the-world-how-we-gave-colors-names-and-it-messed-with-our-brains-part-i/",
        image: "/uploads/2020/08/ColorJapan.jpg",
        title: "The influence of language on our perceptions",
        text: "Our language informs what we experience, making the world a place that we can only see as it is because of the words we have to describe it.",
      },
      {
        url: "http://www.empiricalzeal.com/2012/06/11/the-crayola-fication-of-the-world-how-we-gave-colors-names-and-it-messed-with-our-brains-part-ii/",
        image: "/uploads/2020/08/LinguisticRelativity.jpg",
        title: "Linguistic relativity",
        text: "All observers are not led by the same physical evidence to the same picture of the universe, unless their linguistic backgrounds are similar.",
      },
      {
        url: "https://www.buzzfeed.com/emmayeomans/heres-what-its-like-to-have-time-space-synaesthesia",
        image: "/uploads/2020/08/TimeSpace.jpg",
        title: "The infinite varieties of human perception",
        text: "People with time-space synaesthesia experience the past, present, and future entirely differently than the rest of us.",
      },
      {
        url: "https://futurism.com/science-explained-atoms-last-forever",
        image: "/uploads/2020/08/LifeAndDeath.jpg",
        title: "Life and Death–and the gray area between",
        text: "If we are a collection of atoms, and our atoms go on long after we're gone, should this change how we look at life and death?",
      },
    ],
  },
  {
    slug: "communication-and-empathy",
    title: "Communication and Empathy",
    heroImage: "/uploads/2019/12/communication-and-empathy-hero.png",
    thumbImage: "/uploads/2019/12/communication-and-empathy.jpg",
    introHeading: "It is always within the people, not the power that you will find the truth",
    introText: [
      "There is so much we don't know about each other. We separate ourselves by culture, by age, by economic status, and by just about any fence we can build to block out what is different. It is time that we got comfortable with feeling uncomfortable because without this shared reality we are no longer \"in it\" together.",
      "How do we come together when we are so divided and feel so far apart? The answer is in the people, not just in listening to each other, but in learning why we are different. We should acknowledge those differences, celebrate those differences, and then plan and account for those differences so that we don't harm people unintentionally. We must have a shared experience in order to have a shared reality.",
    ],
    introQuote: "We hope to strip away the mystery that causes assumptions and fear in order to prevent or correct hate.",
    introTextAfterQuote: [
      "In this space we put a human face on subjects that might challenge your views. We hope to strip away the mystery that causes assumptions and fear in order to prevent or correct hate. Instead of accepting what power says about people, we can find the truth for ourselves in these stories–from the people.",
    ],
    linksHeading: "Browse the Fight With Your Mind curated links to inform, update, and evolve your views.",
    linksIntro: "We should all periodically examine our opinions against new available information and update our views accordingly. Fight With Your Mind challenges you to challenge yourself by identifying the influences that led you down the path to the views you hold today.",
    links: [
      {
        url: "https://www.washingtonpost.com/graphics/2020/business/coronavirus-economy-10-american-lives/",
        image: "/uploads/2020/08/10CovidStories.jpg",
        title: "10 COVID-19 Stories–All in the same boat with so many perspectives",
        text: "With so much misinformation circulating, we aren't all on the same page about COVID-19, but we have all been impacted dramatically.",
      },
      {
        url: "https://youtu.be/blhnjQWmydw",
        image: "/uploads/2020/08/MarieCulvin.jpg",
        title: "The Fourth Estate",
        text: "We have made a joke out of true journalism by calling it \"fake news\", but the dedication and bravery required to report the truth should be honored.",
      },
      {
        url: "https://www.nbcnews.com/news/us-news/she-wanted-freebirth-no-doctors-online-groups-convinced-her-it-n1140096",
        image: "/uploads/2020/08/45Weeks.jpg",
        title: "Brainwashed by the Internet–normalizing a 45 week pregnancy",
        text: "The echo chambers of the Internet can reinforce misinformation and lead otherwise intelligent people to make decisions they wouldn't normally.",
      },
      {
        url: "https://www.washingtonpost.com/local/coronavirus-unemployment-delays-dc/2020/08/01/50016264-c522-11ea-8ffe-372be8d82298_story.html",
        image: "/uploads/2020/08/FallingThroughTheCracks.jpg",
        title: "Falling through the cracks of COVID",
        text: "Income inequality is a subject that privileged people debate while the issue gets worse. Poverty doesn't affect hypothetical people–and if you don't know someone personally that endures poverty in this country, it's a reflection of your own privilege.",
      },
      {
        url: "https://www.iamanimmigrant.com/",
        image: "/uploads/2020/08/CountryOfImmigrants.jpg",
        title: "We have forgotten that we are a country of immigrants",
        text: "When our country is divided we hear less and less from those that have different histories than our own. Step outside of the echo chamber and hear about the immigrant experience first hand.",
      },
    ],
  },
  {
    slug: "meaningful-action",
    title: "Meaningful Action",
    heroImage: "/uploads/2019/12/meaningful-action-hero.png",
    thumbImage: "/uploads/2019/12/meaningful-action.png",
    introHeading: "We can't fight what we don't understand",
    introText: [
      "<em class=\"orange\">We cannot fight information warfare, propaganda, or an enemy corrupting our country if we do not have an understanding of the systems this country runs on.</em>",
      "We must understand the details and history of the constitution, our government's branches, our laws, foreign and domestic policies, law enforcement agencies, and maybe most importantly, the cultures of the people that make up this diverse country. This space is intended to be a safe and reliable environment that values facts above all, to help America learn about its own systems and people. Through this knowledge, our efforts for change can be more meaningful and lasting.",
    ],
    introQuote: "",
    introTextAfterQuote: [],
    linksHeading: "Browse the Fight With Your Mind curated links to inform, update, and evolve your views",
    linksIntro: "We live in a system that is extraordinarily complex and most citizens only have a lay or limited understanding of the inner workings and rules that govern our lives. Learning the system arms us with the ability to fight with purpose and affect what we intend to.",
    linksQuote: "Fight With Your Mind challenges you to challenge yourself. Expand your mind to make meaningful change.",
    links: [
      {
        url: "https://constitutionus.com/",
        image: "/uploads/2020/08/Constitution.jpg",
        title: "The Constitution",
        text: "You cannot change what you do not understand. If you haven't read the constitution, you are not ready to join the debate.",
      },
      {
        url: "https://www.businessinsider.com/minecraft-library-censored-newspaper-articles-online-books-rsf-reporters-borders-2020-3",
        image: "/uploads/2020/08/Minecraft.jpg",
        title: "Get inspired by creative solutions to oppression",
        text: "Minecraft players have used the globally popular game to overcome censorship from governments.",
      },
      {
        url: "https://www.usa.gov/laws-and-regulations",
        image: "/uploads/2020/08/Laws.jpg",
        title: "US laws and regulations",
        text: "Meaningful change is only accomplished through a knowledge of our systems. Learning the law helps keep us out of trouble, but more importantly it helps us identify where improvements need to be made.",
      },
      {
        url: "https://abcnews.go.com/US/massive-eruption-minneapolis-protests-drive-change-experts/story?id=70924118",
        image: "/uploads/2020/08/MassDisruption.jpg",
        title: "Experts talk about the lack of reaction to peaceful protests",
        text: "History shows that mass disruption is what drives change. If we don't condone violence, it's time to get more creative than we have been historically.",
      },
      {
        url: "https://www.theguardian.com/technology/2020/jun/11/twitter-aims-to-limit-people-sharing-articles-they-have-not-read",
        image: "/uploads/2020/08/Twitter.jpg",
        title: "Activism isn't limited to the individual–using businesses to drive positive change.",
        text: "Twitter is experimenting with alterations to its platform that encourage purposeful action, and discourage thoughtless spread of misinformation.",
      },
      {
        url: "https://www.washingtonpost.com/politics/2020/01/24/how-iowa-caucuses-work/",
        image: "/uploads/2020/08/IowaCaucuses.jpg",
        title: "Understanding how the Iowa Caucuses work",
        text: "Learn the systems of your government. For anyone frustrated by their party's nominee, the first step to change is knowledge.",
      },
    ],
  },
];
