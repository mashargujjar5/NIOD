import AnimatedSection from './AnimatedSection';
import BestsellersSection from './BestsellersSection';
import ChatButton from './ChatButton';
import CommonConcernsSection from './CommonConcernsSection';
import ConsultationsSection from './ConsultationsSection';
import Footer from './Footer';
import HeroSection from './HeroSection';
import MemberBenefitsSection from './MemberBenefitsSection';
import RiceLipidsSection from './RiceLipidsSection';
import ScientistsSection from './ScientistsSection';
import SocialSection from './SocialSection';

const HomeSections = () => (
  <main>
    <AnimatedSection>
      <HeroSection />
    </AnimatedSection>
    <AnimatedSection>
      <BestsellersSection />
    </AnimatedSection>
    <AnimatedSection>
      <RiceLipidsSection />
    </AnimatedSection>
    <AnimatedSection>
      <ConsultationsSection />
    </AnimatedSection>
    <AnimatedSection>
      <CommonConcernsSection />
    </AnimatedSection>
    <AnimatedSection>
      <MemberBenefitsSection />
    </AnimatedSection>
    <AnimatedSection>
      <SocialSection />
    </AnimatedSection>
    <AnimatedSection>
      <ScientistsSection />
    </AnimatedSection>
    <AnimatedSection>
      <Footer />
    </AnimatedSection>
    <ChatButton />
  </main>
);

export default HomeSections;
