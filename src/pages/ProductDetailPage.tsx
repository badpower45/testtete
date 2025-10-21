import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CountdownTimer } from '../components/CountdownTimer';
import { StockProgressBar } from '../components/StockProgressBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Star, ShoppingCart, Heart, Share2, Check, Package, Truck, Shield, ArrowRight } from 'lucide-react';
import type { Product } from '../components/ProductCard';

interface ProductDetailPageProps {
  product: Product;
  onAddToCart: (productId: string) => void;
  onBack: () => void;
}

export function ProductDetailPage({ product, onAddToCart, onBack }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const discountPercentage = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  const images = [product.image, product.image, product.image]; // في حالة حقيقية، هنا ستكون صور متعددة

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
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

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-secondary rounded-2xl overflow-hidden">
              <ImageWithFallback
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {discountPercentage > 0 && (
                <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-2 text-lg">
                  خصم {discountPercentage}%
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary' : 'border-border'
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl mb-4" style={{ fontWeight: 800 }}>{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F57C00] text-[#F57C00]" />
                  ))}
                </div>
                <span className="text-muted-foreground">(245 تقييم)</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary p-6 rounded-2xl border-2 border-primary/20">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-6xl text-primary" style={{ fontWeight: 900 }}>
                  {product.salePrice} ج.م
                </span>
                <span className="text-2xl text-muted-foreground line-through">
                  {product.originalPrice} ج.م
                </span>
              </div>
              <Badge className="bg-destructive text-destructive-foreground">
                وفر {product.originalPrice - product.salePrice} جنيه ({discountPercentage}%)
              </Badge>
            </div>

            {/* Countdown & Stock */}
            {!product.isSoldOut && (
              <>
                <div className="bg-gradient-to-r from-[#F57C00]/10 to-[#FF6F00]/10 p-5 rounded-2xl border-2 border-[#F57C00]/30">
                  <CountdownTimer endTime={product.endTime} size="lg" />
                </div>
                <div className="bg-white p-5 rounded-2xl border border-border">
                  <StockProgressBar
                    totalStock={product.totalStock}
                    soldStock={product.soldStock}
                    size="lg"
                  />
                </div>
              </>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-lg" style={{ fontWeight: 600 }}>الكمية:</span>
              <div className="flex items-center gap-3 border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-secondary transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-lg" style={{ fontWeight: 700 }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-secondary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 text-lg py-6"
                onClick={() => onAddToCart(product.id)}
                disabled={product.isSoldOut}
              >
                <ShoppingCart className="w-5 h-5 ml-2" />
                أضف إلى السلة
              </Button>
              <Button size="lg" variant="outline" className="px-6">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-6">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                <Truck className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm" style={{ fontWeight: 600 }}>توصيل مجاني</div>
                  <div className="text-xs text-muted-foreground">خلال 24 ساعة</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                <Shield className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm" style={{ fontWeight: 600 }}>ضمان الجودة</div>
                  <div className="text-xs text-muted-foreground">منتج أصلي 100%</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                <Package className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm" style={{ fontWeight: 600 }}>تغليف فاخر</div>
                  <div className="text-xs text-muted-foreground">جاهز للإهداء</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                <Check className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-sm" style={{ fontWeight: 600 }}>استرجاع مجاني</div>
                  <div className="text-xs text-muted-foreground">خلال 7 أيام</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start bg-secondary p-1 rounded-xl">
              <TabsTrigger value="description" className="px-8 py-3">الوصف</TabsTrigger>
              <TabsTrigger value="ingredients" className="px-8 py-3">المكونات</TabsTrigger>
              <TabsTrigger value="reviews" className="px-8 py-3">التقييمات</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="bg-secondary p-8 rounded-2xl">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>وصف المنتج</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  منتج فاخر مصنوع بأجود المكونات الطبيعية. يتميز بجودة عالية وطعم لا يُقاوم. 
                  مثالي للمناسبات الخاصة أو للاستمتاع اليومي. تم تحضيره بعناية فائقة للحفاظ 
                  على النكهة الأصيلة والجودة العالية.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="ingredients" className="mt-6">
              <div className="bg-secondary p-8 rounded-2xl">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>المكونات</h3>
                <ul className="space-y-2">
                  {['دقيق فاخر', 'سكر طبيعي', 'زبدة نباتية', 'بيض طازج', 'فانيليا أصلية', 'كاكاو بلجيكي'].map((ingredient, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-lg">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="bg-secondary p-8 rounded-2xl">
                <h3 className="text-2xl mb-6" style={{ fontWeight: 700 }}>تقييمات العملاء</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="bg-white p-6 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F57C00] text-[#F57C00]" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-2">منتج رائع وجودة ممتازة، أنصح به بشدة!</p>
                      <div className="text-sm text-muted-foreground">- محمد أحمد</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
