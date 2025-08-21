import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Rich Look Menswear Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold heading-luxury mb-6 leading-tight">
            Elevate Your
            <span className="block bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Style
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Discover premium menswear that defines sophistication. From casual elegance to formal excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-gold text-lg px-8 py-4 h-auto">
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
            >
              View Collection
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;