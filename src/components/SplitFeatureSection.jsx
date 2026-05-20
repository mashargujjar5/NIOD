const SplitFeatureSection = ({
  title,
  copy,
  buttonLabel,
  image,
  imageAlt,
  imageSide = 'left',
  sectionClassName = '',
}) => {
  const imagePane = (
    <div className="min-h-[360px] bg-[#f3f3f3] md:min-h-[456px]">
      <img className="h-full w-full object-cover" src={image} alt={imageAlt || title} />
    </div>
  );

  const contentPane = (
    <div className="flex items-center px-6 py-14 md:px-[94px] md:py-0">
      <div className="max-w-[430px]">
        <h2 className="text-[29px] font-black leading-[1.15] tracking-[-0.075em] text-[#28313a]">{title}</h2>
        <p className="mt-[34px] text-[17px] leading-[1.42] tracking-[-0.052em] text-[#1f2937]">{copy}</p>
        <a
          href="#"
          className="mt-[34px] inline-flex h-[42px] min-w-[133px] items-center justify-center rounded-full border border-black px-[31px] text-[15px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );

  return (
    <section className={`border-t border-[#dddddd] bg-white font-['Inter',sans-serif] ${sectionClassName}`}>
      <div className="mx-auto grid max-w-[1192px] grid-cols-1 md:grid-cols-2">
        {imageSide === 'left' ? imagePane : contentPane}
        {imageSide === 'left' ? contentPane : imagePane}
      </div>
    </section>
  );
};

export default SplitFeatureSection;
