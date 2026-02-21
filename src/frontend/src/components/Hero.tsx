import { ArrowRight, Leaf, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.png"
          alt="Golden millet field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img
              src="/assets/RaavniLogoWB.png"
              alt="Raavni Agrobyte Logo"
              className="h-32 w-auto mx-auto object-contain drop-shadow-lg"
            />
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-black">Built for Health,</span>
            <br />
            <span className="text-black">Designed for Impact</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white font-bold mb-8 max-w-2xl mx-auto animate-fade-in">
            Premium Millet Based products crafted with love and care by women, for a healthier you and a sustainable future.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/80 border-[3px] border-primary">
              <Leaf className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">100% Natural Millets</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border-[3px] border-secondary">
              <Heart className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">Women-Led</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 border-[3px] border-accent">
              <Heart className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white">Farmer Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm text-lg px-8 py-6 rounded-xl cursor-pointer"
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-xl cursor-pointer"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Hero;
