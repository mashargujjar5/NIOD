const ProductCard = ({ product }) => (
  <article className="min-w-[268px] flex-1 text-[#252525]">
    <div className="relative flex aspect-square items-center justify-center bg-[#f8f8f8]">
      <span className="absolute left-3 top-3 z-10 bg-white px-1 py-[3px] text-[13px] leading-none tracking-[-0.03em]">
        {product.tag}
      </span>
      <button aria-label={`Save ${product.name}`} className="absolute right-3 top-3 z-10 text-[#333]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19.5 5.6c-1.8-1.8-4.8-1.8-6.6 0L12 6.5l-.9-.9c-1.8-1.8-4.8-1.8-6.6 0s-1.8 4.8 0 6.6l.9.9L12 19.6l6.6-6.5.9-.9c1.8-1.8 1.8-4.8 0-6.6Z" />
        </svg>
      </button>
      <img className="h-[82%] w-[82%] object-contain" src={product.image} alt={product.name} />
      {product.badge && (
        <img className={`absolute object-contain ${product.badgeClass}`} src={product.badge} alt="" aria-hidden="true" />
      )}
    </div>

    <h3 className="mt-[39px] min-h-[46px] text-[17px] font-medium leading-[1.32] tracking-[-0.055em] md:text-[18px]">
      {product.name}
    </h3>
    <div className="mt-[18px] flex items-center gap-2 text-[13px] tracking-[-0.02em] text-[#2b2b2b]">
      <span className="text-[16px] leading-none text-black">
        {'\u2605\u2605\u2605\u2605'}
        <span className="text-black/35">{'\u2605'}</span>
      </span>
      <span>{product.rating}</span>
    </div>
    <p className="mt-2 min-h-[36px] text-[15px] leading-[1.25] tracking-[-0.045em] text-[#666]">{product.benefit}</p>
    <div className="mt-[37px] border-t border-[#dcdcdc] pt-[23px]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[17px] font-black tracking-[-0.045em]">{product.price}</p>
        <div className="flex gap-4 text-[14px] tracking-[-0.04em] text-[#555]">
          {product.sizes.map((size, index) => (
            <button key={size} className={index === 0 ? 'font-semibold text-[#242424] underline underline-offset-2' : ''}>
              {size}
            </button>
          ))}
        </div>
      </div>
      <button className="mt-[25px] h-11 w-full border border-[#d9d9d9] bg-white text-[16px] font-medium tracking-[-0.055em] transition-colors hover:border-black">
        Add To Cart
      </button>
    </div>
  </article>
);

export default ProductCard;
