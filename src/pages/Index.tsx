import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import SubcategoriesSection from "@/components/SubcategoriesSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <SubcategoriesSection />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default Index;
