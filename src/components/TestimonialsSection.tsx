import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمود',
    rating: 5,
    text: 'منتجات رائعة وخصومات حقيقية! استلمت طلبي في نفس اليوم والجودة ممتازة جداً',
    date: 'منذ 3 أيام'
  },
  {
    id: 2,
    name: 'سارة أحمد',
    rating: 5,
    text: 'أفضل موقع عروض جربته! الأسعار فعلاً مذهلة والتوصيل سريع جداً',
    date: 'منذ 5 أيام'
  },
  {
    id: 3,
    name: 'محمد حسن',
    rating: 5,
    text: 'خدمة عملاء ممتازة وتعامل راقي. المنتجات طازجة والتغليف فاخر',
    date: 'منذ أسبوع'
  },
  {
    id: 4,
    name: 'فاطمة علي',
    rating: 5,
    text: 'وفرت كثير مع العروض اليومية! كل يوم في حاجة جديدة وأسعار خيالية',
    date: 'منذ أسبوعين'
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center bg-primary/10 text-primary px-6 py-2 rounded-full mb-4"
          >
            <Star className="w-5 h-5 ml-2 fill-current" />
            <span style={{ fontWeight: 700 }}>آراء عملائنا</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl mb-4"
            style={{ fontWeight: 800 }}
          >
            ماذا يقول عملاؤنا عنا؟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            أكثر من 10,000 عميل سعيد بخدماتنا ومنتجاتنا
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all relative"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/10" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F57C00] text-[#F57C00]" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div style={{ fontWeight: 700 }}>{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary" style={{ fontWeight: 700 }}>
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
