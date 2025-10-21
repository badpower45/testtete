import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CountdownTimer } from './CountdownTimer';
import { StockProgressBar } from './StockProgressBar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Zap, Sparkles, TrendingUp, Gift } from 'lucide-react';
import { motion } from 'motion/react';
import type { Product } from './ProductCard';

interface HeroSectionProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
}

export function HeroSection({ product, onAddToCart }: HeroSectionProps) {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00796B]/5 via-white to-[#F57C00]/5">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-[#F57C00]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Floating Badge */}
            <motion.div
              className="absolute -top-6 -right-6 z-20"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bg-gradient-to-r from-primary to-[#00695C] text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border-2 border-white">
                <Zap className="w-6 h-6 fill-current animate-pulse" />
                <span className="text-lg" style={{ fontWeight: 700 }}>عرض اليوم الخاطف</span>
              </div>
            </motion.div>

            {/* Main Image Container */}
            <div className="relative aspect-square bg-gradient-to-br from-white to-secondary rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Discount Badge */}
              {discountPercentage > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
                  transition={{ 
                    scale: { duration: 0.5, delay: 0.3 },
                    rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-4 left-4"
                >
                  <div className="bg-gradient-to-r from-destructive to-[#D32F2F] text-white px-6 py-3 rounded-2xl shadow-xl border-2 border-white">
                    <div className="text-center">
                      <div className="text-3xl" style={{ fontWeight: 900 }}>-{discountPercentage}%</div>
                      <div className="text-xs">خصم</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-primary/40" />
                </motion.div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 border border-border flex items-center gap-6 z-10">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">تم البيع</div>
                  <div className="text-sm" style={{ fontWeight: 700 }}>{product.soldStock}+</div>
                </div>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#F57C00]" />
                <div>
                  <div className="text-xs text-muted-foreground">متبقي</div>
                  <div className="text-sm text-[#F57C00]" style={{ fontWeight: 700 }}>{product.totalStock - product.soldStock}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-6xl mb-4 leading-tight" style={{ fontWeight: 800 }}>
                  {product.name}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                عرض حصري لفترة محدودة جداً! 🎁 لا تفوت هذه الفرصة الذهبية واحصل على خصم خيالي
              </motion.p>
            </div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="relative space-y-3 bg-gradient-to-br from-primary/5 to-white p-8 rounded-2xl border-2 border-primary/20 shadow-lg"
            >
              <div className="absolute -top-3 left-8 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
                السعر الجديد
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-7xl md:text-8xl text-primary" style={{ fontWeight: 900 }}>
                  {product.salePrice}
                </span>
                <span className="text-3xl text-primary">ج.م</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground line-through text-3xl opacity-60">
                  {product.originalPrice} ج.م
                </span>
                <Badge className="bg-destructive text-destructive-foreground px-3 py-1">
                  وفر {product.originalPrice - product.salePrice} ج.م
                </Badge>
              </div>
            </motion.div>

            {/* Countdown Timer */}
            {!product.isSoldOut && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-[#F57C00]/10 to-[#FF6F00]/10 p-5 rounded-2xl border-2 border-[#F57C00]/30 shadow-lg"
              >
                <CountdownTimer endTime={product.endTime} size="lg" />
              </motion.div>
            )}

            {/* Stock Progress */}
            {!product.isSoldOut && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white p-5 rounded-2xl border border-border shadow-md"
              >
                <StockProgressBar
                  totalStock={product.totalStock}
                  soldStock={product.soldStock}
                  size="lg"
                />
              </motion.div>
            )}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                className="w-full text-xl py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                disabled={product.isSoldOut}
                onClick={() => onAddToCart?.(product.id)}
              >
                {product.isSoldOut ? (
                  'نفدت الكمية'
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6 ml-3" />
                    اشتري الآن - عرض محدود جداً
                  </>
                )}
              </Button>
            </motion.div>

            {product.isSoldOut && (
              <p className="text-center text-destructive text-lg">
                للأسف، نفدت كمية هذا المنتج. تابعنا للعروض القادمة!
              </p>
            )}

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-4 pt-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                <span>جودة مضمونة</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4" />
                <span>توصيل سريع</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Gift className="w-4 h-4" />
                <span>هدايا مجانية</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
