import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import { Button } from './ui/button';
import { ProductCard, type Product } from './ProductCard';

interface FlashDealsCarouselProps {
  products: Product[];
  onAddToCart?: (productId: string) => void;
}

export function FlashDealsCarousel({ products, onAddToCart }: FlashDealsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-[#F57C00] to-[#FF6F00] text-white p-3 rounded-xl animate-pulse">
            <Flame className="w-7 h-7 fill-current" />
          </div>
          <div>
            <h2 className="text-3xl" style={{ fontWeight: 700 }}>
              العروض المتوفرة حاليًا - الحق العرض! 🔥
            </h2>
            <p className="text-muted-foreground">خصومات خيالية لفترة محدودة جداً</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            className="rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            className="rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[300px] md:w-[350px] snap-start"
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
