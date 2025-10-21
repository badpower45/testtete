import { ShoppingCart, Zap, Menu, Search, Phone, Mail, MapPin, User, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';

interface HeaderProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

export function Header({ cartItemsCount = 0, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>01234567890</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@megadeals.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>التوصيل لجميع أنحاء مصر</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="bg-primary text-primary-foreground p-1.5 md:p-2 rounded-lg">
              <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current" />
            </div>
            <div>
              <h1 className="text-lg md:text-2xl text-primary" style={{ fontWeight: 800 }}>
                MegaDeals
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">عروض خاطفة يومية</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="ابحث عن المنتجات..."
                className="pr-10 pl-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-2">
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="relative hidden md:inline-flex px-4 py-2"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-5 h-5 ml-2" />
              <span>السلة</span>
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground px-2 py-0.5 text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={onCartClick}>
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-destructive text-white w-5 h-5 rounded-full flex items-center justify-center p-0 text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="ابحث عن المنتجات..."
              className="pr-10 pl-4 py-2 w-full text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-6 py-3 overflow-x-auto">
            <a href="#" className="text-sm whitespace-nowrap hover:text-primary transition-colors">
              الصفحة الرئيسية
            </a>
            <a href="#" className="text-sm whitespace-nowrap hover:text-primary transition-colors">
              عروض اليوم
            </a>
            <a href="#" className="text-sm whitespace-nowrap hover:text-primary transition-colors">
              حلويات
            </a>
            <a href="#" className="text-sm whitespace-nowrap hover:text-primary transition-colors">
              وجبات سريعة
            </a>
            <a href="#" className="text-sm whitespace-nowrap hover:text-primary transition-colors">
              مشروبات
            </a>
            <a href="#" className="text-sm whitespace-nowrap hover:text-primary transition-colors">
              منتجات صحية
            </a>
            <a href="#" className="text-sm text-destructive whitespace-nowrap hover:text-destructive/80 transition-colors">
              عروض محدودة 🔥
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
