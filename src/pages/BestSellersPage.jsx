import AnimatedSection from '../components/AnimatedSection';
import ChatButton from '../components/ChatButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { products } from '../components/data/homeData';

const categoryProducts = [
  ...products,
  {
    tag: 'Trending',
    name: 'Volufiline 92% + Pal-Isoleucine 1%',
    rating: '4.0 (432)',
    benefit: 'Targets Visible Volume Loss',
    price: '$30.40 CAD',
    sizes: ['15 mL'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwcc943d10/Images/products/The%20Ordinary/ord-volufiline-92-pal-isoleucine-1-15ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: 'O. Exclusive',
    name: 'Serum Foundation',
    rating: '4.4 (1281)',
    benefit: 'Lightweight, Medium Coverage',
    price: '$8.20 CAD',
    sizes: ['30ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw60f28d4c/Images/products/The%20Ordinary/Colours/rdn-serum-foundation-31-y-30ml.png?sw=640&sh=640&sm=fit',
    action: 'Select Shade',
  },
  {
    tag: 'Bestseller',
    name: 'Multi-Peptide + HA Serum',
    rating: '4.3 (731)',
    benefit: 'Targets Multiple Signs of Aging',
    price: '$35.00 CAD',
    sizes: ['30ml', '60ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw92d4ac8a/Images/products/The%20Ordinary/rdn-multi-peptide-ha-serum-30ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: 'Bestseller',
    name: 'Caffeine Solution 5% + EGCG',
    rating: '4.2 (1128)',
    benefit: 'Targets Look of Puffiness',
    price: '$9.90 CAD',
    sizes: ['30ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwf9cb3d75/Images/products/The%20Ordinary/rdn-caffeine-solution-5pct-egcg-30ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: 'Bestseller',
    name: 'AHA 30% + BHA 2% Peeling Solution',
    rating: '4.6 (1933)',
    benefit: 'Exfoliates, Smooths Texture',
    price: '$10.60 CAD',
    sizes: ['30ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw1d6852a5/Images/products/The%20Ordinary/rdn-aha-30pct-bha-2pct-peeling-solution-30ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: 'Bestseller',
    name: 'Retinal 0.2% Emulsion',
    rating: '4.5 (968)',
    benefit: 'Targets Signs of Aging',
    price: '$19.90 CAD',
    sizes: ['15ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwa863ca2c/Images/products/The%20Ordinary/ord-retinal-02-emulsion-15ml.png?sh=860&sm=fit&sw=860',
  },
  {
    tag: 'Bestseller',
    name: 'Multi-Peptide + Copper Peptides 1% Serum',
    rating: '4.5 (1223)',
    benefit: 'For Advanced Signs Of Aging',
    price: '$39.50 CAD',
    sizes: ['30ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwc0f1a6f8/Images/products/The%20Ordinary/rdn-multi-peptide-copper-peptides-1pct-serum-30ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: 'Trending',
    name: 'Multi-Peptide Serum for Hair Density',
    rating: '4.4 (1263)',
    benefit: 'For Density And Thickness',
    price: '$31.20 CAD',
    sizes: ['60ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb40ccfe2/Images/products/The%20Ordinary/FY25-D41247-ORD-Web-PDP-Mlt-Pptd-Hair-1x1-EN-1.jpg?sw=640&sh=640&sm=fit',
  },
];

const innovativeProducts = [
  {
    tag: '',
    name: 'Sulfur 10% Powder-to-Cream Concentrate',
    rating: '4.5 (341)',
    benefit: 'Treats Acne, Soothes Redness',
    price: '$13.00 CAD',
    sizes: ['5g'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw86d342b0/Images/products/The%20Ordinary/ord-sulfur-10pct-powder-to-cream-concentrate-5g.png?sh=860&sm=fit&sw=860',
  },
  {
    tag: '',
    name: 'The Mini Icons Set',
    rating: '4.4 (5839)',
    benefit: 'Exfoliates, Smooths, Hydrates.',
    price: '$23.20 CAD',
    sizes: ['1 set'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw00a9e3db/Images/products/The%20Ordinary/ord-the-mini-icons-set.png?sh=860&sm=fit&sw=860',
  },
  {
    tag: 'New',
    name: 'Rice Lipids + Ectoin Microemulsion',
    rating: '4.7 (437)',
    benefit: '24-Hour Hydration, Repairs Barrier',
    price: '$17.80 CAD',
    sizes: ['60ml', '120ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw97ea82d2/Images/products/The%20Ordinary/ord-rice-lipids-ectoin-microemulsion-60ml.png?sh=860&sm=fit&sw=860',
    badge: 'https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwf8fc4a19/awards/test-eczema-seal.png',
    badgeClass: 'left-[26px] bottom-[17px] h-[74px] w-[74px]',
  },
  {
    tag: '',
    name: 'Caffeine 3% + Escin 1% Face Serum',
    rating: '4.8 (24)',
    benefit: 'Energizes, Visibly Sculpts',
    price: '$11.70 CAD',
    sizes: ['30ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw90bc4597/Images/products/The%20Ordinary/ord-caffeine-3pct-escin-1pct-face-serum-30ml.png?sh=860&sm=fit&sw=860',
  },
];

const heroProducts = [
  {
    name: 'Glucoside Foaming Cleanser',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw601b47f7/Images/products/The%20Ordinary/rdn-glucoside-foaming-cleanser-150ml.png?sw=900&sh=900&sm=fit',
    className: 'left-[46px] bottom-[20px] z-10 h-[420px]',
  },
  {
    name: 'Hyaluronic Acid 2% + B5',
    image: products[1].image,
    className: 'left-[213px] bottom-[34px] z-20 h-[235px]',
  },
  {
    name: 'Glycolic Acid 7% Exfoliating Toner',
    image: products[3].image,
    className: 'left-[310px] bottom-[26px] z-30 h-[352px]',
  },
  {
    name: 'Natural Moisturizing Factors + HA',
    image: products[2].image,
    className: 'right-[28px] bottom-[73px] z-20 h-[323px]',
  },
];

const libraryArticles = [
  {
    title: 'How to Build a Regimen',
    category: 'Skincare Education',
    image:
      'https://cdn.media.amplience.net/i/deciem/ordinary-prep-treat-seal-regimen?fmt=auto&$poi$&sm=aspect&w=1000&aspect=1:1',
    featured: true,
  },
  {
    title: 'Layering Guide',
    category: 'Skincare Education',
    image:
      'https://cdn.media.amplience.net/i/deciem/Layering-Guide-Blog_Image-Thumnail?fmt=auto&$poi$&sm=aspect&w=1000&aspect=1:1',
  },
  {
    title: 'Retinoids 101',
    category: 'Skincare Education',
    image:
      'https://cdn.media.amplience.net/i/deciem/ord-Retinal-Blog-2-Retinoids-Guide_THUMBNAIL?fmt=auto&$poi$&sm=aspect&w=1000&aspect=1:1',
  },
  {
    title: 'What is a Skin Toner?',
    category: 'Skincare Education',
    image:
      'https://cdn.media.amplience.net/i/deciem/ORD-MilkyToner-Web-Blog-04_Img-07?fmt=auto&$poi$&sm=aspect&w=1000&aspect=1:1',
  },
];

const Stars = () => (
  <span className="inline-flex items-center text-[18px] leading-none text-black" aria-hidden="true">
    {'\u2605\u2605\u2605\u2605'}<span className="text-black/25">{'\u2605'}</span>
  </span>
);

const CaretDown = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m7 10 5 5 5-5" />
  </svg>
);

const ProductTile = ({ product }) => (
  <article className="text-[#101010]">
    <div className="group relative flex aspect-square items-center justify-center overflow-hidden bg-[#f8f8f8]">
      {product.tag && (
        <span className="absolute left-3 top-3 rounded-[2px] bg-white px-[5px] py-[5px] text-[12px] font-medium leading-none tracking-[-0.04em]">
          {product.tag}
        </span>
      )}
      <button aria-label={`Save ${product.name}`} className="absolute right-3 top-3 text-black">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.5 5.6c-1.8-1.8-4.8-1.8-6.6 0L12 6.5l-.9-.9c-1.8-1.8-4.8-1.8-6.6 0s-1.8 4.8 0 6.6l.9.9L12 19.6l6.6-6.5.9-.9c1.8-1.8 1.8-4.8 0-6.6Z" />
        </svg>
      </button>
      <img className={`object-contain ${product.imageClass || 'h-[78%] w-[78%]'}`} src={product.image} alt={product.name} />
      {product.badge && <img className={`absolute object-contain ${product.badgeClass}`} src={product.badge} alt="" aria-hidden="true" />}
      <button className="absolute inset-x-0 top-[43%] hidden h-[38px] items-center justify-center gap-[12px] bg-black text-[12px] font-bold tracking-[-0.035em] text-white underline underline-offset-2 group-hover:flex">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
          <circle cx="12" cy="12" r="2.4" />
        </svg>
        Quick view
      </button>
    </div>

    <h2 className="mt-[38px] min-h-[48px] text-[18px] font-medium leading-[1.32] tracking-[-0.065em] underline-offset-2">
      {product.name === 'Serum Foundation' ? <a href="#" className="underline">{product.name}</a> : product.name}
    </h2>

    <div className="mt-[26px] flex items-center gap-[7px] text-[13px] tracking-[-0.02em]">
      <Stars />
      <span>{product.rating}</span>
    </div>
    <p className="mt-[7px] min-h-[38px] text-[15px] leading-[1.25] tracking-[-0.052em] text-[#4d4d4d]">{product.benefit}</p>

    <div className="mt-[25px] border-t border-[#dddddd] pt-[24px]">
      <div className="flex min-h-[24px] items-start justify-between gap-4">
        <p className="text-[17px] font-black tracking-[-0.045em]">{product.price}</p>
        <div className="flex gap-[14px] text-[14px] tracking-[-0.04em] text-[#3f3f3f]">
          {product.sizes.map((size, index) => (
            <button key={size} className={index === 0 ? 'font-medium text-black underline underline-offset-2' : ''}>
              {size}
            </button>
          ))}
        </div>
      </div>
      <button className="mt-[21px] h-11 w-full border border-[#dddddd] bg-white text-[16px] font-medium tracking-[-0.055em] transition-colors hover:border-black">
        {product.action || 'Add To Cart'}
      </button>
    </div>
  </article>
);

const PromoCard = () => (
  <article className="bg-white lg:col-span-2">
    <img
      className="h-[272px] w-full object-cover object-[70%_center]"
      src="https://cdn.media.amplience.net/i/deciem/2026-02-06-D51239-ORD-Caffeine-Face-New-PLP-Desktop-Img?fmt=auto&$poi$&sm=aspect&w=1200&aspect=16:7"
      alt="Caffeine serum application"
    />
    <div className="border-l border-[#dddddd] px-[31px] pb-[44px] pt-[51px]">
      <h2 className="text-[29px] font-black leading-[1.05] tracking-[-0.075em]">Massage In. Increase Microcirculation.</h2>
      <p className="mt-[13px] max-w-[520px] text-[20px] leading-[1.35] tracking-[-0.068em] text-[#353535]">
        Massage our new Caffeine 3% + Escin 1% Face Serum into your face for a more sculpted and defined look.
      </p>
      <button className="mt-[26px] rounded-full border border-black px-[32px] py-[11px] text-[15px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white">
        Discover Caffeine
      </button>
    </div>
  </article>
);

const HairDensityPromo = () => (
  <article className="bg-white lg:col-span-2">
    <img
      className="h-[291px] w-full object-cover object-[52%_28%]"
      src="https://cdn.media.amplience.net/i/deciem/ORD-Home-Page-Hero-Multi-Peptide-Hair-Density-Mobile-Img?fmt=auto&$poi$&sm=aspect&w=900&aspect=16:7"
      alt="Multi-Peptide Serum for Hair Density application"
    />
    <div className="border-l border-[#dddddd] px-[33px] pb-[34px] pt-[52px]">
      <h2 className="text-[29px] font-black leading-[1.05] tracking-[-0.075em]">Dial Up The Density.</h2>
      <p className="mt-[14px] max-w-[520px] text-[20px] leading-[1.35] tracking-[-0.068em] text-[#353535]">
        Discover targeted scalp support for thicker, denser, fuller-looking hair.
      </p>
      <button className="mt-[26px] rounded-full border border-black px-[32px] py-[11px] text-[15px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white">
        Shop Now
      </button>
    </div>
  </article>
);

const OLibrarySection = () => {
  const featured = libraryArticles.find((article) => article.featured);
  const sideArticles = libraryArticles.filter((article) => !article.featured);

  return (
    <section className="bg-white font-['Inter',sans-serif]">
      <div className="mx-auto max-w-[1192px] border-b border-[#d9d9d9] px-5 pb-[150px] pt-[74px] md:px-0">
        <div className="mb-[31px] flex items-start justify-between gap-6">
          <h2 className="max-w-[600px] text-[29px] font-black leading-[1.18] tracking-[-0.078em]">
            Check Out Some of Our Back-to-Basics
            <br />
            Resources from the O. Library
          </h2>
          <a
            href="#"
            className="mt-[2px] hidden h-[42px] min-w-[173px] items-center justify-center rounded-full border border-black px-7 text-[14px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white md:flex"
          >
            Read More Here
          </a>
        </div>

        <div className="grid grid-cols-1 gap-[70px] lg:grid-cols-[475px_565px] lg:gap-[150px]">
          <article>
            <img className="h-[462px] w-full object-cover object-center" src={featured.image} alt={featured.title} />
            <p className="mt-[26px] text-[15px] font-medium leading-none tracking-[-0.045em] text-[#52606d]">{featured.category}</p>
            <h3 className="mt-[14px] text-[31px] font-black leading-[1.05] tracking-[-0.08em]">{featured.title}</h3>
          </article>

          <div className="pt-[16px]">
            {sideArticles.map((article, index) => (
              <article key={article.title} className={`grid grid-cols-[180px_1fr] gap-[40px] ${index > 0 ? 'border-t border-[#d9d9d9] pt-[23px]' : ''} ${index < sideArticles.length - 1 ? 'pb-[23px]' : ''}`}>
                <img className="h-[181px] w-[180px] object-cover" src={article.image} alt={article.title} />
                <div className="flex flex-col justify-center pt-[4px]">
                  <p className="text-[15px] font-medium leading-none tracking-[-0.045em] text-[#52606d]">{article.category}</p>
                  <h3 className="mt-[16px] text-[19px] font-black leading-[1.18] tracking-[-0.058em]">{article.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const NewInnovativeSection = () => (
  <section className="bg-white font-['Inter',sans-serif]">
    <div className="mx-auto max-w-[1192px] px-5 pb-[80px] pt-[25px] md:px-0">
      <h2 className="mb-[41px] text-[30px] font-black leading-none tracking-[-0.075em] text-[#252525]">New &amp; Innovative</h2>
      <div className="grid grid-cols-1 gap-x-10 gap-y-[72px] sm:grid-cols-2 lg:grid-cols-4">
        {innovativeProducts.map((product) => (
          <ProductTile key={product.name} product={product} />
        ))}
      </div>
    </div>
  </section>
);

const BestSellersPage = () => (
  <div className="min-h-screen bg-white font-['Inter',sans-serif] text-black">
    <Header />

    <main>
      <AnimatedSection direction="up">
        <section className="relative overflow-hidden bg-[#f8f8f8]">
          <div className="mx-auto grid min-h-[451px] max-w-[1192px] grid-cols-1 px-5 md:grid-cols-[45%_55%] md:px-0">
            <div className="relative z-10 pt-[29px]">
              <nav className="flex items-center gap-[10px] text-[15px] tracking-[-0.045em] text-[#777]">
                <a href="/" className="hover:underline">Home</a>
                <span className="text-[19px] text-[#777]">&rsaquo;</span>
                <span className="text-black">Bestsellers</span>
              </nav>
              <div className="pt-[94px]">
                <h1 className="text-[38px] font-black leading-none tracking-[-0.078em] text-[#303030]">Bestsellers</h1>
                <p className="mt-[12px] max-w-[505px] text-[17px] leading-[1.38] tracking-[-0.057em] text-[#555]">
                  Explore our community's most loved and bestselling skincare products that offer efficacious solutions for their skincare concerns.
                </p>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute bottom-0 right-[-4px] h-full w-[628px]">
                {heroProducts.map((product) => (
                  <img
                    key={product.name}
                    src={product.image}
                    alt=""
                    aria-hidden="true"
                    className={`absolute object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.06)] ${product.className}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection direction="left">
        <section className="mx-auto max-w-[1050px] px-5 pb-[92px] pt-[18px] md:px-0">
          <div className="sticky top-0 z-20 -mx-5 flex min-h-[68px] items-start justify-between border-b border-transparent bg-white px-5 pt-0 md:static md:mx-0 md:px-0">
            <div className="flex gap-[15px]">
              <button className="flex h-[50px] min-w-[110px] items-center justify-center gap-[15px] border border-[#7d7d7d] px-[19px] text-[16px] font-medium tracking-[-0.055em]">
                Filters
                <CaretDown />
              </button>
              <button className="flex h-[50px] min-w-[109px] items-center justify-center gap-[16px] border border-[#7d7d7d] px-[18px] text-[16px] font-medium tracking-[-0.055em]">
                Sort By
                <CaretDown />
              </button>
            </div>
            <p className="pt-[10px] text-[13px] font-bold tracking-[-0.035em] text-[#666]">(12 Results )</p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-[72px] pt-[49px] sm:grid-cols-2 lg:grid-cols-4">
            {categoryProducts.slice(0, 2).map((product) => (
              <ProductTile key={product.name} product={product} />
            ))}
            <PromoCard />
            {categoryProducts.slice(2, 6).map((product) => (
              <ProductTile key={product.name} product={product} />
            ))}
            <HairDensityPromo />
            {categoryProducts.slice(10, 12).map((product) => (
              <ProductTile key={product.name} product={product} />
            ))}
            {categoryProducts.slice(6, 10).map((product) => (
              <ProductTile key={product.name} product={product} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection direction="right">
        <OLibrarySection />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <NewInnovativeSection />
      </AnimatedSection>
    </main>

    <AnimatedSection direction="right">
      <Footer />
    </AnimatedSection>
    <ChatButton />
  </div>
);

export default BestSellersPage;
