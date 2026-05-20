const defaultArticles = [
  {
    title: 'How to Build a Regimen',
    category: 'Skincare Education',
    image:
      'https://cdn.media.amplience.net/i/deciem/ordinary-prep-treat-seal-regimen?fmt=auto&$poi$&sm=aspect&w=1000&aspect=1:1',
    featured: true,
  },
  {
    title: 'Layering Guide',
    category: 'Skincare Education',
    image:
      'https://cdn.media.amplience.net/i/deciem/Layering-Guide-Blog_Image-Thumnail?fmt=auto&$poi$&sm=aspect&w=1000&aspect=1:1',
  },
  {
    title: 'Retinoids 101',
    category: 'Skincare Education',
    image:
      'https://cdn.media.amplience.net/i/deciem/ord-Retinal-Blog-2-Retinoids-Guide_THUMBNAIL?fmt=auto&$poi$&sm=aspect&w=1000&aspect=1:1',
  },
  {
    title: 'What is a Skin Toner?',
    category: 'Skincare Education',
    image:
      'https://cdn.media.amplience.net/i/deciem/ORD-MilkyToner-Web-Blog-04_Img-07?fmt=auto&$poi$&sm=aspect&w=1000&aspect=1:1',
  },
];

const OLibrarySection = ({
  articles = defaultArticles,
  title = (
    <>
      Check Out Some of Our Back-to-Basics
      <br />
      Resources from the O. Library
    </>
  ),
}) => {
  const featured = articles.find((article) => article.featured) || articles[0];
  const sideArticles = articles.filter((article) => article !== featured);

  return (
    <section className="bg-white font-['Inter',sans-serif]">
      <div className="mx-auto max-w-[1192px] border-b border-[#d9d9d9] px-5 pb-[150px] pt-[94px] md:px-0">
        <div className="mb-[31px] flex items-start justify-between gap-6">
          <h2 className="max-w-[600px] text-[29px] font-black leading-[1.18] tracking-[-0.078em]">
            {title}
          </h2>
          <a
            href="#"
            className="mt-[2px] hidden h-[42px] min-w-[173px] items-center justify-center rounded-full border border-black px-7 text-[14px] font-bold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white md:flex"
          >
            Read More Here
          </a>
        </div>

        <div className="grid grid-cols-1 gap-[70px] lg:grid-cols-[475px_565px] lg:gap-[150px]">
          <article>
            <img className="h-[462px] w-full object-cover object-center" src={featured.image} alt={featured.title} />
            <p className="mt-[26px] text-[15px] font-medium leading-none tracking-[-0.045em] text-[#52606d]">{featured.category}</p>
            <h3 className="mt-[14px] text-[31px] font-black leading-[1.05] tracking-[-0.08em]">{featured.title}</h3>
          </article>

          <div className="pt-[16px]">
            {sideArticles.map((article, index) => (
              <article
                key={article.title}
                className={`grid grid-cols-[180px_1fr] gap-[40px] ${index > 0 ? 'border-t border-[#d9d9d9] pt-[23px]' : ''} ${index < sideArticles.length - 1 ? 'pb-[23px]' : ''}`}
              >
                <img className="h-[181px] w-[180px] object-cover" src={article.image} alt={article.title} />
                <div className="flex flex-col justify-center pt-[4px]">
                  <p className="text-[15px] font-medium leading-none tracking-[-0.045em] text-[#52606d]">{article.category}</p>
                  <h3 className="mt-[16px] text-[19px] font-black leading-[1.18] tracking-[-0.058em]">{article.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OLibrarySection;
