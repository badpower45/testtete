import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { CountdownTimer } from './CountdownTimer';
import { StockProgressBar } from './StockProgressBar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  totalStock: number;
  soldStock: number;
  endTime: Date;
  isSoldOut?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  size?: 'sm' | 'md';
}

export function ProductCard({ product, onAddToCart, size = 'md' }: ProductCardProps) {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  const cardClasses = size === 'sm' ? 'p-3' : 'p-4';
  const imageHeight = size === 'sm' ? 'h-48' : 'h-64';

  return (
    <Card className={`${cardClasses} hover:shadow-lg transition-shadow duration-300 border border-border`}>
      <div className="space-y-3">
        {/* Product Image */}
        <div className={`relative ${imageHeight} bg-secondary rounded-lg overflow-hidden group`}>
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discountPercentage > 0 && (
            <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs md:text-sm">
              خصم {discountPercentage}%
            </Badge>
          )}
          {product.isSoldOut && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white px-4 py-2 bg-black/80 rounded text-sm">
                نفدت الكمية
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="line-clamp-2 min-h-[3rem] text-sm md:text-base">{product.name}</h3>

          {/* Pricing */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
            <span className="text-2xl md:text-3xl text-primary" style={{ fontWeight: 800 }}>
              {product.salePrice} ج.م
            </span>
            <span className="text-sm md:text-base text-muted-foreground line-through opacity-60">
              {product.originalPrice} ج.م
            </span>
          </div>

          {/* Countdown Timer */}
          {!product.isSoldOut && (
            <CountdownTimer endTime={product.endTime} size={size === 'sm' ? 'sm' : 'md'} />
          )}

          {/* Stock Progress */}
          {!product.isSoldOut && (
            <StockProgressBar
              totalStock={product.totalStock}
              soldStock={product.soldStock}
              size={size === 'sm' ? 'sm' : 'md'}
            />
          )}

          {/* Add to Cart Button */}
          <Button
            className="w-full text-sm md:text-base py-2 md:py-3"
            disabled={product.isSoldOut}
            onClick={() => onAddToCart?.(product.id)}
          >
            {product.isSoldOut ? (
              'نفدت الكمية'
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 ml-2" />
                أضف للسلة
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
}
