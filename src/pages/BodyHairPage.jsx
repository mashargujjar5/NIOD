import AnimatedSection from '../components/AnimatedSection';
import ChatButton from '../components/ChatButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OLibrarySection from '../components/OLibrarySection';

const categoryCards = [
  {
    title: 'Body Care',
    copy: 'Formulated to target concerns for your body.',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw3c2f2aea/Images/products/The%20Ordinary/ord-natural-moisturizing-factors-inulin-body-lotion-240ml.png?sh=860&sm=fit&sw=860',
    imageClass: 'h-[92%] w-[92%] object-contain',
  },
  {
    title: 'Hair & Scalp Solutions',
    copy: 'Designed to address your most common hair and scalp challenges.',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb40ccfe2/Images/products/The%20Ordinary/FY25-D41247-ORD-Web-PDP-Mlt-Pptd-Hair-1x1-EN-1.jpg?sw=860&sh=860&sm=fit',
    imageClass: 'h-full w-full object-cover object-center',
  },
  {
    title: 'Lash & Brow Treatments',
    copy: 'Formulated to support thicker, fuller, healthier-looking lashes and brows.',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw0fd80738/Images/products/The%20Ordinary/rdn-multi-peptide-lash-and-brow-serum-eu-5ml.png?sh=860&sm=fit&sw=860',
    imageClass: 'h-[92%] w-[92%] object-contain',
  },
  {
    title: 'Lip Care',
    copy: 'Provide your lips with long-term hydration and skin barrier support.',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwce4d9afa/Images/products/The%20Ordinary/ord-pha-5pct-lip-exfoliating-serum-15ml.png?sh=800&sm=fit&sw=800',
    imageClass: 'h-[86%] w-[86%] object-contain',
  },
];

const bodyHairProducts = [
  {
    name: 'Natural Moisturizing Factors + Inulin Body Lotion',
    rating: '4.7 (683)',
    benefit: 'Hydrates, Reduces Flakiness',
    price: '$15.00 USD',
    sizes: ['240ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw3c2f2aea/Images/products/The%20Ordinary/ord-natural-moisturizing-factors-inulin-body-lotion-240ml.png?sh=860&sm=fit&sw=860',
  },
  {
    name: 'Salicylic Acid 0.5% Body Serum',
    rating: '4.7 (589)',
    benefit: 'Acne-Support, Exfoliates',
    price: '$15.00 USD',
    sizes: ['240ml'],
    action: 'Email Me When In Stock',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw5333169e/Images/products/The%20Ordinary/ord-salicylic-acid-05-body-serum-us-240ml.png?sh=860&sm=fit&sw=860',
  },
  {
    name: 'Niacinamide 5% Face and Body Emulsion',
    rating: '4.8 (659)',
    benefit: 'Reduces Visible Dark Spots',
    price: '$14.00 USD',
    sizes: ['100ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw435ebf8a/Images/products/The%20Ordinary/ORD-nia-5-face-body-100ml-packshot.png?sh=860&sm=fit&sw=860',
  },
  {
    name: 'PHA 5% Exfoliating Lip Serum',
    rating: '4.5 (174)',
    benefit: 'Exfoliates And Smoothes Lips',
    price: '$8.50 USD',
    sizes: ['15ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwce4d9afa/Images/products/The%20Ordinary/ord-pha-5pct-lip-exfoliating-serum-15ml.png?sh=800&sm=fit&sw=800',
  },
  {
    tag: 'Trending',
    name: 'Multi-Peptide Serum for Hair Density',
    rating: '4.4 (1264)',
    benefit: 'For Density And Thickness',
    price: '$22.00 USD',
    sizes: ['60ml'],
    badge: 'https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwd0f510dc/awards/ORD-team-favs.png',
    badgeClass: 'left-4 bottom-4 h-[82px] w-[82px]',
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb40ccfe2/Images/products/The%20Ordinary/FY25-D41247-ORD-Web-PDP-Mlt-Pptd-Hair-1x1-EN-1.jpg?sw=640&sh=640&sm=fit',
  },
  {
    name: 'Squalane + Amino Acids Lip Balm',
    rating: '4.2 (1088)',
    benefit: 'Hydrates, Softens',
    price: '$10.00 USD',
    sizes: ['15ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw0afd757a/Images/products/The%20Ordinary/ord-squalane-amino-acids-lip-balm-15ml.png?sw=640&sh=640&sm=fit',
  },
  {
    name: 'Multi-Peptide Lash and Brow Serum',
    rating: '4.1 (4277)',
    benefit: 'Volumizing Lash & Brow Serum',
    price: '$16.00 USD',
    sizes: ['5ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw0fd80738/Images/products/The%20Ordinary/rdn-multi-peptide-lash-and-brow-serum-eu-5ml.png?sh=860&sm=fit&sw=860',
  },
  {
    tag: 'New',
    name: 'Lash Curl Finisher',
    rating: '4.4 (339)',
    benefit: 'Defines Lashes, Holds Curl',
    price: '$12.00 USD',
    sizes: ['8ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwe59f1b93/Images/products/The%20Ordinary/ord-lash-curl-finisher-10ml.png?sh=860&sm=fit&sw=860',
  },
  {
    name: 'Glycolic Acid 7% Exfoliating Toner',
    rating: '4.6 (1999)',
    benefit: 'Smooths Texture, Boosts Radiance',
    price: '$13.00 USD',
    sizes: ['240ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw2590d118/Images/products/The%20Ordinary/rdn-glycolic-acid-7pct-toning-solution-240ml.png?sw=640&sh=640&sm=fit',
  },
  {
    name: 'Natural Moisturizing Factors + HA',
    rating: '4.5 (1844)',
    benefit: 'Surface Hydration Formula',
    price: '$6.70 USD',
    sizes: ['30ml', '100ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw51f90af8/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png?sw=640&sh=640&sm=fit',
  },
  {
    name: 'Squalane Cleanser',
    rating: '4.5 (2150)',
    benefit: 'Cleanses, Supports Barrier',
    price: '$10.00 USD',
    sizes: ['50ml', '150ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwd13310a1/Images/products/The%20Ordinary/rdn-squalane-cleanser-50ml.png?sw=640&sh=640&sm=fit',
  },
  {
    tag: 'New',
    name: 'Natural Moisturizing Factors + Beta Glucan',
    rating: '4.4 (1177)',
    benefit: 'Supports Barrier, Refreshes',
    price: '$6.00 USD',
    sizes: ['30ml', '100ml'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwa142d0e1/Images/products/The%20Ordinary/ord-nmf-beta-glucan-30ml.png?sw=640&sh=640&sm=fit',
  },
];

const recentlyViewedProduct = {
  tag: 'Trending',
  name: 'Glucoside Foaming Cleanser',
  rating: '4.5 (1161)',
  benefit: 'Improves Look Of Skin Clarity',
  price: '$12.50 USD',
  sizes: ['150ml'],
  badge: 'https://theordinary.com/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dwf8fc4a19/awards/test-eczema-seal.png',
  badgeClass: 'left-6 bottom-4 h-[74px] w-[74px]',
  image:
    'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw601b47f7/Images/products/The%20Ordinary/rdn-glucoside-foaming-cleanser-150ml.png?sw=640&sh=640&sm=fit',
};

const CaretDown = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m7 10 5 5 5-5" />
  </svg>
);

const MailIcon = () => (
  <svg width="21" height="17" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="1" width="22" height="16" />
    <path d="m2 2 10 8 10-8" />
  </svg>
);

const Stars = () => (
  <span className="inline-flex items-center text-[18px] leading-none text-black" aria-hidden="true">
    {'\u2605\u2605\u2605\u2605'}<span className="text-black/30">{'\u2605'}</span>
  </span>
);

const BodyHairHero = () => (
  <section className="relative overflow-hidden bg-[#f7f7f7] font-['Inter',sans-serif]">
    <div className="mx-auto grid min-h-[451px] max-w-[1192px] grid-cols-1 px-5 md:grid-cols-[48%_52%] md:px-0">
      <div className="relative z-10 pt-[29px]">
        <nav className="flex items-center gap-[10px] text-[15px] tracking-[-0.045em] text-[#777]">
          <a href="/" className="hover:underline">
            Home
          </a>
          <span className="text-[19px] text-[#777]">&rsaquo;</span>
          <span className="text-black">Body + Hair</span>
        </nav>

        <div className="pt-[94px]">
          <h1 className="text-[38px] font-black leading-none tracking-[-0.078em] text-[#303030]">Formulated For Body + Hair</h1>
          <p className="mt-[12px] max-w-[520px] text-[17px] leading-[1.42] tracking-[-0.057em] text-[#555]">
            Explore products formulated to target everyday concerns for both hair and body.
          </p>
          <a href="#" className="mt-[70px] inline-flex items-center gap-[10px] text-[17px] font-bold tracking-[-0.055em] text-[#303030]">
            Shop Now
            <span className="text-[24px] leading-none">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="absolute bottom-0 left-[216px] h-[68px] w-[197px] bg-[#e7e7e7]" />
        <div className="absolute bottom-0 right-[11px] h-[68px] w-[316px] bg-[#eeeeee]" />
        <div className="absolute bottom-[82px] right-[31px] z-20 flex h-[235px] w-[238px] rotate-[-18deg] items-center justify-center bg-white shadow-[0_22px_42px_rgba(0,0,0,0.12)]">
          <img
            src="https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb40ccfe2/Images/products/The%20Ordinary/FY25-D41247-ORD-Web-PDP-Mlt-Pptd-Hair-1x1-EN-1.jpg?sw=640&sh=640&sm=fit"
            alt=""
            aria-hidden="true"
            className="h-[164px] w-[132px] rotate-[18deg] object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

const ShopByCategory = () => (
  <section className="bg-white font-['Inter',sans-serif] text-[#111827]">
    <div className="mx-auto max-w-[1192px] border-t border-[#d9d9d9] px-5 pb-[78px] pt-[66px] md:px-0">
      <div className="max-w-[410px]">
        <h1 className="text-[29px] font-black leading-none tracking-[-0.065em] text-[#28313a]">Shop By Category</h1>
        <p className="mt-[18px] text-[17px] leading-[1.42] tracking-[-0.055em] text-[#1f2937]">
          Discover our growing collection of ingredient-first formulations for hair and body. Created through science, while considering your everyday body and hair concerns.
        </p>
      </div>

      <div className="mt-[42px] grid grid-cols-1 gap-x-10 gap-y-[48px] md:grid-cols-3">
        {categoryCards.map((category) => (
          <article key={category.title}>
            <div className="flex h-[248px] w-full items-center justify-center overflow-hidden bg-[#f4f4f4]">
              <img className={category.imageClass} src={category.image} alt={category.title} />
            </div>
            <h2 className="mt-[29px] text-[23px] font-black leading-none tracking-[-0.065em] text-[#17202a]">{category.title}</h2>
            <p className="mt-[17px] max-w-[335px] text-[17px] leading-[1.45] tracking-[-0.055em] text-[#1f2937]">{category.copy}</p>
            <a href="#" className="mt-[24px] inline-flex items-center gap-[10px] text-[17px] font-bold tracking-[-0.055em] text-black">
              View All
              <span className="text-[24px] leading-none">&rarr;</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ProductTile = ({ product }) => (
  <article className="text-[#101010]">
    <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#f8f8f8]">
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
      <img className="h-[78%] w-[78%] object-contain" src={product.image} alt={product.name} />
      {product.badge && <img className={`absolute object-contain ${product.badgeClass}`} src={product.badge} alt="" aria-hidden="true" />}
    </div>

    <h2 className="mt-[39px] min-h-[48px] text-[18px] font-medium leading-[1.32] tracking-[-0.065em]">{product.name}</h2>
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
      <button className="mt-[21px] flex h-11 w-full items-center justify-center gap-[8px] border border-[#dddddd] bg-white text-[14px] font-medium uppercase tracking-[-0.02em] transition-colors hover:border-black">
        {product.action && <MailIcon />}
        {product.action || 'Add To Cart'}
      </button>
    </div>
  </article>
);

const ProductListing = () => (
  <section className="bg-white font-['Inter',sans-serif]">
    <div className="mx-auto max-w-[1192px] px-5 pb-[92px] pt-0 md:px-0">
      <div className="sticky top-0 z-20 -mx-5 flex min-h-[66px] items-start justify-between bg-white px-5 pt-0 md:static md:mx-0 md:px-0">
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
        <p className="pt-[11px] text-[13px] font-bold tracking-[-0.035em] text-[#666]">(17 Results )</p>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-[88px] pt-[27px] sm:grid-cols-2 lg:grid-cols-4">
        {bodyHairProducts.map((product) => (
          <ProductTile key={product.name} product={product} />
        ))}
      </div>
    </div>
  </section>
);

const RecentlyViewedSection = () => (
  <section className="bg-white font-['Inter',sans-serif]">
    <div className="mx-auto max-w-[1192px] border-b border-[#d9d9d9] px-5 pb-[72px] pt-[48px] md:px-0">
      <h2 className="text-[29px] font-black leading-none tracking-[-0.065em] text-[#28313a]">Recently Viewed</h2>
      <div className="mt-[42px] grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        <ProductTile product={recentlyViewedProduct} />
      </div>
    </div>
  </section>
);

const BodyHairPage = () => (
  <div className="min-h-screen bg-white text-black">
    <Header />
    <main>
      <AnimatedSection>
        <BodyHairHero />
      </AnimatedSection>
      <AnimatedSection>
        <ShopByCategory />
      </AnimatedSection>
      <AnimatedSection>
        <ProductListing />
      </AnimatedSection>
      <AnimatedSection>
        <RecentlyViewedSection />
      </AnimatedSection>
      <AnimatedSection>
        <OLibrarySection />
      </AnimatedSection>
    </main>
    <AnimatedSection>
      <Footer />
    </AnimatedSection>
    <ChatButton />
  </div>
);

export default BodyHairPage;
