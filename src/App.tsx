import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PromoBanner } from './components/PromoBanner';
import { LiveViewersCounter } from './components/LiveViewersCounter';
import { FloatingCartButton } from './components/FloatingCartButton';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import type { Product } from './components/ProductCard';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';
import { CheckCircle } from 'lucide-react';

type Page = 'home' | 'product' | 'cart' | 'checkout' | 'success';

interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Mock data for products
  const heroProduct: Product = {
    id: '1',
    name: 'تورتة شوكولاتة فاخرة بالكريمة الطازجة - حجم عائلي',
    image: 'https://images.unsplash.com/photo-1627814034209-95751c1b4ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZGVsaWNpb3VzfGVufDF8fHx8MTc2MTA1MDc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    originalPrice: 450,
    salePrice: 65,
    totalStock: 100,
    soldStock: 87,
    endTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
  };

  const flashDeals: Product[] = [
    {
      id: '2',
      name: 'بيتزا إيطالية كبيرة بالجبن الطازج وأفخر المكونات الإيطالية',
      image: 'https://images.unsplash.com/photo-1727198826083-6693684e4fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MDk1MzIxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 280,
      salePrice: 45,
      totalStock: 80,
      soldStock: 68,
      endTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
    },
    {
      id: '3',
      name: 'برجر لحم فاخر مع بطاطس مقرمشة - وجبة كاملة متكاملة',
      image: 'https://images.unsplash.com/photo-1656439659132-24c68e36b553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmYXN0JTIwZm9vZHxlbnwxfHx8fDE3NjEwMDc1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 195,
      salePrice: 39,
      totalStock: 120,
      soldStock: 102,
      endTime: new Date(Date.now() + 3 * 60 * 60 * 1000),
    },
    {
      id: '4',
      name: 'كيك الفانيليا الفرنسية بالفراولة الطازجة - مثالي للاحتفالات',
      image: 'https://images.unsplash.com/photo-1630410941240-3ce7991777ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwcGFzdHJ5JTIwc3dlZXR8ZW58MXx8fHwxNzYxMDUwNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 380,
      salePrice: 59,
      totalStock: 60,
      soldStock: 48,
      endTime: new Date(Date.now() + 5 * 60 * 60 * 1000),
    },
    {
      id: '5',
      name: 'آيس كريم بنكهات متنوعة - عبوة 6 كرات بالشوكولاتة والفانيليا',
      image: 'https://images.unsplash.com/photo-1663904458920-f153c162fa79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYwOTY3NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 150,
      salePrice: 25,
      totalStock: 200,
      soldStock: 178,
      endTime: new Date(Date.now() + 1 * 60 * 60 * 1000),
    },
    {
      id: '6',
      name: 'كوكيز بالشوكولاتة البلجيكية الطازجة - عبوة 12 قطعة كبيرة',
      image: 'https://images.unsplash.com/photo-1702743116767-c59de4e90d5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWVzJTIwYmFrZWQlMjBnb29kc3xlbnwxfHx8fDE3NjEwNTA3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 120,
      salePrice: 22,
      totalStock: 150,
      soldStock: 132,
      endTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
    },
  ];

  const activeDeals: Product[] = [
    {
      id: '7',
      name: 'سلطة خضراء طازجة مع صوص خاص - صحية ولذيذة ومغذية',
      image: 'https://images.unsplash.com/photo-1606757819934-d61a9f7279d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjEwMDI5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 95,
      salePrice: 19,
      totalStock: 80,
      soldStock: 52,
      endTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
    },
    {
      id: '8',
      name: 'سوشي ياباني أصلي من أفخر المطاعم - طبق متنوع 20 قطعة',
      image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NjEwMjE3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 420,
      salePrice: 89,
      totalStock: 50,
      soldStock: 38,
      endTime: new Date(Date.now() + 8 * 60 * 60 * 1000),
    },
    {
      id: '9',
      name: 'قهوة إسبريسو إيطالية فاخرة - كوب كبير مع كريمة غنية',
      image: 'https://images.unsplash.com/photo-1601912436399-9aa5c2460644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkcmlua3MlMjBjYWZlfGVufDF8fHx8MTc2MDk2Mjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 65,
      salePrice: 12,
      totalStock: 100,
      soldStock: 73,
      endTime: new Date(Date.now() + 7 * 60 * 60 * 1000),
    },
    {
      id: '10',
      name: 'دونات ملونة بالشوكولاتة والكراميل - عبوة 6 قطع طازجة',
      image: 'https://images.unsplash.com/photo-1618427012521-6a6d79af2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb251dHMlMjBjb2xvcmZ1bCUyMHN3ZWV0fGVufDF8fHx8MTc2MTA1MDc5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 140,
      salePrice: 28,
      totalStock: 90,
      soldStock: 71,
      endTime: new Date(Date.now() + 5 * 60 * 60 * 1000),
    },
    {
      id: '11',
      name: 'تورتة الشوكولاتة البلجيكية الداكنة - حجم وسط للعائلة',
      image: 'https://images.unsplash.com/photo-1627814034209-95751c1b4ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZGVsaWNpb3VzfGVufDF8fHx8MTc2MTA1MDc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 320,
      salePrice: 55,
      totalStock: 70,
      soldStock: 58,
      endTime: new Date(Date.now() + 9 * 60 * 60 * 1000),
    },
    {
      id: '12',
      name: 'بيتزا بيبروني حارة مع جبن موزاريلا - عائلية كبيرة',
      image: 'https://images.unsplash.com/photo-1727198826083-6693684e4fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGZvb2QlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MDk1MzIxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 310,
      salePrice: 62,
      totalStock: 65,
      soldStock: 49,
      endTime: new Date(Date.now() + 10 * 60 * 60 * 1000),
    },
  ];

  const bestSellers: Product[] = [
    {
      id: '13',
      name: 'برجر دجاج مشوي مع صوص خاص وخضروات طازجة',
      image: 'https://images.unsplash.com/photo-1656439659132-24c68e36b553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmYXN0JTIwZm9vZHxlbnwxfHx8fDE3NjEwMDc1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 165,
      salePrice: 35,
      totalStock: 100,
      soldStock: 86,
      endTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
    },
    {
      id: '14',
      name: 'كيك الريد فيلفيت الفاخر بكريمة الجبن الكريمية',
      image: 'https://images.unsplash.com/photo-1630410941240-3ce7991777ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwcGFzdHJ5JTIwc3dlZXR8ZW58MXx8fHwxNzYxMDUwNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 340,
      salePrice: 68,
      totalStock: 80,
      soldStock: 64,
      endTime: new Date(Date.now() + 8 * 60 * 60 * 1000),
    },
    {
      id: '15',
      name: 'آيس كريم الفانيليا الفرنسية الفاخر بقطع الشوكولاتة',
      image: 'https://images.unsplash.com/photo-1663904458920-f153c162fa79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYwOTY3NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 125,
      salePrice: 22,
      totalStock: 150,
      soldStock: 127,
      endTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
    },
  ];

  const comingSoonDeals: Product[] = [
    {
      id: '16',
      name: 'سوشي سالمون فاخر مع أرز ياباني أصلي - قريباً',
      image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NjEwMjE3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 520,
      salePrice: 120,
      totalStock: 100,
      soldStock: 0,
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    {
      id: '17',
      name: 'تشيز كيك نيويورك بالتوت الأزرق الطازج - قريباً',
      image: 'https://images.unsplash.com/photo-1630410941240-3ce7991777ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwcGFzdHJ5JTIwc3dlZXR8ZW58MXx8fHwxNzYxMDUwNzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      originalPrice: 290,
      salePrice: 65,
      totalStock: 80,
      soldStock: 0,
      endTime: new Date(Date.now() + 30 * 60 * 60 * 1000),
    },
  ];

  const allProducts = [heroProduct, ...flashDeals, ...activeDeals, ...bestSellers, ...comingSoonDeals];

  const handleAddToCart = (productId: string) => {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    toast.success('تمت الإضافة إلى السلة بنجاح! 🎉', {
      description: 'يمكنك إتمام عملية الشراء الآن أو مواصلة التسوق',
    });
  };

  const handleViewProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const handleCartClick = () => {
    setCurrentPage('cart');
    window.scrollTo(0, 0);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast.success('تم حذف المنتج من السلة');
  };

  const handleCheckout = () => {
    setCurrentPage('checkout');
    window.scrollTo(0, 0);
  };

  const handleCompleteOrder = () => {
    setCurrentPage('success');
    setCartItems([]);
    window.scrollTo(0, 0);
    toast.success('تم تأكيد طلبك بنجاح! 🎉', {
      description: 'سيتم التواصل معك قريباً',
    });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProductId(null);
    window.scrollTo(0, 0);
  };

  const selectedProduct = selectedProductId ? allProducts.find(p => p.id === selectedProductId) : null;
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0) + 
    (cartItems.length > 0 && cartItems.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0) < 200 ? 30 : 0);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Toaster position="top-center" richColors />
      
      {/* Header - Always visible */}
      {currentPage !== 'success' && (
        <Header 
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
          onCartClick={handleCartClick} 
        />
      )}
      
      {/* Promo Banner - Only on home */}
      {currentPage === 'home' && <PromoBanner />}

      {/* Live Viewers Counter - Home page only */}
      {currentPage === 'home' && <LiveViewersCounter />}

      {/* Floating Cart Button - Mobile only */}
      <FloatingCartButton
        itemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onClick={handleCartClick}
      />

      {/* Page Content */}
      {currentPage === 'home' && (
        <HomePage
          heroProduct={heroProduct}
          flashDeals={flashDeals}
          activeDeals={activeDeals}
          bestSellers={bestSellers}
          comingSoonDeals={comingSoonDeals}
          onAddToCart={handleAddToCart}
          onViewProduct={handleViewProduct}
        />
      )}

      {currentPage === 'product' && selectedProduct && (
        <ProductDetailPage
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          onBack={handleBackToHome}
        />
      )}

      {currentPage === 'cart' && (
        <CartPage
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
          onBack={handleBackToHome}
        />
      )}

      {currentPage === 'checkout' && (
        <CheckoutPage
          total={cartTotal}
          onBack={() => setCurrentPage('cart')}
          onComplete={handleCompleteOrder}
        />
      )}

      {currentPage === 'success' && (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="bg-primary text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h1 className="text-4xl mb-4" style={{ fontWeight: 900 }}>
                تم تأكيد طلبك بنجاح! 🎉
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                شكراً لثقتك في MegaDeals. سيتم التواصل معك قريباً لتأكيد التوصيل.
              </p>
              <div className="bg-secondary rounded-2xl p-6 mb-8">
                <p className="text-lg">
                  سيصلك إشعار عبر الرسائل النصية بتفاصيل الطلب وموعد التوصيل المتوقع خلال دقائق.
                </p>
              </div>
              <button
                onClick={handleBackToHome}
                className="bg-primary text-white px-8 py-4 rounded-xl text-lg hover:bg-primary/90 transition-colors"
                style={{ fontWeight: 700 }}
              >
                العودة للصفحة الرئيسية
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer - Always visible except success page */}
      {currentPage !== 'success' && <Footer />}
    </div>
  );
}
