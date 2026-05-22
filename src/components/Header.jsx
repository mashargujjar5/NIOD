import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isBestSellers = window.location.pathname === '/category/best-sellers';
  const isNewFeatured = window.location.pathname === '/category/newfeatured';
  const isSkincare = window.location.pathname === '/category/skincare';
  const isBodyHair = window.location.pathname === '/category/body-hair';
  const isSetsCollections = window.location.pathname === '/category/skincare/skincare-sets';
  const isBlog = window.location.pathname === '/blog';

  return (
    <>
      <header className="w-full font-['Inter',sans-serif] bg-white relative z-50">
        <div className="bg-black text-white py-[10px] px-4 md:px-6 flex items-center justify-between">
          <div className="hidden md:flex flex-1"></div>
          <div className="flex flex-1 md:flex-none items-center justify-center md:justify-start gap-4 md:gap-6">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer opacity-80"><path d="m15 18-6-6 6-6" /></svg>
            <span className="text-[9.5px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-center">
              Carbon Neutral Shipping on all orders.
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer opacity-80"><path d="m9 18 6-6-6-6" /></svg>
          </div>
          <div className="flex-1 flex justify-end items-center gap-5 md:gap-7">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer hover:opacity-70"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block cursor-pointer hover:opacity-70"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            <div className="relative group cursor-pointer flex flex-col items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:opacity-70"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              <div className="absolute -bottom-1 w-2 h-[1.5px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="relative cursor-pointer hover:opacity-70">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              <span className="absolute -top-1.5 -right-1 text-[10px] font-bold">0</span>
            </div>
          </div>
        </div>

        {/* <div className="border-b border-gray-100 h-[55px] md:h-[65px] flex items-center justify-between px-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center h-full min-w-max">
            <div className="flex items-center gap-3 h-full px-5 md:px-7 bg-[#F2F2F2] border-b-[4px] border-black cursor-pointer">
              <span className="font-bold text-[22px] md:text-[28px] tracking-tighter leading-none">O.</span>
              <div className="flex flex-col -gap-0.5">
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-tight leading-tight">The</span>
                <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-tight leading-none">Ordinary</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-6 md:px-10 cursor-pointer group h-full hover:bg-gray-50 transition-colors">
              <div className="w-[18px] h-[18px] bg-black text-white flex items-center justify-center text-[11px] font-bold">N</div>
              <span className="text-[11px] md:text-[12px] font-bold tracking-widest text-[#1a1a1a] uppercase">NIOD</span>
            </div>
            <div className="flex items-center gap-2.5 px-6 md:px-10 cursor-pointer group h-full hover:bg-gray-50 transition-colors">
              <div className="w-[18px] h-[18px] border-[1.5px] border-black rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 border-[1px] border-black rounded-full"></div>
              </div>
              <span className="text-[11px] md:text-[12px] font-bold tracking-widest text-[#1a1a1a] uppercase">Loopha</span>
            </div>
            <div className="hidden lg:flex items-center gap-2.5 px-8 md:px-10 cursor-pointer group h-full hover:bg-gray-50 transition-colors">
              <div className="w-[18px] h-[18px] border-[1.5px] border-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black"></div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[8.5px] font-bold uppercase tracking-tighter">The Chemistry</span>
                <span className="text-[8.5px] font-bold uppercase tracking-tighter">Brand</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2.5 px-6 md:px-10 cursor-pointer group h-full hover:bg-gray-50 transition-colors">
              <div className="w-[18px] h-[18px] bg-[#999999] text-white flex items-center justify-center text-[11px] font-bold">D</div>
              <span className="text-[11px] md:text-[12px] font-bold tracking-widest text-[#1a1a1a] uppercase">Deciem</span>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 md:px-10 cursor-pointer hover:underline underline-offset-4 decoration-gray-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            <span className="text-[13px] md:text-[15px] font-medium tracking-tight whitespace-nowrap">Stay In Touch.</span>
          </div>
        </div> */}

        <div className="h-[70px] lg:h-[90px] flex items-center">
          <div className="w-full flex items-center justify-between lg:justify-center px-4 lg:px-0">
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              )}
            </button>

            <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-14">
              <a
                href="/category/best-sellers"
                className={`border-b-4 pb-[27px] pt-[31px] text-[15px] font-bold tracking-tight transition-opacity hover:opacity-50 lg:text-[17px] ${isBestSellers ? 'border-black' : 'border-transparent'}`}
              >
                Bestsellers
              </a>
              <a
                href="/category/newfeatured"
                className={`border-b-4 pb-[27px] pt-[31px] text-[15px] font-bold tracking-tight transition-opacity hover:opacity-50 lg:text-[17px] ${isNewFeatured ? 'border-black' : 'border-transparent'}`}
              >
                New & Featured
              </a>
              <a
                href="/category/skincare"
                className={`border-b-4 pb-[27px] pt-[31px] text-[15px] font-bold tracking-tight transition-opacity hover:opacity-50 lg:text-[17px] ${isSkincare ? 'border-black' : 'border-transparent'}`}
              >
                Skincare
              </a>
              <a
                href="/category/body-hair"
                className={`border-b-4 pb-[27px] pt-[31px] text-[15px] font-bold tracking-tight transition-opacity hover:opacity-50 lg:text-[17px] ${isBodyHair ? 'border-black' : 'border-transparent'}`}
              >
                Body + Hair
              </a>
              <a
                href="/category/skincare/skincare-sets"
                className={`border-b-4 pb-[27px] pt-[31px] text-[15px] font-bold tracking-tight transition-opacity hover:opacity-50 lg:text-[17px] ${isSetsCollections ? 'border-black' : 'border-transparent'}`}
              >
                Sets & Collections
              </a>
              <a
                href="/blog"
                className={`border-b-4 pb-[27px] pt-[31px] text-[15px] font-bold tracking-tight transition-opacity hover:opacity-50 lg:text-[17px] ${isBlog ? 'border-black' : 'border-transparent'}`}
              >
                The O. Library
              </a>
            </div>

            <button className="lg:ml-10 border border-black rounded-full px-6 lg:px-10 py-2.5 lg:py-4 text-[14px] lg:text-[16px] font-bold hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap">
              Build My Regimen
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl lg:hidden py-6 flex flex-col items-center gap-5 animate-in slide-in-from-top duration-300">
            <a href="/category/best-sellers" className="text-[18px] font-bold tracking-tight py-2 w-full text-center hover:bg-gray-50">Bestsellers</a>
            <a href="/category/newfeatured" className="text-[18px] font-bold tracking-tight py-2 w-full text-center hover:bg-gray-50">New & Featured</a>
            <a href="/category/skincare" className="text-[18px] font-bold tracking-tight py-2 w-full text-center hover:bg-gray-50">Skincare</a>
            <a href="/category/body-hair" className="text-[18px] font-bold tracking-tight py-2 w-full text-center hover:bg-gray-50">Body + Hair</a>
            <a href="/category/skincare/skincare-sets" className="text-[18px] font-bold tracking-tight py-2 w-full text-center hover:bg-gray-50">Sets & Collections</a>
            <a href="/blog" className="text-[18px] font-bold tracking-tight py-2 w-full text-center hover:bg-gray-50">The O. Library</a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
