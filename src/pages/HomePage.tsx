import { AdvancedHero } from '../components/AdvancedHero';
import { ProductCard, type Product } from '../components/ProductCard';
import { FlashDealsCarousel } from '../components/FlashDealsCarousel';
import { CategoryBanner } from '../components/CategoryBanner';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { StatsCounter } from '../components/StatsCounter';
import { TrustBadges } from '../components/TrustBadges';
import { DealOfTheHour } from '../components/DealOfTheHour';
import { InstagramFeed } from '../components/InstagramFeed';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Clock, Sparkles, TrendingUp, Star, Gift } from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  heroProduct: Product;
  flashDeals: Product[];
  activeDeals: Product[];
  bestSellers: Product[];
  comingSoonDeals: Product[];
  onAddToCart: (productId: string) => void;
  onViewProduct: (productId: string) => void;
}

export function HomePage({
  heroProduct,
  flashDeals,
  activeDeals,
  bestSellers,
  comingSoonDeals,
  onAddToCart,
  onViewProduct,
}: HomePageProps) {
  return (
    <>
      {/* Advanced Hero Section */}
      <AdvancedHero product={heroProduct} onAddToCart={onAddToCart} />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Flash Deals Carousel */}
      <section className="bg-gradient-to-b from-white to-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <FlashDealsCarousel products={flashDeals} onAddToCart={onAddToCart} />
        </div>
      </section>

      {/* Category Banners */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <CategoryBanner
            title="حلويات فاخرة"
            description="استمتع بأشهى الحلويات الطازجة بخصومات حصرية"
            image="https://images.unsplash.com/photo-1627814034209-95751c1b4ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZGVsaWNpb3VzfGVufDF8fHx8MTc2MTA1MDc4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            discount="85%"
            bgColor="bg-[#FFE5CC]"
          />
          <CategoryBanner
            title="وجبات سريعة"
            description="برجر، بيتزا، وأكثر بأسعار لا تُصدق"
            image="https://images.unsplash.com/photo-1656439659132-24c68e36b553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmYXN0JTIwZm9vZHxlbnwxfHx8fDE3NjEwMDc1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            discount="80%"
            bgColor="bg-[#E0F2F1]"
          />
        </div>
      </section>

      {/* Deal of the Hour */}
      <DealOfTheHour product={flashDeals[0]} onAddToCart={onAddToCart} />

      {/* Active Deals Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 md:p-3 rounded-xl">
              <Clock className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl" style={{ fontWeight: 700 }}>العروض النشطة الآن</h2>
              <p className="text-sm md:text-base text-muted-foreground">استغل الفرصة قبل انتهاء الوقت</p>
            </div>
          </div>
          <Badge className="bg-destructive text-destructive-foreground px-4 py-2 text-sm md:text-lg animate-pulse self-start md:self-auto">
            عروض محدودة
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {activeDeals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onViewProduct(product.id)}
              className="cursor-pointer"
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* Best Sellers */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <div className="bg-gradient-to-r from-[#F57C00] to-[#FF6F00] text-white p-2 md:p-3 rounded-xl">
              <TrendingUp className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl" style={{ fontWeight: 700 }}>الأكثر مبيعاً</h2>
              <p className="text-sm md:text-base text-muted-foreground">المنتجات المفضلة من عملائنا</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onClick={() => onViewProduct(product.id)}
              >
                <ProductCard product={product} onAddToCart={onAddToCart} />
                <div className="absolute -top-3 -right-3 bg-[#F57C00] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg z-10">
                  <Star className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Coming Soon Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6 md:mb-8"
        >
          <div className="bg-primary text-primary-foreground p-2 md:p-3 rounded-xl">
            <Sparkles className="w-5 h-5 md:w-7 md:h-7" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl" style={{ fontWeight: 700 }}>قادماً قريباً</h2>
            <p className="text-sm md:text-base text-muted-foreground">عروض قادمة خلال ساعات - ترقبوا</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {comingSoonDeals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="opacity-60 pointer-events-none">
                <ProductCard product={product} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Badge className="bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg shadow-xl">
                  يبدأ خلال {Math.round((product.endTime.getTime() - Date.now()) / (1000 * 60 * 60))} ساعة
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground p-3 md:p-4 rounded-full"
          >
            <Gift className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl"
            style={{ fontWeight: 700 }}
          >
            ابدأ التسوق الآن واستمتع بالعروض الحصرية!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            آلاف المنتجات بخصومات مذهلة تنتظرك. لا تفوت الفرصة!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 mt-4">
              تصفح جميع العروض
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
