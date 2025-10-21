import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowRight, CreditCard, Wallet, CheckCircle } from 'lucide-react';
import { Badge } from '../components/ui/badge';

interface CheckoutPageProps {
  total: number;
  onBack: () => void;
  onComplete: () => void;
}

export function CheckoutPage({ total, onBack, onComplete }: CheckoutPageProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-[#00695C] text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للسلة</span>
          </button>
          <h1 className="text-4xl" style={{ fontWeight: 800 }}>إتمام الطلب</h1>
          <p className="text-white/80 mt-2">املأ البيانات لإتمام عملية الشراء</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Shipping Information */}
          <div className="bg-white rounded-2xl border-2 border-border p-8">
            <h2 className="text-2xl mb-6" style={{ fontWeight: 700 }}>معلومات الشحن</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">الاسم الأول *</Label>
                <Input id="firstName" required placeholder="أدخل اسمك الأول" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">اسم العائلة *</Label>
                <Input id="lastName" required placeholder="أدخل اسم العائلة" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="phone">رقم الهاتف *</Label>
                <Input id="phone" type="tel" required placeholder="01xxxxxxxxx" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="address">العنوان بالتفصيل *</Label>
                <Input id="address" required placeholder="الشارع، المنطقة، المدينة" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">المدينة *</Label>
                <Input id="city" required placeholder="القاهرة، الجيزة..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postal">الرمز البريدي</Label>
                <Input id="postal" placeholder="12345" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="notes">ملاحظات إضافية (اختياري)</Label>
                <Input id="notes" placeholder="أي ملاحظات خاصة بالتوصيل" />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl border-2 border-border p-8">
            <h2 className="text-2xl mb-6" style={{ fontWeight: 700 }}>طريقة الدفع</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  paymentMethod === 'card'
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${paymentMethod === 'card' ? 'bg-primary text-white' : 'bg-secondary'}`}>
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div style={{ fontWeight: 700 }}>الدفع عند الاستلام</div>
                    <div className="text-sm text-muted-foreground">ادفع نقداً عند التوصيل</div>
                  </div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  paymentMethod === 'cash'
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${paymentMethod === 'cash' ? 'bg-primary text-white' : 'bg-secondary'}`}>
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div style={{ fontWeight: 700 }}>الدفع الإلكتروني</div>
                    <div className="text-sm text-muted-foreground">فيزا، ماستركارد، فوري</div>
                  </div>
                </div>
              </button>
            </div>

            {paymentMethod === 'cash' && (
              <div className="bg-secondary p-6 rounded-xl">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">رقم البطاقة</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">اسم حامل البطاقة</Label>
                    <Input id="cardName" placeholder="كما هو مكتوب على البطاقة" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" type="password" placeholder="123" maxLength={3} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl border-2 border-primary/20 p-8">
            <h2 className="text-2xl mb-6" style={{ fontWeight: 700 }}>ملخص الطلب</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between text-lg">
                <span className="text-muted-foreground">المجموع الكلي</span>
                <span className="text-primary text-3xl" style={{ fontWeight: 900 }}>
                  {total} ج.م
                </span>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full py-6 text-lg">
              <CheckCircle className="w-5 h-5 ml-2" />
              تأكيد الطلب والدفع
            </Button>

            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>✓ معلوماتك محمية بتشفير SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>✓ سيتم إرسال تأكيد الطلب عبر الرسائل النصية</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>✓ يمكنك تتبع طلبك في أي وقت</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
