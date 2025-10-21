import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Gift } from 'lucide-react';
import type { Product } from '../components/ProductCard';
import { Badge } from '../components/ui/badge';

interface CartItem extends Product {
  quantity: number;
}

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  onBack: () => void;
}

export function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout, onBack }: CartPageProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 30;
  const total = subtotal + shipping;
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.salePrice) * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة للرئيسية</span>
            </button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="bg-secondary rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-16 h-16 text-muted-foreground" />
          </div>
          <h2 className="text-3xl mb-4" style={{ fontWeight: 700 }}>سلة التسوق فارغة</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            لم تقم بإضافة أي منتجات بعد. ابدأ التسوق الآن واستمتع بعروضنا الحصرية!
          </p>
          <Button size="lg" onClick={onBack} className="px-8 py-6 text-lg">
            تصفح المنتجات
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-[#00695C] text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
          >
            <ArrowRight className="w-4 h-4" />
            <span>مواصلة التسوق</span>
          </button>
          <h1 className="text-4xl" style={{ fontWeight: 800 }}>سلة التسوق</h1>
          <p className="text-white/80 mt-2">لديك {cartItems.length} منتج في السلة</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 flex gap-6">
                  {/* Product Image */}
                  <div className="w-32 h-32 flex-shrink-0 bg-secondary rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg mb-2 line-clamp-2" style={{ fontWeight: 600 }}>
                      {item.name}
                    </h3>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-2xl text-primary" style={{ fontWeight: 800 }}>
                        {item.salePrice} ج.م
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {item.originalPrice} ج.م
                      </span>
                      <Badge className="bg-destructive text-destructive-foreground text-xs">
                        وفر {item.originalPrice - item.salePrice} ج.م
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 border border-border rounded-lg">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-3 py-2 hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 min-w-[3rem] text-center" style={{ fontWeight: 700 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-2 hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>

                      {/* Subtotal */}
                      <div className="mr-auto text-left">
                        <div className="text-sm text-muted-foreground">المجموع</div>
                        <div className="text-xl text-primary" style={{ fontWeight: 800 }}>
                          {item.salePrice * item.quantity} ج.م
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl border-2 border-primary/20 p-6 sticky top-4">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 700 }}>ملخص الطلب</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">المجموع الفرعي</span>
                  <span style={{ fontWeight: 600 }}>{subtotal} ج.م</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">الشحن</span>
                  <span style={{ fontWeight: 600 }}>
                    {shipping === 0 ? (
                      <Badge className="bg-primary text-primary-foreground">مجاني</Badge>
                    ) : (
                      `${shipping} ج.م`
                    )}
                  </span>
                </div>
                {savings > 0 && (
                  <div className="flex items-center justify-between text-destructive">
                    <span>إجمالي التوفير</span>
                    <span style={{ fontWeight: 700 }}>-{savings} ج.م</span>
                  </div>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between text-xl">
                    <span style={{ fontWeight: 700 }}>الإجمالي</span>
                    <span className="text-primary text-3xl" style={{ fontWeight: 900 }}>
                      {total} ج.م
                    </span>
                  </div>
                </div>
              </div>

              {subtotal < 200 && (
                <div className="bg-[#F57C00]/10 border border-[#F57C00]/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-center">
                    أضف منتجات بقيمة <span style={{ fontWeight: 700 }}>{200 - subtotal} ج.م</span> 
                    {' '}للحصول على توصيل مجاني!
                  </p>
                </div>
              )}

              <Button
                size="lg"
                className="w-full py-6 text-lg mb-4"
                onClick={onCheckout}
              >
                <Gift className="w-5 h-5 ml-2" />
                إتمام الطلب
              </Button>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>✓ دفع آمن 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>✓ توصيل سريع خلال 24 ساعة</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>✓ إمكانية الاسترجاع خلال 7 أيام</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
