import { Progress } from './ui/progress';

interface StockProgressBarProps {
  totalStock: number;
  soldStock: number;
  size?: 'sm' | 'md' | 'lg';
}

export function StockProgressBar({ totalStock, soldStock, size = 'md' }: StockProgressBarProps) {
  const soldPercentage = Math.round((soldStock / totalStock) * 100);
  const remainingStock = totalStock - soldStock;
  const isLowStock = soldPercentage >= 75;

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  const textClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="w-full space-y-2">
      <div className={`flex items-center justify-between ${textClasses[size]}`}>
        <span className={`${isLowStock ? 'text-[#F57C00]' : 'text-muted-foreground'}`}>
          تم بيع {soldPercentage}%
        </span>
        <span className={`${isLowStock ? 'text-[#F57C00]' : 'text-muted-foreground'}`}>
          متبقي {remainingStock} قطعة فقط!
        </span>
      </div>
      <div className={`relative w-full bg-secondary rounded-full overflow-hidden ${heightClasses[size]}`}>
        <div
          className={`h-full transition-all duration-500 ${
            isLowStock ? 'bg-[#F57C00]' : 'bg-primary'
          }`}
          style={{ width: `${soldPercentage}%` }}
        />
      </div>
    </div>
  );
}
