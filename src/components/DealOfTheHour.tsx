import { Clock, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import type { Product } from './ProductCard';

interface DealOfTheHourProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function DealOfTheHour({ product, onAddToCart }: DealOfTheHourProps) {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F57C00]/10 via-white to-primary/10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#F57C00]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F57C00] to-[#FF6F00] text-white px-6 py-3 rounded-full mb-4 animate-pulse">
            <Clock className="w-5 h-5" />
            <span style={{ fontWeight: 700 }}>صفقة الساعة ⚡</span>
          </div>
          <h2 className="text-3xl md:text-4xl mb-2" style={{ fontWeight: 800 }}>
            عرض حصري لمدة ساعة واحدة فقط!
          </h2>
          <p className="text-muted-foreground text-lg">اغتنم الفرصة قبل انتهاء الوقت</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#F57C00]/20"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-secondary to-white p-8">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-destructive to-[#D32F2F] text-white px-6 py-3 rounded-2xl shadow-xl z-10">
                <div className="text-center">
                  <div className="text-4xl mb-1" style={{ fontWeight: 900 }}>-{discountPercentage}%</div>
                  <div className="text-xs">خصم خاص</div>
                </div>
              </div>
              <div className="relative h-full">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl mb-6" style={{ fontWeight: 800 }}>
                {product.name}
              </h3>

              <div className="bg-gradient-to-br from-primary/5 to-secondary p-6 rounded-2xl mb-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-5xl md:text-6xl text-primary" style={{ fontWeight: 900 }}>
                    {product.salePrice}
                  </span>
                  <span className="text-2xl text-primary">ج.م</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice} ج.م
                  </span>
                  <span className="bg-destructive text-white px-3 py-1 rounded-full text-sm">
                    وفر {product.originalPrice - product.salePrice} ج.م
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">تم البيع</span>
                  <span className="text-sm" style={{ fontWeight: 700 }}>
                    {product.soldStock} / {product.totalStock}
                  </span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(product.soldStock / product.totalStock) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-[#00695C]"
                  />
                </div>
              </div>

              <Button
                size="lg"
                className="w-full text-lg py-6 rounded-xl shadow-lg hover:shadow-xl"
                onClick={() => onAddToCart(product.id)}
              >
                <Zap className="w-5 h-5 ml-2 fill-current" />
                اشترِ الآن - عرض الساعة
              </Button>

              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>متبقي {product.totalStock - product.soldStock} فقط</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
