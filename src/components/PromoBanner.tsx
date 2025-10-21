import { Zap, TrendingUp, Percent } from 'lucide-react';
import { motion } from 'motion/react';

export function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-[#F57C00] via-[#FF6F00] to-[#F57C00] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 fill-current" />
                <span className="text-sm">عرض اليوم: خصم 85% على الحلويات</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">توصيل مجاني للطلبات فوق 200 جنيه</span>
              </div>
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5" />
                <span className="text-sm">خصومات تصل إلى 90% - عروض محدودة</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
