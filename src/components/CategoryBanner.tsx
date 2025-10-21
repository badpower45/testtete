import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface CategoryBannerProps {
  title: string;
  description: string;
  image: string;
  discount: string;
  bgColor?: string;
}

export function CategoryBanner({ title, description, image, discount, bgColor = 'bg-primary/10' }: CategoryBannerProps) {
  return (
    <div className={`relative ${bgColor} rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300`}>
      <div className="grid md:grid-cols-2 gap-6 items-center p-8">
        <div className="space-y-4">
          <div className="inline-block bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm">
            خصم {discount}
          </div>
          <h3 className="text-3xl" style={{ fontWeight: 700 }}>{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <Button className="group-hover:gap-3 transition-all">
            تسوق الآن
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:mr-3 transition-all" />
          </Button>
        </div>
        <div className="relative h-64">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
