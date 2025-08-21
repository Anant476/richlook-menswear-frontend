import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import productDressShirt from "@/assets/product-dress-shirt.jpg";
import productOversizedTee from "@/assets/product-oversized-tee.jpg";
import productChinoPants from "@/assets/product-chino-pants.jpg";
import productCargoPants from "@/assets/product-cargo-pants.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Navy Dress Shirt",
    price: "₹2,999",
    originalPrice: "₹3,999",
    image: productDressShirt,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Oversized Black T-Shirt",
    price: "₹1,299",
    originalPrice: "₹1,799",
    image: productOversizedTee,
    rating: 4.6,
    reviews: 89,
    badge: "Trending"
  },
  {
    id: 3,
    name: "Premium Chino Pants",
    price: "₹2,499",
    originalPrice: "₹3,299",
    image: productChinoPants,
    rating: 4.7,
    reviews: 156,
    badge: "New"
  },
  {
    id: 4,
    name: "Cargo Utility Pants",
    price: "₹2,799",
    originalPrice: "₹3,699",
    image: productCargoPants,
    rating: 4.5,
    reviews: 93,
    badge: "Limited"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading-luxury mb-4">
            🔥 Current Top Grossing in Mens
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our best-selling pieces that define modern menswear
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              {/* Product Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </span>
              </div>

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 group/heart">
                <Heart className="h-4 w-4 text-muted-foreground group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-all duration-300" />
              </button>

              {/* Product Image */}
              <div className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold heading-luxury mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-primary">
                    {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full btn-primary group-hover:btn-gold transition-all duration-300">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-outline-gold text-lg px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;