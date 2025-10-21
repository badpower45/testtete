import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from './ui/badge';

interface FloatingCartButtonProps {
  itemCount: number;
  onClick: () => void;
}

export function FloatingCartButton({ itemCount, onClick }: FloatingCartButtonProps) {
  if (itemCount === 0) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-[#00695C] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center md:hidden"
      >
        <ShoppingCart className="w-7 h-7" />
        <Badge className="absolute -top-2 -right-2 bg-destructive text-white w-7 h-7 rounded-full flex items-center justify-center p-0 border-2 border-white">
          {itemCount}
        </Badge>
        <motion.div
          className="absolute inset-0 rounded-full bg-white"
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.button>
    </AnimatePresence>
  );
}
