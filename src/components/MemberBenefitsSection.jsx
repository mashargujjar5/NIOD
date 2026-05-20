import { memberBenefits } from './data/homeData';

const MemberBenefitsSection = () => (
  <section className="overflow-hidden bg-white py-[72px] font-['Inter',sans-serif] text-[#111827]">
    <div className="mx-auto max-w-[1366px]">
      <div className="px-5 md:px-[80px]">
        <h2 className="text-[34px] font-black leading-[1.15] tracking-[-0.075em] md:text-[38px]">
          The Many Benefits of Being a Member.
        </h2>
        <p className="mt-[24px] text-[13px] tracking-[-0.035em] text-[#1f2937]">
          Access members-only benefits when you sign up for an account.
        </p>
      </div>

      <div className="mt-[42px] flex gap-6 overflow-x-auto px-5 pb-2 md:px-[80px]">
        {memberBenefits.map((benefit) => (
          <article
            key={benefit.text}
            className="flex min-w-[340px] items-center gap-6 rounded-[8px] bg-white px-4 py-[15px] shadow-[0_4px_22px_rgba(0,0,0,0.08)] md:min-w-[342px]"
          >
            <img className="h-[89px] w-[89px] rounded-[4px] object-cover" src={benefit.image} alt="" aria-hidden="true" />
            <p className="text-[17px] leading-[1.35] tracking-[-0.055em] text-[#4b5563]">{benefit.text}</p>
          </article>
        ))}
      </div>

      <div className="mt-[36px] flex flex-col items-center gap-[23px] px-5">
        <button className="h-[43px] w-full max-w-[340px] rounded-full border border-black text-[16px] font-semibold tracking-[-0.045em] transition-colors hover:bg-black hover:text-white">
          Create My Account
        </button>
        <a href="#" className="text-[13px] tracking-[-0.04em] text-[#4b5563] underline">
          Already have an account? Log in.
        </a>
      </div>
    </div>
  </section>
);

export default MemberBenefitsSection;
