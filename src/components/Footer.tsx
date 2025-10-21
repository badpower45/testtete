import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Twitter, CreditCard, Truck, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Features Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col items-center text-center gap-3 p-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Truck className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="text-sm md:text-base" style={{ fontWeight: 700 }}>توصيل سريع</h4>
                <p className="text-xs text-background/60 mt-1">خلال 24 ساعة</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Shield className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="text-sm md:text-base" style={{ fontWeight: 700 }}>دفع آمن</h4>
                <p className="text-xs text-background/60 mt-1">حماية كاملة</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="text-sm md:text-base" style={{ fontWeight: 700 }}>عروض يومية</h4>
                <p className="text-xs text-background/60 mt-1">خصومات جديدة</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3 p-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <CreditCard className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="text-sm md:text-base" style={{ fontWeight: 700 }}>طرق دفع متعددة</h4>
                <p className="text-xs text-background/60 mt-1">سهولة الشراء</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current" />
              </div>
              <h3 className="text-lg md:text-xl" style={{ fontWeight: 700 }}>MegaDeals</h3>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              موقعك الأول للعروض الخاطفة على أشهى المنتجات الغذائية. خصومات يومية تصل إلى 90% لفترة محدودة فقط!
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg" style={{ fontWeight: 600 }}>روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  عروض اليوم
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  كيف نعمل
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  سياسة الاسترجاع
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg" style={{ fontWeight: 600 }}>خدمة العملاء</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  تتبع الطلب
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  الشحن والتوصيل
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  طرق الدفع
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  الشروط والأحكام
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg" style={{ fontWeight: 600 }}>تواصل معنا</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-background/70">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>01234567890</span>
              </div>
              <div className="flex items-start gap-2 text-background/70">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@megadeals.com</span>
              </div>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>القاهرة، مصر</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="text-sm mb-3" style={{ fontWeight: 600 }}>ساعات العمل</h5>
              <p className="text-xs text-background/70">السبت - الخميس: 9 صباحاً - 10 مساءً</p>
              <p className="text-xs text-background/70">الجمعة: 2 مساءً - 10 مساءً</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-background/60">
            <p>© 2025 MegaDeals. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-4">
              <span>نقبل الدفع بواسطة:</span>
              <div className="flex items-center gap-2">
                <div className="bg-background/10 px-2 md:px-3 py-1 rounded text-xs">Visa</div>
                <div className="bg-background/10 px-2 md:px-3 py-1 rounded text-xs">Mastercard</div>
                <div className="bg-background/10 px-2 md:px-3 py-1 rounded text-xs">فوري</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
