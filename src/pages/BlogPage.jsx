import AnimatedSection from '../components/AnimatedSection';
import ChatButton from '../components/ChatButton';
import Footer from '../components/Footer';
import Header from '../components/Header';

const defaultCategories = [
  'View all',
  'Skin Science',
  'Ingredient Glossary',
  'Regimen Building',
  'Seasonal Edits',
  'Community Stories',
  'Conversations',
  'Back to Basics',
];

const defaultFeaturedArticle = {
  category: 'Skin Science',
  title: 'Your Guide to Layering The Ordinary Skincare.',
  date: 'May 12, 2026',
  author: 'The Ordinary',
  image:
    'https://cdn.media.amplience.net/i/deciem/Layering-Guide-Blog_Image-Thumnail?fmt=auto&$poi$&sm=aspect&w=1200&aspect=4:3',
  href: '#',
};

const defaultArticles = [
  {
    category: 'Skin Science',
    title: 'Skin, Mental Health and Why Scientific Research Matters',
    date: 'May 8, 2026',
    author: 'By Silvia Stanica, Senior Manager, Scientific Communications at DECIEM.',
    image:
      'https://cdn.media.amplience.net/i/deciem/skin-mental-health-Thumbnail?fmt=auto&$poi$&sm=aspect&w=700&aspect=1:1',
    href: '#',
  },
  {
    category: 'Skin Science',
    title: 'Niacinamide Benefits: Unlocking the Power of Niacinamide...',
    date: 'May 4, 2026',
    author: 'The Ordinary',
    image:
      'https://cdn.media.amplience.net/i/deciem/Niacinamide-Benefits-Uses-Thumbnail?fmt=auto&$poi$&sm=aspect&w=700&aspect=1:1',
    href: '#',
  },
  {
    category: 'Back to Basics',
    title: 'Back to Basics: What is a Skin Toner?',
    date: 'Apr 29, 2026',
    author: 'The Ordinary',
    image:
      'https://cdn.media.amplience.net/i/deciem/ORD-MilkyToner-Web-Blog-04_Img-07?fmt=auto&$poi$&sm=aspect&w=700&aspect=1:1',
    href: '#',
  },
  {
    category: 'Regimen Building',
    title: 'Back to Basics: How to Build a Regimen',
    date: 'Apr 22, 2026',
    author: 'The Ordinary',
    image:
      'https://cdn.media.amplience.net/i/deciem/ordinary-prep-treat-seal-regimen?fmt=auto&$poi$&sm=aspect&w=700&aspect=1:1',
    href: '#',
  },
  {
    category: 'Skin Science',
    title: 'From Formula to Face: How Skincare is Developed at Scale',
    date: 'Apr 20, 2026',
    author: 'Charu Kothari',
    image:
      'https://cdn.media.amplience.net/i/deciem/From-Formula-to-Face-BodyImage1?fmt=auto&$poi$&sm=aspect&w=700&aspect=1:1',
    href: '#',
  },
  {
    category: 'Regimen Building',
    title: 'Your Definitive Guide to Using Retinoids',
    date: 'Apr 17, 2026',
    author: 'The Ordinary',
    image:
      'https://cdn.media.amplience.net/i/deciem/ord-Retinal-Blog-2-Retinoids-Guide_THUMBNAIL?fmt=auto&$poi$&sm=aspect&w=700&aspect=1:1',
    href: '#',
  },
  {
    category: 'Skin Science',
    title: 'Chemical Peel: AHA 30% + BHA 2% Peeling Solution',
    date: 'Mar 6, 2026',
    author: 'The Ordinary',
    image:
      'https://cdn.media.amplience.net/i/deciem/ORD-D51168-Scientific-Proof-AHA-Blog-Hero_1?fmt=auto&$poi$&sm=aspect&w=700&aspect=1:1',
    href: '#',
  },
  {
    category: 'Skin Science',
    title: 'Vitamin C Season: Brighten Your Routine for Spring',
    date: 'Mar 3, 2026',
    author: 'The Ordinary',
    image:
      'https://cdn.media.amplience.net/i/deciem/ORD-Vitamin-C-Season-Hero-Updated?fmt=auto&$poi$&sm=aspect&w=700&aspect=1:1',
    href: '#',
  },
];

const SearchIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7.25" />
    <path d="m20 20-3.85-3.85" />
  </svg>
);

const CaretDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m7 10 5 5 5-5" />
  </svg>
);

const BlogArticleCard = ({ article }) => (
  <article className="text-black">
    <a href={article.href} className="block overflow-hidden bg-[#f4f4f4]">
      <img className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-[1.03]" src={article.image} alt={article.title} />
    </a>
    <p className="mt-[15px] text-[15px] leading-none tracking-[-0.045em] text-[#58606a]">{article.category}</p>
    <h2 className="mt-[22px] text-[20px] font-bold leading-[1.27] tracking-[-0.055em] underline-offset-2">
      <a href={article.href} className={article.underlined ? 'underline' : 'hover:underline'}>
        {article.title}
      </a>
    </h2>
    <p className="mt-[18px] text-[15px] font-bold leading-none tracking-[-0.04em]">{article.date}</p>
    <p className="mt-[17px] text-[15px] font-bold leading-[1.5] tracking-[-0.04em]">{article.author}</p>
  </article>
);

const BlogRoutingHero = ({
  align = 'center',
  title,
  copy,
  cta,
  href,
  desktopImage,
  mobileImage,
  desktopAspect = '3:1',
  mobileAspect = '2:3',
}) => (
  <section className="bg-white px-5 py-[25px] md:px-8 lg:px-0">
    <div className="relative mx-auto h-[427px] max-w-[1282px] overflow-hidden bg-[#f8f8f8] text-black">
      <picture>
        <source
          media="(min-width: 1200px)"
          srcSet={`${desktopImage}?fmt=auto&$poi$&sm=aspect&w=1550&aspect=${desktopAspect} 1x, ${desktopImage}?fmt=auto&$poi$&sm=aspect&w=3100&aspect=${desktopAspect} 2x`}
        />
        <source
          media="(min-width: 376px)"
          srcSet={`${mobileImage}?fmt=auto&$poi$&sm=aspect&w=600&aspect=${mobileAspect} 1x, ${mobileImage}?fmt=auto&$poi$&sm=aspect&w=1200&aspect=${mobileAspect} 2x`}
        />
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={`${mobileImage}?fmt=auto&$poi$&sm=aspect&w=800&aspect=${mobileAspect}`}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <div
        className={`absolute z-10 flex flex-col ${
          align === 'left'
            ? 'left-[6.2%] top-[50%] max-w-[555px] -translate-y-[24%] items-start text-left'
            : 'left-1/2 top-1/2 w-[620px] max-w-[calc(100%-40px)] -translate-x-1/2 -translate-y-[36%] items-center text-center'
        }`}
      >
        <h2 className="text-[35px] font-black leading-[1.05] tracking-[-0.075em] md:text-[36px]">{title}</h2>
        <p className={`mt-[22px] text-[18px] leading-[1.34] tracking-[-0.055em] ${align === 'center' ? 'max-w-[590px]' : 'max-w-[545px]'}`}>
          {copy}
        </p>
        <a
          href={href}
          className={`mt-[46px] inline-flex h-[42px] items-center justify-center text-[16px] tracking-[-0.055em] text-black ${
            align === 'left'
              ? 'gap-[10px] font-medium'
              : 'min-w-[142px] rounded-full border border-black px-8 font-semibold transition-colors hover:bg-black hover:text-white'
          }`}
        >
          {cta}
          {align === 'left' ? <span aria-hidden="true">-&gt;</span> : null}
        </a>
      </div>
    </div>
  </section>
);

const BlogBottomRoutes = () => (
  <div className="pb-[19px]">
    <BlogRoutingHero
      align="left"
      title="Understanding ingredients"
      copy="Check out our skincare glossary to decode our ingredients and learn more about the science-led technologies we use in our formulas."
      cta="Ingredient Glossary"
      href="#"
      desktopImage="https://cdn.media.amplience.net/i/deciem/m3-IngredientGlossary"
      mobileImage="https://cdn.media.amplience.net/i/deciem/Full-Width"
      desktopAspect="2:1"
    />
    <BlogRoutingHero
      title="It's In Our DNA"
      copy="Our values are more than shared ideas - they are the ethos that guide our entire team to create products we can be proud of."
      cta="Learn More"
      href="https://theordinary.com/en-us/the-ordinary-skincare-science.html"
      desktopImage="https://cdn.media.amplience.net/i/deciem/m5AncillaryRoutingDNA"
      mobileImage="https://cdn.media.amplience.net/i/deciem/m5AncillaRoutinDNA"
    />
  </div>
);

const BlogPage = ({
  title = 'The O. Library',
  description = 'Written by us with your skin in mind. The O. Blog uncovers the science behind your skin, and offers an inside look at our formulations, and the key ingredients that make them so well-loved.',
  categories = defaultCategories,
  activeCategory = 'View all',
  resultCount = 103,
  featuredArticle = defaultFeaturedArticle,
  articles = defaultArticles,
}) => (
  <div className="min-h-screen bg-white font-['Inter',sans-serif] text-black">
    <Header />

    <main>
      <AnimatedSection>
        <section className="border-t border-[#e2e2e2] bg-white">
          <div className="mx-auto max-w-[1282px] px-5 pb-[19px] pt-[81px] md:px-8 lg:px-0 lg:pt-[82px]">
            <div className="grid gap-[54px] lg:grid-cols-[620px_461px] lg:justify-between">
              <div>
                <h1 className="text-[44px] font-black leading-none tracking-[-0.075em] text-[#111827] md:text-[49px]">{title}</h1>
                <p className="mt-[28px] max-w-[610px] text-[17px] leading-[1.42] tracking-[-0.056em] text-[#111827]">{description}</p>
              </div>

              <form className="flex h-[41px] items-start border-b border-black lg:mt-[66px]">
                <label htmlFor="blog-search" className="sr-only">Search</label>
                <input
                  id="blog-search"
                  type="search"
                  placeholder="Search"
                  className="min-w-0 flex-1 bg-transparent pt-[7px] text-[16px] tracking-[-0.045em] outline-none placeholder:text-[#777]"
                />
                <button type="submit" aria-label="Search blog" className="pb-[9px] pl-4">
                  <SearchIcon />
                </button>
              </form>
            </div>

            <nav className="mt-[82px] flex gap-[38px] overflow-x-auto border-b border-[#d8d8d8] pb-[27px] text-[16px] tracking-[-0.048em] lg:gap-[44px]">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className={`shrink-0 whitespace-nowrap underline-offset-2 hover:underline ${category === activeCategory ? 'font-medium underline' : ''}`}
                >
                  {category}
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-between border-b border-[#d8d8d8] py-[20px]">
              <button className="flex h-[35px] min-w-[150px] items-center justify-center gap-[9px] border border-[#8a8a8a] px-6 text-[14px] tracking-[-0.035em]">
                Sort By
                <CaretDown />
              </button>
              <p className="text-[14px] tracking-[-0.04em]">({resultCount} Results)</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-white">
          <div className="mx-auto max-w-[1282px] px-5 pb-[66px] pt-[84px] md:px-8 lg:px-0">
            <article className="grid min-h-[430px] gap-[42px] lg:grid-cols-[1fr_620px] lg:gap-[42px]">
              <div className="flex flex-col justify-center pb-[14px] lg:min-h-[430px]">
                <p className="text-[15px] leading-none tracking-[-0.045em] text-[#58606a]">{featuredArticle.category}</p>
                <h2 className="mt-[23px] max-w-[655px] text-[34px] font-black leading-[1.22] tracking-[-0.079em] md:text-[35px]">
                  <a href={featuredArticle.href} className="underline underline-offset-2">
                    {featuredArticle.title}
                  </a>
                </h2>
                <p className="mt-[23px] text-[14px] font-bold leading-none tracking-[-0.035em]">{featuredArticle.date}</p>
                <p className="mt-[9px] text-[14px] font-bold leading-none tracking-[-0.035em]">{featuredArticle.author}</p>
              </div>
              <a href={featuredArticle.href} className="block overflow-hidden bg-[#f4f4f4]">
                <img className="h-full min-h-[360px] w-full object-cover object-center lg:min-h-[430px]" src={featuredArticle.image} alt={featuredArticle.title} />
              </a>
            </article>

            <div className="mt-[68px] grid grid-cols-1 gap-x-[39px] gap-y-[68px] sm:grid-cols-2 lg:grid-cols-4">
              {articles.map((article) => (
                <BlogArticleCard key={`${article.title}-${article.date}`} article={article} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <BlogBottomRoutes />
      </AnimatedSection>
    </main>

    <AnimatedSection>
      <Footer />
    </AnimatedSection>
    <ChatButton />
  </div>
);

export default BlogPage;
