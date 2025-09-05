import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] min-h-[500px] sm:min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Rich Look Menswear Collection" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-gradient opacity-70 sm:opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl sm:max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold heading-luxury mb-4 sm:mb-6 leading-tight">
            Elevate Your
            <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Style
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
            Discover premium menswear that defines sophistication. From casual elegance to formal excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button className="btn-gold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto">
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              className="btn-outline-gold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
            >
              View Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;