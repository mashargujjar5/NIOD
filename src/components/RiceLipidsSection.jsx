import { ordinaryAsset } from './data/homeData';

const RiceLipidsSection = () => (
  <section className="border-y border-[#dedede] bg-white font-['Inter',sans-serif]">
    <div className="grid min-h-[400px] grid-cols-1 md:grid-cols-[52.1%_47.9%]">
      <div className="flex items-center px-6 py-14 md:justify-center md:px-0 md:py-0">
        <div className="max-w-[392px]">
          <h2 className="text-[30px] font-black leading-[1.14] tracking-[-0.065em] text-[#111827] md:text-[31px]">
            Why You Love Rice Lipids +
            <br />
            Ectoin Microemulsion
          </h2>
          <p className="mt-[34px] text-[17px] leading-[1.42] tracking-[-0.05em] text-[#1f2937]">
            "As someone with extremely sensitive skin, this is the greatest of all time. I look younger because my skin is healing! My makeup sits flawlessly now." - Michelle
          </p>
          <button className="mt-[34px] rounded-full border border-black px-[31px] py-[11px] text-[15px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white">
            Shop Rice Lipids
          </button>
        </div>
      </div>
      <div className="min-h-[360px] bg-[#efefef] md:min-h-[460px]">
        <img
          className="h-full w-full object-cover"
          src={ordinaryAsset('/on/demandware.static/-/Library-Sites-DeciemSharedLibrary/default/dw9fe95781/theordinary/50-50-images/50-Why-we-love-RLEM-ft-Customer-Review-Img.jpg')}
          alt="Why You Love Rice Lipids + Ectoin Microemulsion"
        />
      </div>
    </div>
  </section>
);

export default RiceLipidsSection;
