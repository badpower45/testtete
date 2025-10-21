import { Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function LiveViewersCounter() {
  const [viewers, setViewers] = useState(Math.floor(Math.random() * 50) + 120);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        return Math.max(100, Math.min(200, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-6 z-50 bg-white border-2 border-primary rounded-full px-4 py-2 shadow-xl hidden md:flex items-center gap-2"
    >
      <div className="relative">
        <Eye className="w-5 h-5 text-primary" />
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">يشاهد الآن</div>
        <motion.div
          key={viewers}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="text-sm text-primary"
          style={{ fontWeight: 700 }}
        >
          {viewers} شخص
        </motion.div>
      </div>
    </motion.div>
  );
}
