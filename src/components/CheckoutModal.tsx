import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Truck, 
  Lock, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Zap, 
  AlertCircle 
} from 'lucide-react';
import { CartItem, Currency, ShopOrder, ShippingMethod } from '../types';
import { formatCurrency } from '../utils/formatters';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  currency: Currency;
  couponCode: string;
  appliedDiscountEur: number;
  onOrderCompleted: (order: ShopOrder) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  currency,
  couponCode,
  appliedDiscountEur,
  onOrderCompleted
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2>(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'David Miller',
    email: 'david.miller@example.com',
    phone: '+31 6 1234 5678',
    street: 'Keizersgracht 421',
    apartment: 'Floor 3',
    city: 'Amsterdam',
    postalCode: '1016 EK',
    country: 'The Netherlands',
    // Payment
    paymentMethod: 'card' as 'card' | 'paypal' | 'klarna' | 'ideal' | 'applepay',
    cardNumber: '4532 •••• •••• 8821',
    cardExp: '08/28',
    cardCvc: '849',
    shippingSpeed: 'standard' as 'standard' | 'express'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const subtotalEur = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity, 
    0
  );

  const isFreeStandardShipping = subtotalEur >= 50;
  const standardShippingCost = isFreeStandardShipping ? 0 : 4.95;
  const expressShippingCost = 9.95;

  const activeShippingCost = formData.shippingSpeed === 'express' 
    ? expressShippingCost 
    : standardShippingCost;

  const finalTotalEur = Math.max(0, subtotalEur - appliedDiscountEur + activeShippingCost);
  const vatEur = finalTotalEur * 0.21 / 1.21;

  const shippingMethodObj: ShippingMethod = {
    id: formData.shippingSpeed,
    name: formData.shippingSpeed === 'express' ? 'DHL Express Priority Delivery' : 'Standard EU Tracked Delivery',
    carrier: formData.shippingSpeed === 'express' ? 'DHL Express' : 'DPD Europe',
    transitTime: formData.shippingSpeed === 'express' ? '1-2 Business Days' : '3-4 Business Days',
    priceEur: activeShippingCost,
    freeThresholdEur: 50
  };

  const handleFieldChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.street || !formData.city || !formData.postalCode) {
      alert('Please fill out all required address fields.');
      return;
    }
    setStep(2);
  };

  const handleFinalOrderSubmit = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const generatedOrderNumber = `EPL-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      const generatedTracking = `DHL-EU-${Math.floor(10000000 + Math.random() * 90000000)}`;
      
      const newOrder: ShopOrder = {
        id: `ORD-${Date.now()}`,
        orderNumber: generatedOrderNumber,
        date: new Date().toISOString().split('T')[0],
        items: [...cartItems],
        subtotalEur,
        discountEur: appliedDiscountEur,
        couponCode: couponCode || undefined,
        shippingEur: activeShippingCost,
        shippingMethod: shippingMethodObj,
        vatEur,
        totalEur: finalTotalEur,
        paymentMethod: formData.paymentMethod,
        customer: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          street: formData.street,
          apartment: formData.apartment || undefined,
          city: formData.city,
          postalCode: formData.postalCode,
          country: formData.country
        },
        status: 'Order Confirmed',
        trackingNumber: generatedTracking,
        carrier: shippingMethodObj.carrier,
        estimatedDelivery: formData.shippingSpeed === 'express' ? '1-2 Business Days' : '3-4 Business Days'
      };

      setIsProcessing(false);
      onOrderCompleted(newOrder);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col divide-y divide-slate-800"
      >
        {/* Modal Top Bar */}
        <div className="px-5 py-4 flex items-center justify-between bg-slate-950/80 sticky top-0 z-20 backdrop-blur">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-black text-white">Express Secure Checkout</span>
            <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
              256-Bit SSL
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps Breadcrumb */}
        <div className="px-5 py-2.5 bg-slate-950 flex items-center justify-between text-xs border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${
              step === 1 ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-950 text-emerald-400'
            }`}>
              1
            </span>
            <span className={step === 1 ? 'font-bold text-white' : 'text-slate-400'}>
              Shipping Address
            </span>
          </div>

          <ChevronRight className="w-4 h-4 text-slate-600" />

          <div className="flex items-center gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${
              step === 2 ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
            }`}>
              2
            </span>
            <span className={step === 2 ? 'font-bold text-white' : 'text-slate-400'}>
              Delivery & Payment
            </span>
          </div>
        </div>

        {/* Checkout Main Body */}
        <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Form Side (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            {step === 1 ? (
              <form onSubmit={handleProceedToPayment} className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">Contact & Delivery Address</h3>
                  <p className="text-xs text-slate-400">All orders dispatch directly from Venlo Hub (NL).</p>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="col-span-2">
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleFieldChange('fullName', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Street Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.street}
                      onChange={(e) => handleFieldChange('street', e.target.value)}
                      placeholder="Street name and house number"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Apartment / Suite</label>
                    <input
                      type="text"
                      value={formData.apartment}
                      onChange={(e) => handleFieldChange('apartment', e.target.value)}
                      placeholder="Optional"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Postal Code *</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => handleFieldChange('postalCode', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => handleFieldChange('city', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-300 block mb-1">Country *</label>
                    <select
                      value={formData.country}
                      onChange={(e) => handleFieldChange('country', e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="The Netherlands">The Netherlands</option>
                      <option value="Germany">Germany</option>
                      <option value="Belgium">Belgium</option>
                      <option value="France">France</option>
                      <option value="Austria">Austria</option>
                      <option value="Italy">Italy</option>
                      <option value="Spain">Spain</option>
                      <option value="Poland">Poland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Continue to Delivery & Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                {/* Shipping Method Selector */}
                <div>
                  <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Choose Shipping Speed</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <label
                      onClick={() => handleFieldChange('shippingSpeed', 'standard')}
                      className={`border rounded-xl p-3 flex flex-col justify-between cursor-pointer transition-all ${
                        formData.shippingSpeed === 'standard'
                          ? 'bg-emerald-950/40 border-emerald-500'
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-white">Standard EU Tracked</span>
                          <span className="text-xs font-bold font-mono text-emerald-400">
                            {standardShippingCost === 0 ? 'FREE' : formatCurrency(standardShippingCost, currency)}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">3–4 business days (DPD)</p>
                      </div>
                    </label>

                    <label
                      onClick={() => handleFieldChange('shippingSpeed', 'express')}
                      className={`border rounded-xl p-3 flex flex-col justify-between cursor-pointer transition-all ${
                        formData.shippingSpeed === 'express'
                          ? 'bg-emerald-950/40 border-emerald-500'
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-white">DHL Express Priority</span>
                          <span className="text-xs font-bold font-mono text-white">
                            {formatCurrency(expressShippingCost, currency)}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">1–2 business days</p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Select Payment Method</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {[
                      { id: 'card', label: 'Credit / Debit Card' },
                      { id: 'paypal', label: 'PayPal' },
                      { id: 'klarna', label: 'Klarna Pay Later' },
                      { id: 'ideal', label: 'iDEAL / Bancontact' }
                    ].map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => handleFieldChange('paymentMethod', pm.id)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all ${
                          formData.paymentMethod === pm.id
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white'
                        }`}
                      >
                        {pm.label}
                      </button>
                    ))}
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl space-y-2.5">
                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">Card Number</label>
                        <input
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => handleFieldChange('cardNumber', e.target.value)}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-mono"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[11px] text-slate-400 block mb-1">Expires</label>
                          <input
                            type="text"
                            value={formData.cardExp}
                            onChange={(e) => handleFieldChange('cardExp', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-mono"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] text-slate-400 block mb-1">CVC</label>
                          <input
                            type="text"
                            value={formData.cardCvc}
                            onChange={(e) => handleFieldChange('cardCvc', e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'paypal' && (
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-center text-xs text-slate-300">
                      You will be redirected to PayPal's secure portal to authorize payment.
                    </div>
                  )}

                  {formData.paymentMethod === 'klarna' && (
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-center text-xs text-slate-300">
                      Pay in 30 days or slice into 3 interest-free payments via Klarna.
                    </div>
                  )}

                  {formData.paymentMethod === 'ideal' && (
                    <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-center text-xs text-slate-300">
                      Direct online banking authorization via Rabobank, ING, ABN AMRO, SNS or Bancontact.
                    </div>
                  )}
                </div>

                {/* Back and Place Order */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-colors"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={handleFinalOrderSubmit}
                    className="flex-1 py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>Securing Authorization...</span>
                      </span>
                    ) : (
                      <span>Complete Order • {formatCurrency(finalTotalEur, currency)}</span>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Order Items & Summary (5 cols) */}
          <div className="md:col-span-5 bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Order Summary ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} Items)
              </h4>

              <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.title}
                      className="w-10 h-10 rounded-lg object-cover bg-slate-900 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-200 truncate">{item.product.title}</p>
                      <span className="text-[11px] text-slate-500">Qty: {item.quantity}</span>
                    </div>
                    <span className="font-mono font-bold text-white shrink-0">
                      {formatCurrency(item.product.price * item.quantity, currency)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="pt-3 mt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="font-mono">{formatCurrency(subtotalEur, currency)}</span>
                </div>

                {appliedDiscountEur > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({couponCode})</span>
                    <span className="font-mono">-{formatCurrency(appliedDiscountEur, currency)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-slate-400">Shipping</span>
                  <span className="font-mono">
                    {activeShippingCost === 0 ? 'FREE' : formatCurrency(activeShippingCost, currency)}
                  </span>
                </div>

                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Included 21% VAT</span>
                  <span className="font-mono">{formatCurrency(vatEur, currency)}</span>
                </div>

                <div className="flex justify-between font-black text-sm text-white pt-2 border-t border-slate-800">
                  <span>Total Due</span>
                  <span className="font-mono text-emerald-400 text-base">
                    {formatCurrency(finalTotalEur, currency)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Buyer Protection Guarantee</span>
              </div>
              <p>Full refund if item not delivered or differs from condition described.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
