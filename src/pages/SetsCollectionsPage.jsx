import AnimatedSection from '../components/AnimatedSection';
import ChatButton from '../components/ChatButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OLibrarySection from '../components/OLibrarySection';

const productImage = (file) =>
  `https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/${file}?sw=640&sh=640&sm=fit`;

const setsProducts = [
  {
    name: 'The Hand Collection',
    rating: '0.0 (0)',
    mutedRating: true,
    benefit: '',
    price: '$21.50 USD',
    sizes: [],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw9454c693/Images/products/The%20Ordinary/The-Hand-Collection.png?sh=860&sm=fit&sw=860',
    imageClass: 'h-[76%] w-[76%]',
  },
  {
    tag: 'Bestseller',
    name: 'The Age Support Set',
    rating: '4.7 (152)',
    benefit: 'Age-Support Regimen',
    price: '$33.00 USD',
    sizes: ['1 set'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw5498de07/Images/products/The%20Ordinary/ORD-Box-Product-TheAgeSupportSet-RGB-min.png?sh=860&sm=fit&sw=860',
    imageClass: 'h-[82%] w-[82%]',
  },
  {
    name: 'The Mini Discovery Set',
    rating: '4.4 (11453)',
    benefit: 'Brightens, Smooths, Hydrates',
    price: '$29.10 USD',
    sizes: ['1 set'],
    image: productImage('dwac1a3b55/Images/products/The%20Ordinary/ord-the-mini-discovery-set.png'),
    imageClass: 'h-[84%] w-[84%]',
  },
  {
    name: 'The Acne Set',
    rating: '4.8 (994)',
    benefit: '3-Step Acne Regimen',
    price: '$16.70 USD',
    sizes: ['1 set'],
    image:
      'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dw0d5a5ad1/Images/products/The%20Ordinary/ord-the-acne-set-us.png?sh=860&sm=fit&sw=860',
    imageClass: 'h-[84%] w-[84%]',
  },
  {
    name: 'The Daily Set',
    rating: '4.4 (5478)',
    benefit: 'Daily Hydration Regimen',
    price: '$21.70 USD',
    sizes: ['1 set'],
    image: productImage('dw0c029985/Images/products/The%20Ordinary/ord-the-daily-set.png'),
    imageClass: 'h-[84%] w-[84%]',
  },
  {
    name: 'The Mini Icons Set',
    rating: '4.4 (5843)',
    benefit: 'Exfoliates, Smooths, Hydrates.',
    price: '$19.90 USD',
    sizes: ['1 set'],
    action: 'EMAIL ME WHEN IN STOCK',
    image: productImage('dw00a9e3db/Images/products/The%20Ordinary/ord-the-mini-icons-set.png'),
    imageClass: 'h-[86%] w-[86%]',
  },
  {
    name: 'The Bright Set',
    rating: '4.4 (4668)',
    benefit: 'Radiance-Boosting Regimen',
    price: '$23.80 USD',
    sizes: ['1 set'],
    image: productImage('dw473e829e/Images/products/The%20Ordinary/ord-the-bright-set.png'),
    imageClass: 'h-[84%] w-[84%]',
  },
  {
    tag: 'New',
    name: 'The Face & Body Set',
    rating: '4.8 (56)',
    benefit: 'Smooth, Brighten, And Hydrate',
    price: '$19.00 USD',
    sizes: ['1 set'],
    action: 'EMAIL ME WHEN IN STOCK',
    underlined: true,
    image: productImage('dwb86544f3/Images/products/The%20Ordinary/ord-the-face-and-body-set.png'),
    imageClass: 'h-[84%] w-[84%]',
  },
  {
    name: 'Soothing & Barrier Support Serum Set',
    rating: '4.4 (1758)',
    benefit: 'Barrier Repair On-The-Go',
    price: '$9.50 USD',
    sizes: ['15ml'],
    action: 'EMAIL ME WHEN IN STOCK',
    image: productImage('dw46324f4d/Images/products/The%20Ordinary/ord-soothing-barrier-support-serum-gift-set.png'),
  },
  {
    tag: 'Extra 10% Off',
    name: 'The Hair & Scalp Collection',
    rating: '4.4 (1264)',
    benefit: 'Hair Density, Scalp Dryness',
    price: '$33.00 USD',
    sizes: [],
    image: productImage('dwb40ccfe2/Images/products/The%20Ordinary/FY25-D41247-ORD-Web-PDP-Mlt-Pptd-Hair-1x1-EN-1.jpg'),
  },
  {
    tag: 'Extra 10% Off',
    name: 'The Refine & Regenerate Collection',
    rating: '4.5 (1223)',
    benefit: 'Age Support, Uneven Texture',
    price: '$54.50 USD',
    sizes: [],
    image: productImage('dw92d4ac8a/Images/products/The%20Ordinary/rdn-multi-peptide-ha-serum-30ml.png'),
  },
  {
    tag: 'Extra 10% Off',
    name: 'The Smooth Skin Collection',
    rating: '4.6 (1999)',
    benefit: 'Smooths Texture, Evens Skin Tone',
    price: '$25.50 USD',
    sizes: [],
    image: productImage('dw2590d118/Images/products/The%20Ordinary/rdn-glycolic-acid-7pct-toning-solution-240ml.png'),
  },
];

const CaretDown = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m7 10 5 5 5-5" />
  </svg>
);

const MailIcon = () => (
  <svg width="22" height="16" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="1" width="22" height="16" />
    <path d="m2 2 10 8 10-8" />
  </svg>
);

const Stars = ({ muted = false }) => (
  <span className={`inline-flex items-center text-[18px] leading-none ${muted ? 'text-black/22' : 'text-black'}`} aria-hidden="true">
    {'\u2605\u2605\u2605\u2605\u2605'}
  </span>
);

const ProductTile = ({ product }) => (
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
      <Stars muted={product.mutedRating} />
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
      <button className="mt-[21px] flex h-11 w-full items-center justify-center gap-[7px] border border-[#dddddd] bg-white text-[14px] font-medium tracking-[-0.04em] transition-colors hover:border-black">
        {product.action === 'EMAIL ME WHEN IN STOCK' && <MailIcon />}
        {product.action || 'Add To Cart'}
      </button>
    </div>
  </article>
);

const SetsHero = () => (
  <section className="relative min-h-[501px] overflow-hidden bg-[#f7f7f7] font-['Inter',sans-serif]">
    <div className="mx-auto grid min-h-[501px] max-w-[1192px] grid-cols-1 px-5 md:grid-cols-[47%_53%] md:px-0">
      <div className="relative z-10 pt-[29px]">
        <nav className="flex items-center gap-[10px] text-[15px] tracking-[-0.045em] text-[#777]">
          <a href="/" className="hover:underline">Home</a>
          <span className="text-[19px] text-[#777]">&rsaquo;</span>
          <span className="text-black">Sets &amp; Collections</span>
        </nav>
        <div className="pt-[143px]">
          <h1 className="text-[38px] font-black leading-none tracking-[-0.078em] text-[#303030]">Sets &amp; Collections</h1>
          <p className="mt-[12px] max-w-[520px] text-[17px] leading-[1.42] tracking-[-0.057em] text-[#555]">
            Our sets and collections make it easy for you to try some of our bestselling formulations all at once, and make excellent gifts for the skincare enthusiast.
          </p>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div className="absolute bottom-0 left-[110px] h-[20px] w-[355px] bg-[#e5e2df]" />
        <img
          className="absolute bottom-[-1px] left-[70px] z-20 h-[415px] object-contain"
          src={productImage('dw51f90af8/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-100ml.png')}
          alt=""
          aria-hidden="true"
        />
        <img
          className="absolute bottom-[-7px] left-[287px] z-30 h-[355px] object-contain"
          src={productImage('dw2590d118/Images/products/The%20Ordinary/rdn-glycolic-acid-7pct-toning-solution-240ml.png')}
          alt=""
          aria-hidden="true"
        />
        <img
          className="absolute bottom-[-49px] right-[-120px] z-10 h-[490px] object-contain"
          src={productImage('dw8b64a0e5/Images/products/The%20Ordinary/rdn-natural-moisturizing-factors-ha-30ml.png')}
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
);

const ProductListing = () => (
  <section className="bg-white font-['Inter',sans-serif]">
    <div className="mx-auto max-w-[1192px] px-5 pb-[92px] pt-[29px] md:px-0">
      <div className="sticky top-0 z-20 -mx-5 flex min-h-[70px] items-start justify-between bg-white px-5 pt-0 md:static md:mx-0 md:px-0">
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
        <p className="pt-[11px] text-[13px] font-bold tracking-[-0.035em] text-[#666]">(22 Results )</p>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-[88px] pt-[59px] sm:grid-cols-2 lg:grid-cols-4">
        {setsProducts.map((product) => (
          <ProductTile key={product.name} product={product} />
        ))}
      </div>

      <div className="flex justify-center pt-[108px]">
        <button className="h-[42px] min-w-[121px] rounded-full border border-black px-[31px] text-[15px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white">
          Load More
        </button>
      </div>
    </div>
  </section>
);

const SetsGuide = () => (
  <section className="bg-white font-['Inter',sans-serif]">
    <div className="mx-[26px] pb-[72px] pt-[181px]">
      <div className="grid grid-cols-[175px_210px_460px_1fr] overflow-hidden rounded-[3px] border border-[#d9d9d9] text-[16px] leading-[1.35] tracking-[-0.04em] text-[#1f2937]">
        {['Set', 'Best For', 'Key Ingredients', 'Key Concerns'].map((heading) => (
          <div key={heading} className="border-b border-r border-[#d9d9d9] bg-[#f3f3f3] px-[16px] py-[14px] font-bold last:border-r-0">
            {heading}
          </div>
        ))}
        {[
          ['The Hydration Set', 'Dry or dehydrated skin', 'Hyaluronic Acid, Squalane, Natural Moisturizing Factors', 'Replenishes hydration and strengthens the skin barrier'],
          ['The Bright Set', 'Dull or uneven tone', 'Glycolic Acid, Alpha Arbutin, Caffeine', 'Helps skin tone look more even and improve radiance'],
          ['The Daily Set', 'All skin types', 'Squalane, Hyaluronic Acid', 'Gently cleanses, hydrates, and supports skin barrier'],
          ['The Acne Set', 'Blemish-prone skin', 'Salicylic Acid, Beta Glucan', 'Targets visible blemishes and supports the skin barrier'],
        ].flatMap((row) =>
          row.map((cell, index) => (
            <div
              key={`${row[0]}-${cell}`}
              className={`border-b border-r border-[#d9d9d9] px-[16px] py-[14px] last:border-r-0 [&:nth-last-child(-n+4)]:border-b-0 ${index === 0 ? 'font-medium underline underline-offset-2' : ''}`}
            >
              {cell}
            </div>
          )),
        )}
      </div>
    </div>
  </section>
);

const SetsCollectionsPage = () => (
  <div className="min-h-screen bg-white text-black">
    <Header />
    <main>
      <AnimatedSection direction="up">
        <SetsHero />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <ProductListing />
      </AnimatedSection>
      <AnimatedSection direction="right">
        <OLibrarySection />
      </AnimatedSection>
      <AnimatedSection direction="left">
        <SetsGuide />
      </AnimatedSection>
    </main>
    <AnimatedSection direction="right">
      <Footer />
    </AnimatedSection>
    <ChatButton />
  </div>
);

export default SetsCollectionsPage;
