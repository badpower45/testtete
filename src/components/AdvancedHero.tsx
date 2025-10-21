import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CountdownTimer } from './CountdownTimer';
import { StockProgressBar } from './StockProgressBar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Zap, Sparkles, TrendingUp, Gift, Star, Crown } from 'lucide-react';
import { motion } from 'motion/react';
import type { Product } from './ProductCard';

interface AdvancedHeroProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
}

export function AdvancedHero({ product, onAddToCart }: AdvancedHeroProps) {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#00796B]/5 via-white to-[#F57C00]/5 min-h-screen flex items-center">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#F57C00]/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [90, 0, 90],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-[#F57C00]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Right Side - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 md:-top-12 -right-4 md:-right-8 z-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bg-gradient-to-br from-destructive to-[#D32F2F] text-white px-4 md:px-8 py-2 md:py-4 rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-4 border-white">
                <div className="text-center">
                  <div className="flex items-center gap-1 md:gap-2 mb-0.5 md:mb-1">
                    <Crown className="w-3 h-3 md:w-5 md:h-5" />
                    <span className="text-xs">وفر الآن</span>
                  </div>
                  <div className="text-2xl md:text-4xl" style={{ fontWeight: 900 }}>{discountPercentage}%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 z-20 hidden sm:block"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 border-2 md:border-4 border-primary/20">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="bg-primary text-white p-2 md:p-3 rounded-full">
                    <Star className="w-4 h-4 md:w-6 md:h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">تقييم العملاء</div>
                    <div className="flex items-center gap-1">
                      <div style={{ fontWeight: 800 }}>4.9</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#F57C00] text-[#F57C00]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Image Container */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-[#F57C00]/20 rounded-[3rem] blur-2xl" />
              <div className="relative aspect-square bg-gradient-to-br from-white to-secondary rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-8 border-white">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Sparkle Effects */}
                <motion.div
                  className="absolute top-10 right-10"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-8 h-8 text-[#F57C00]" />
                </motion.div>
                <motion.div
                  className="absolute bottom-10 left-10"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-white rounded-3xl shadow-xl p-6 border border-border"
            >
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl text-primary mb-1" style={{ fontWeight: 900 }}>
                    {product.soldStock}+
                  </div>
                  <div className="text-sm text-muted-foreground">تم البيع</div>
                </div>
                <div className="border-x border-border">
                  <div className="text-3xl text-[#F57C00] mb-1" style={{ fontWeight: 900 }}>
                    {product.totalStock - product.soldStock}
                  </div>
                  <div className="text-sm text-muted-foreground">متبقي فقط</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F57C00] text-[#F57C00]" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">تقييم ممتاز</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Side - Product Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Badge className="bg-gradient-to-r from-primary to-[#00695C] text-white px-6 py-2 text-sm border-0">
                <Zap className="w-4 h-4 ml-2 fill-current" />
                عرض اليوم الحصري - لفترة محدودة جداً
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-7xl leading-tight mb-4 md:mb-6" style={{ fontWeight: 900 }}>
                {product.name}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                استمتع بأفخر المنتجات بأسعار خيالية! عرض حصري لن يتكرر - احجز الآن قبل نفاد الكمية
              </p>
            </motion.div>

            {/* Mega Price Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-[#F57C00]/10 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-white to-secondary p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border-2 md:border-4 border-primary/30 shadow-2xl">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6">
                  <div>
                    <div className="text-xs md:text-sm text-muted-foreground mb-2">السعر الخاص</div>
                    <div className="flex items-baseline gap-2 md:gap-3">
                      <span className="text-5xl md:text-6xl lg:text-8xl text-primary" style={{ fontWeight: 900 }}>
                        {product.salePrice}
                      </span>
                      <span className="text-2xl md:text-3xl lg:text-4xl text-primary" style={{ fontWeight: 700 }}>ج.م</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-muted-foreground line-through text-xl md:text-2xl lg:text-3xl mb-2">
                      {product.originalPrice} ج.م
                    </div>
                    <Badge className="bg-gradient-to-r from-destructive to-[#D32F2F] text-white px-3 md:px-4 py-1 md:py-2 text-sm md:text-base lg:text-lg border-0">
                      وفر {product.originalPrice - product.salePrice} جنيه
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Countdown Timer */}
            {!product.isSoldOut && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-r from-[#F57C00]/10 via-[#FF6F00]/10 to-[#F57C00]/10 p-6 rounded-3xl border-2 border-[#F57C00]/30 shadow-lg"
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
                className="bg-white p-6 rounded-3xl border border-border shadow-lg"
              >
                <StockProgressBar
                  totalStock={product.totalStock}
                  soldStock={product.soldStock}
                  size="lg"
                />
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="flex-1 text-xl py-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all group"
                disabled={product.isSoldOut}
                onClick={() => onAddToCart?.(product.id)}
              >
                {product.isSoldOut ? (
                  'نفدت الكمية'
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform" />
                    اشترِ الآن - عرض محدود
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xl py-8 rounded-2xl border-2"
              >
                <Gift className="w-6 h-6 ml-2" />
                هدية
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>✓ توصيل سريع مجاني</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>✓ ضمان استرجاع الأموال</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>✓ دفع آمن 100%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
