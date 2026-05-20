import AnimatedSection from '../components/AnimatedSection';
import ChatButton from '../components/ChatButton';
import BestsellersSection from '../components/BestsellersSection';
import CommonConcernsSection from '../components/CommonConcernsSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OLibrarySection from '../components/OLibrarySection';
import SocialSection from '../components/SocialSection';
import SplitFeatureSection from '../components/SplitFeatureSection';
import { products } from '../components/data/homeData';

const skincareProducts = {
  hyaluronic: products[1],
  niacinamide: products[0],
  glycolic: products[3],
  moisturizing: products[2],
  copper: {
    tag: 'Bestseller',
    name: 'Multi-Peptide + Copper Peptides 1% Serum',
    rating: '4.5 (1223)',
    benefit: 'For Advanced Signs Of Aging',
    price: '$39.50 CAD',
    sizes: ['30ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwc0f1a6f8/Images/products/The%20Ordinary/rdn-multi-peptide-copper-peptides-1pct-serum-30ml.png?sw=640&sh=640&sm=fit',
  },
  hairDensity: {
    tag: 'Trending',
    name: 'Multi-Peptide Serum for Hair Density',
    rating: '4.4 (1263)',
    benefit: 'For Density And Thickness',
    price: '$31.20 CAD',
    sizes: ['60ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb40ccfe2/Images/products/The%20Ordinary/FY25-D41247-ORD-Web-PDP-Mlt-Pptd-Hair-1x1-EN-1.jpg?sw=640&sh=640&sm=fit',
    badge: 'https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwd0f510dc/awards/ORD-team-favs.png',
    badgeClass: 'left-5 bottom-5 h-[86px] w-[86px]',
  },
  serumFoundation: {
    tag: 'O. Exclusive',
    name: 'Serum Foundation',
    rating: '4.4 (1281)',
    benefit: 'Lightweight, Medium Coverage',
    price: '$8.20 CAD',
    sizes: ['30ml'],
    action: 'Select Shade',
    underlined: false,
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw93c635dc/Images/products/The%20Ordinary/Colours/serum-foundation-21y.png?sw=640&sh=640&sm=fit',
    imageClass: 'h-[74%] w-[74%]',
  },
  azelaic: {
    tag: 'Trending',
    name: 'Azelaic Acid Suspension 10%',
    rating: '4.5 (1387)',
    benefit: 'Smooths Texture, Brightens',
    price: '$15.80 CAD',
    sizes: ['30ml', '100ml'],
    underlined: true,
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw56fd165b/Images/products/The%20Ordinary/rdn-azelaic-acid-suspension-10pct-30ml.png?sw=640&sh=640&sm=fit',
  },
  caffeineEye: {
    tag: 'Trending',
    name: 'Caffeine Solution 5% + EGCG Eye Serum',
    rating: '4.2 (1816)',
    benefit: 'For Dark Circles & Puffiness',
    price: '$11.90 CAD',
    sizes: ['30ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwf9cb3d75/Images/products/The%20Ordinary/rdn-caffeine-solution-5pct-egcg-30ml.png?sw=640&sh=640&sm=fit',
  },
  glucoside: {
    tag: 'Trending',
    name: 'Glucoside Foaming Cleanser',
    rating: '4.5 (1153)',
    benefit: 'Improves Look Of Skin Clarity',
    price: '$14.80 CAD',
    sizes: ['150ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw601b47f7/Images/products/The%20Ordinary/rdn-glucoside-foaming-cleanser-150ml.png?sw=640&sh=640&sm=fit',
    badge: 'https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwf8fc4a19/awards/test-eczema-seal.png',
    badgeClass: 'left-6 bottom-4 h-[74px] w-[74px]',
  },
  multiPeptideHA: {
    tag: 'Bestseller',
    name: 'Multi-Peptide + HA Serum',
    rating: '4.4 (1246)',
    benefit: 'For Early Signs Of Aging',
    price: '$23.50 CAD',
    sizes: ['30ml', '60ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw92d4ac8a/Images/products/The%20Ordinary/rdn-multi-peptide-ha-serum-30ml.png?sw=640&sh=640&sm=fit',
  },
  betaGlucan: {
    tag: '',
    name: 'Natural Moisturizing Factors + Beta Glucan',
    rating: '4.4 (1177)',
    benefit: 'Supports Barrier, Refreshes',
    price: '$7.70 CAD',
    sizes: ['30ml', '100ml'],
    underlined: true,
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwa142d0e1/Images/products/The%20Ordinary/ord-nmf-beta-glucan-30ml.png?sw=640&sh=640&sm=fit',
    badge: 'https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwf8fc4a19/awards/test-eczema-seal.png',
    badgeClass: 'left-6 bottom-4 h-[74px] w-[74px]',
  },
};

const skincareSocialCards = [
  {
    title: 'Multi-Peptide Serum for Hair Density',
    image:
      'https://cdn.media.amplience.net/i/deciem/ORD-Home-Page-Hero-Multi-Peptide-Hair-Density-Mobile-Img?fmt=auto&$poi$&sm=aspect&w=700&aspect=4:5',
    productImage:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb40ccfe2/Images/products/The%20Ordinary/FY25-D41247-ORD-Web-PDP-Mlt-Pptd-Hair-1x1-EN-1.jpg?sw=120&sh=120&sm=fit',
  },
  {
    title: 'Sulfur 10% Powder-to-Cream Concentrate',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw86d342b0/Images/products/The%20Ordinary/ord-sulfur-10pct-powder-to-cream-concentrate-5g.png?sh=860&sm=fit&sw=860',
    productImage:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw86d342b0/Images/products/The%20Ordinary/ord-sulfur-10pct-powder-to-cream-concentrate-5g.png?sw=120&sh=120&sm=fit',
  },
  {
    title: 'Natural Moisturizing Factors + HA',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw51f90af8/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png?sh=860&sm=fit&sw=860',
    productImage:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw51f90af8/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png?sw=120&sh=120&sm=fit',
  },
];

const shopSteps = [
  {
    title: 'Step 1: Prep',
    copy: 'Products to prep and prime the skin for the benefits of treatments.',
    image: 'https://cdn.media.amplience.net/i/deciem/Shop-by-step-img2?fmt=auto&$poi$&sm=aspect&w=500&aspect=4:3',
  },
  {
    title: 'Step 2: Treat',
    copy: 'Address specific skin concerns using targeted formulas.',
    image: 'https://cdn.media.amplience.net/i/deciem/Shop-by-step-img1?fmt=auto&$poi$&sm=aspect&w=500&aspect=4:3',
  },
  {
    title: 'Step 3: Seal',
    copy: 'Products to lock in hydration, the benefits of our treatments, and to protect the skin.',
    image: 'https://cdn.media.amplience.net/i/deciem/Shop-by-step-img3?fmt=auto&$poi$&sm=aspect&w=500&aspect=4:3',
  },
];

const SkincareHero = () => (
  <section className="relative min-h-[451px] overflow-hidden bg-[#f7f7f7] font-['Inter',sans-serif]">
    <img
      className="absolute inset-0 h-full w-full object-cover object-center"
      src="https://cdn.media.amplience.net/i/deciem/2025-09-01-D50672-ORD-PLP-Hero-Banners-Skincare-PCP?fmt=auto&$poi$&sm=aspect&w=1920&aspect=3:1"
      alt=""
      aria-hidden="true"
    />
    <div className="relative z-10 mx-auto max-w-[1192px] px-5 pt-[29px] md:px-0">
      <nav className="flex items-center gap-[10px] text-[15px] tracking-[-0.045em] text-[#777]">
        <a href="/" className="hover:underline">Home</a>
        <span className="text-[19px] text-[#777]">&rsaquo;</span>
        <span className="text-black">Skincare</span>
      </nav>
      <div className="pt-[94px]">
        <h1 className="text-[38px] font-black leading-none tracking-[-0.078em] text-[#303030]">Find Your Formulation</h1>
        <p className="mt-[13px] max-w-[505px] text-[17px] leading-[1.42] tracking-[-0.057em] text-[#555]">
          All our products have been intentionally formulated to enhance your skin's natural state and target specific concerns.
        </p>
        <p className="mt-[31px] text-[17px] font-bold tracking-[-0.055em] text-[#303030]">Don&apos;t know where to start?</p>
        <a
          href="#"
          className="mt-[13px] inline-flex h-[43px] min-w-[196px] items-center justify-center rounded-full border border-black px-8 text-[15px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white"
        >
          Build Your Regimen
        </a>
        <a href="#" className="mt-[36px] flex items-center gap-[10px] text-[17px] font-bold tracking-[-0.055em] text-[#303030]">
          Shop All Skincare
          <span className="text-[24px] leading-none">&rarr;</span>
        </a>
      </div>
    </div>
  </section>
);

const ShopByStepSection = ({ steps = shopSteps }) => (
  <section className="bg-white font-['Inter',sans-serif]">
    <div className="mx-auto max-w-[1192px] border-t border-[#d9d9d9] px-5 pb-[78px] pt-[66px] md:px-0">
      <div className="max-w-[465px]">
        <h2 className="text-[29px] font-black leading-none tracking-[-0.075em] text-[#28313a]">Shop By Step</h2>
        <p className="mt-[18px] text-[17px] leading-[1.42] tracking-[-0.055em] text-[#1f2937]">
          Our 3 step regimen approach is designed to help you customize your skincare routine. Explore formulations that PREP skin, TREAT concerns or SEAL in benefits.
        </p>
      </div>

      <div className="mt-[42px] grid grid-cols-1 gap-[40px] md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title}>
            <img className="h-[244px] w-full object-cover" src={step.image} alt={step.title} />
            <h3 className="mt-[28px] text-[23px] font-black leading-none tracking-[-0.065em] text-[#28313a]">{step.title}</h3>
            <p className="mt-[17px] max-w-[335px] text-[17px] leading-[1.42] tracking-[-0.055em] text-[#1f2937]">{step.copy}</p>
            <a href="#" className="mt-[24px] flex items-center gap-[10px] text-[17px] font-bold tracking-[-0.055em]">
              View All
              <span className="text-[24px] leading-none">&rarr;</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

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

const SkincareProductTile = ({ product }) => (
  <article className="text-[#101010]">
    <div className="group relative flex aspect-square items-center justify-center overflow-hidden bg-[#f8f8f8]">
      {product.tag && (
        <span className="absolute left-3 top-3 z-10 rounded-[2px] bg-white px-[5px] py-[5px] text-[12px] font-medium leading-none tracking-[-0.04em]">
          {product.tag}
        </span>
      )}
      <button aria-label={`Save ${product.name}`} className="absolute right-3 top-3 z-10 text-black">
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
      {product.underlined ? <a href="#" className="underline">{product.name}</a> : product.name}
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
      <button className="mt-[21px] flex h-11 w-full items-center justify-center border border-[#dddddd] bg-white text-[14px] font-medium tracking-[-0.04em] transition-colors hover:border-black">
        {product.action || 'Add To Cart'}
      </button>
    </div>
  </article>
);

const RecentlyViewedSection = () => (
  <section className="bg-white font-['Inter',sans-serif]">
    <div className="mx-auto max-w-[1192px] border-b border-[#d9d9d9] px-5 pb-[70px] pt-[47px] md:px-0">
      <h2 className="text-[29px] font-black leading-none tracking-[-0.065em] text-[#111827]">Recently Viewed</h2>
      <div className="mt-[42px] grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        <SkincareProductTile product={skincareProducts.glucoside} />
      </div>
    </div>
  </section>
);

const SkincarePromoTile = () => (
  <article className="bg-white lg:col-span-2">
    <img
      className="h-[183px] w-full object-cover object-center md:h-[265px]"
      src="https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw988af069/Images/products/The%20Ordinary/Before-After/ord-caffeine-3pct-escin-1pct-face-serum-before-after-texture.jpg?sh=860&sm=fit&sw=860"
      alt="Before and after skin texture comparison"
    />
    <div className="border-l border-[#dddddd] px-[31px] pb-[66px] pt-[58px]">
      <h2 className="text-[29px] font-black leading-[1.05] tracking-[-0.075em]">Immediately Refreshed Skin.</h2>
      <p className="mt-[13px] max-w-[525px] text-[20px] leading-[1.35] tracking-[-0.068em] text-[#353535]">
        Formulated with caffeine and escin-a group of molecules found in horse chestnut seed extract-to sculpt the look of skin over time.
      </p>
      <button className="mt-[25px] rounded-full border border-black px-[32px] py-[11px] text-[15px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white">
        Discover Caffeine
      </button>
    </div>
  </article>
);

const HairDensityPromoTile = () => (
  <article className="bg-white lg:col-span-2">
    <img
      className="h-[273px] w-full object-cover object-[50%_28%]"
      src="https://cdn.media.amplience.net/i/deciem/ORD-Home-Page-Hero-Multi-Peptide-Hair-Density-Mobile-Img?fmt=auto&$poi$&sm=aspect&w=900&aspect=16:7"
      alt="Applying hair density serum"
    />
    <div className="border-l border-[#dddddd] px-[33px] pb-[86px] pt-[52px]">
      <h2 className="text-[29px] font-black leading-[1.05] tracking-[-0.075em]">Dial Up The Density.</h2>
      <p className="mt-[13px] max-w-[520px] text-[20px] leading-[1.35] tracking-[-0.068em] text-[#353535]">
        Discover targeted scalp support for thicker, denser, fuller-looking hair.
      </p>
      <button className="mt-[25px] rounded-full border border-black px-[32px] py-[11px] text-[15px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white">
        Shop Now
      </button>
    </div>
  </article>
);

const SkincareListingSection = () => (
  <section className="bg-white font-['Inter',sans-serif]">
    <div className="mx-auto max-w-[1192px] px-5 pb-[94px] pt-0 md:px-0">
      <div className="sticky top-0 z-20 -mx-5 flex min-h-[87px] items-start justify-between bg-white px-5 pt-0 md:static md:mx-0 md:px-0">
        <div className="flex gap-[15px]">
          <button className="flex h-[39px] min-w-[110px] items-center justify-center gap-[15px] border border-[#7d7d7d] px-[19px] text-[16px] font-medium tracking-[-0.055em]">
            Filters
            <CaretDown />
          </button>
          <button className="flex h-[39px] min-w-[109px] items-center justify-center gap-[16px] border border-[#7d7d7d] px-[18px] text-[16px] font-medium tracking-[-0.055em]">
            Sort By
            <CaretDown />
          </button>
        </div>
        <p className="pt-[11px] text-[13px] font-bold tracking-[-0.035em] text-[#666]">(82 Results )</p>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-[88px] pt-[28px] sm:grid-cols-2 lg:grid-cols-4">
        <SkincareProductTile product={skincareProducts.hyaluronic} />
        <SkincareProductTile product={skincareProducts.niacinamide} />
        <SkincarePromoTile />
        <SkincareProductTile product={skincareProducts.glycolic} />
        <SkincareProductTile product={skincareProducts.copper} />
        <SkincareProductTile product={skincareProducts.hairDensity} />
        <SkincareProductTile product={skincareProducts.serumFoundation} />
        <HairDensityPromoTile />
        <SkincareProductTile product={skincareProducts.moisturizing} />
        <SkincareProductTile product={skincareProducts.azelaic} />
        <SkincareProductTile product={skincareProducts.caffeineEye} />
        <SkincareProductTile product={skincareProducts.glucoside} />
        <SkincareProductTile product={skincareProducts.multiPeptideHA} />
        <SkincareProductTile product={skincareProducts.betaGlucan} />
      </div>
      <div className="flex justify-center pt-[110px]">
        <button className="h-[42px] min-w-[121px] rounded-full border border-black px-[31px] text-[15px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white">
          Load More
        </button>
      </div>
    </div>
  </section>
);

const SkincarePage = () => (
  <div className="min-h-screen bg-white text-black">
    <Header />
    <main>
      <AnimatedSection>
        <SkincareHero />
      </AnimatedSection>
      <AnimatedSection>
        <ShopByStepSection />
      </AnimatedSection>
      <AnimatedSection>
        <SplitFeatureSection
          title="Our Firsts, Your Favourites."
          copy="Our original serums are the perfect place to start your regimen. Packed with versatile ingredients formulated to hydrate, brighten and reinforce the skin barrier, there's a reason they're a community favourite."
          buttonLabel="Shop Now"
          image="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw5e4cdb0c/theordinary/plp/ORD-PLP-Skincare-50-50-Nia-HA.jpg"
          imageAlt="The Ordinary original serum bottles"
          imageSide="left"
        />
      </AnimatedSection>
      <AnimatedSection>
        <SplitFeatureSection
          title="Ingredients by The Ordinary."
          copy="Ingredients isn't a book about our products - it's about what's inside them."
          buttonLabel="Explore The Book"
          image="https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw0c092563/theordinary/50-50-images/2025-08-07-CTB-MHM-09-50-50.jpg"
          imageAlt="Ingredients by The Ordinary book"
          imageSide="right"
        />
      </AnimatedSection>
      <AnimatedSection>
        <CommonConcernsSection />
      </AnimatedSection>
      <AnimatedSection>
        <BestsellersSection />
      </AnimatedSection>
      <AnimatedSection>
        <SkincareListingSection />
      </AnimatedSection>
      <AnimatedSection>
        <RecentlyViewedSection />
      </AnimatedSection>
      <AnimatedSection>
        <OLibrarySection />
      </AnimatedSection>
      <AnimatedSection>
        <SocialSection cards={skincareSocialCards} />
      </AnimatedSection>
    </main>
    <AnimatedSection>
      <Footer />
    </AnimatedSection>
    <ChatButton />
  </div>
);

export default SkincarePage;
