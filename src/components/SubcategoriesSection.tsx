import { Shirt, ShirtIcon, Zap, TrendingUp, Scissors } from "lucide-react";

const subcategories = [
  { name: "Shirts", icon: Shirt, count: "120+ Styles" },
  { name: "T-shirts", icon: ShirtIcon, count: "80+ Designs" },
  { name: "Oversized T-shirts", icon: Zap, count: "45+ Trendy" },
  { name: "Pants", icon: TrendingUp, count: "60+ Options" },
  { name: "Joggers", icon: Scissors, count: "35+ Comfort" },
  { name: "Cargos", icon: TrendingUp, count: "25+ Utility" },
  { name: "Baggy Pants", icon: Scissors, count: "30+ Street" }
];

const SubcategoriesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading-luxury mb-4">
            Menswear Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our specialized categories designed for the modern man
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {subcategories.map((category, index) => (
            <div 
              key={index} 
              className="card-luxury p-6 text-center cursor-pointer group hover:bg-accent/5 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                <category.icon className="h-8 w-8 text-accent" />
              </div>
              
              <h3 className="font-semibold heading-luxury mb-2 group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {category.count}
              </p>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary via-primary-light to-accent rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
              <g fill="white" fillOpacity="0.1">
                <path d="M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z"/>
              </g>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold heading-luxury mb-4">
              New Collection Launch
            </h3>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Get 25% OFF on your first order • Free shipping on orders above ₹2999
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gold px-8 py-3 text-lg font-semibold">
                Shop New Collection
              </button>
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 font-medium">
                Use Code: RICHLOOK25
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubcategoriesSection;