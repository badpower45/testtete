import { Shield, Truck, CreditCard, Headphones, RotateCcw, Award } from 'lucide-react';
import { motion } from 'motion/react';

const badges = [
  {
    icon: Shield,
    title: 'دفع آمن 100%',
    description: 'حماية كاملة للمعاملات'
  },
  {
    icon: Truck,
    title: 'توصيل سريع',
    description: 'خلال 24 ساعة فقط'
  },
  {
    icon: RotateCcw,
    title: 'استرجاع مجاني',
    description: 'خلال 7 أيام'
  },
  {
    icon: Headphones,
    title: 'دعم على مدار الساعة',
    description: 'خدمة عملاء متواصلة'
  },
  {
    icon: CreditCard,
    title: 'طرق دفع متعددة',
    description: 'نقدي أو إلكتروني'
  },
  {
    icon: Award,
    title: 'ضمان الجودة',
    description: 'منتجات أصلية 100%'
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="text-center p-4 rounded-xl hover:bg-secondary transition-all"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-sm mb-1" style={{ fontWeight: 700 }}>{badge.title}</div>
              <div className="text-xs text-muted-foreground">{badge.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
