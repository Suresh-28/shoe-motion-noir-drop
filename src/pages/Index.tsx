import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import TechSection from '@/components/TechSection';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Showcase />
      <TechSection />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
