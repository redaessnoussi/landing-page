import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import DemoVideo from '@/components/landing/demo-video';
import KeyFeatures from '@/components/landing/key-features';
import ExtendedFeatures from '@/components/landing/extended-features';
import BenefitsBanner from '@/components/landing/benefits-banner';
import Faq from '@/components/landing/faq';
import Pricing from '@/components/landing/pricing';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DemoVideo />
        <KeyFeatures />
        <ExtendedFeatures />
        <BenefitsBanner />
        <Faq />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
