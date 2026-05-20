import AnimatedSection from '../components/AnimatedSection';
import ChatButton from '../components/ChatButton';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
      <button className="mt-[21px] flex h-11 w-full items-center justify-center gap-[7px] border border-[#dddddd] bg-white text-[14px] font-medium tracking-[-0.04em] transition-colors hover:border-black">
        {product.action === 'EMAIL ME WHEN IN STOCK' && (
          <svg width="22" height="16" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <rect x="1" y="1" width="22" height="16" />
            <path d="m1 2 11 8 11-8" />
          </svg>
        )}
        {product.action || 'Add To Cart'}
      </button>
    </div>
  </article>
);

const CategoryListingPage = ({ hero, resultCount, products, children }) => (
  <div className="min-h-screen bg-white font-['Inter',sans-serif] text-black">
    <Header />

    <main>
      <AnimatedSection>
        <section className="relative min-h-[451px] overflow-hidden bg-[#ffe4a8]">
          <img className="absolute inset-0 h-full w-full object-cover object-center" src={hero.image} alt="" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-[1192px] px-5 pt-[29px] md:px-0">
            <nav className="flex items-center gap-[10px] text-[15px] tracking-[-0.045em] text-[#777]">
              <a href="/" className="hover:underline">Home</a>
              <span className="text-[19px] text-[#777]">&rsaquo;</span>
              <span className="text-black">{hero.breadcrumb}</span>
            </nav>
            <div className="pt-[94px]">
              <h1 className="max-w-[620px] text-[38px] font-black leading-[1.08] tracking-[-0.078em] text-[#303030]">{hero.title}</h1>
              <p className="mt-[10px] max-w-[590px] text-[17px] leading-[1.42] tracking-[-0.057em] text-[#4f4f4f]">{hero.copy}</p>
              <a href="#" className="mt-[49px] inline-flex items-center gap-[8px] text-[17px] font-bold tracking-[-0.05em] text-[#303030]">
                {hero.cta}
                <span className="text-[25px] leading-none">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mx-auto max-w-[1192px] px-5 pb-[92px] pt-[11px] md:px-0">
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
            <p className="pt-[11px] text-[13px] font-bold tracking-[-0.035em] text-[#666]">({resultCount} Results )</p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-[88px] pt-[23px] sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductTile key={product.name} product={product} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>{children}</AnimatedSection>
    </main>

    <AnimatedSection>
      <Footer />
    </AnimatedSection>
    <ChatButton />
  </div>
);

export default CategoryListingPage;
