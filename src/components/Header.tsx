import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold heading-luxury bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Rich Look
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Men
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Boys
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Kids
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Accessories
            </a>
            <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
              Sale
            </a>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;