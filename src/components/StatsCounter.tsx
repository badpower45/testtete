import { TrendingUp, Users, Package, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

interface Stat {
  icon: typeof TrendingUp;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Package,
    value: 50000,
    suffix: '+',
    label: 'منتج تم بيعه',
    color: 'text-primary'
  },
  {
    icon: Users,
    value: 15000,
    suffix: '+',
    label: 'عميل سعيد',
    color: 'text-[#F57C00]'
  },
  {
    icon: TrendingUp,
    value: 90,
    suffix: '%',
    label: 'خصم أقصى',
    color: 'text-destructive'
  },
  {
    icon: Award,
    value: 4.9,
    suffix: '/5',
    label: 'تقييم العملاء',
    color: 'text-[#F57C00]'
  },
];

function CountUpAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          const increment = end / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasStarted]);

  return (
    <div ref={ref}>
      {end > 1000 ? count.toLocaleString() : count}
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-[#00695C] to-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-10 h-10" />
              </div>
              <div className="text-4xl md:text-5xl mb-2" style={{ fontWeight: 900 }}>
                <CountUpAnimation end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
