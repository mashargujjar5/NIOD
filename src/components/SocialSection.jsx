import { socialCards } from './data/homeData';

const SocialSection = ({ cards = socialCards }) => (
  <section className="bg-[#f8f8f8] pb-[57px] pt-[54px] font-['Inter',sans-serif] text-[#111827]">
    <div className="mx-auto max-w-[1200px] px-5 md:px-9 overflow-hidden">
      <h2 className="text-[30px] font-black leading-none tracking-[-0.065em]">As Seen on Social</h2>

      <div className="mt-[49px] flex gap-10 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {cards.map((card) => (
          <article key={card.title} className="min-w-[400px] border border-[#d7d7d7] bg-white">
            <div className="relative h-[342px] overflow-hidden bg-[#e8e8e8] md:h-[355px]">
              <img className="h-full w-full object-cover" src={card.image} alt={card.title} />
              <button
                aria-label="Mute video"
                className="absolute bottom-2 right-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black text-white"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4 9v6h4l5 4V5L8 9H4Z" />
                  <path d="m17 9 4 6m0-6-4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="flex min-h-[84px] items-center gap-4 px-6 py-3">
              <img className="h-[52px] w-[52px] object-contain" src={card.productImage} alt="" aria-hidden="true" />
              <div>
                <h3 className="text-[14px] font-semibold leading-[1.2] tracking-[-0.04em] text-black">{card.title}</h3>
                <a href="#" className="mt-[18px] inline-block text-[14px] font-bold tracking-[-0.04em] text-black underline underline-offset-2">
                  Shop Now
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-[78px] flex items-center justify-center gap-8 text-[28px] font-semibold leading-none">
        <button aria-label="Previous social posts">&larr;</button>
        <button aria-label="Next social posts">&rarr;</button>
      </div>
    </div>
  </section>
);

export default SocialSection;
