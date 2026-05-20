import ProductCard from './ProductCard';
import { products } from './data/homeData';

const BestsellersSection = () => (
  <section className="bg-white font-['Inter',sans-serif] text-[#111827]">
    <div className="mx-auto max-w-[1191px] border-t border-[#d8d8d8] pb-[86px] pt-[64px]">
      <div className="mb-[49px] flex items-center justify-between px-5 md:px-0">
        <h2 className="text-[30px] font-black leading-none tracking-[-0.065em]">Bestsellers</h2>
        <a href="#" className="flex items-center gap-2 text-[16px] font-semibold tracking-[-0.04em] text-black">
          View All
          <span className="text-[26px] font-normal leading-none">&rarr;</span>
        </a>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 gap-x-10 gap-y-[64px] px-5 pb-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-0">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
        <button
          aria-label="Next products"
          className="absolute right-3 top-[108px] hidden h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_22px_rgba(0,0,0,0.08)] lg:flex"
        >
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="mt-9 h-1 w-[40%] max-w-[476px] bg-[#1f1f1f]" />
    </div>
  </section>
);

export default BestsellersSection;
