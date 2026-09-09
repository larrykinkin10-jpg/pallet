import React from 'react';
import { 
  ShoppingBag, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CreditCard, 
  ExternalLink 
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenTrackOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenTrackOrder
}) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 py-6 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300">
                <strong>Certified European Overstock</strong> • 100% genuine with manufacturer warranty
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300">
                <strong>Fast Dispatch from Venlo Hub (NL)</strong> • Daily European departures
              </span>
            </div>

            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300">
                <strong>30-Day Money-Back Guarantee</strong> • Hassle-free prepaid returns
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Entity Details (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-emerald-500/20">
                <ShoppingBag className="w-4 h-4 text-slate-950" />
              </div>
              <span className="text-base font-black tracking-tight text-white">
                EuroPallet<span className="text-emerald-400">Liquidation</span>.eu
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm text-xs">
              Europe's premier online liquidation and outlet store. We partner directly with European retailers to make excess inventory, brand overstocks, and open-box items accessible to consumers at up to 80% off retail prices.
            </p>

            {/* Verified Entity Details */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2 text-[11px] text-slate-300">
              <span className="font-bold uppercase tracking-wider text-emerald-400 block text-[10px]">
                Registered European Entity
              </span>
              <div className="space-y-1">
                <p className="font-bold text-white">EuroPalletLiquidation B.V.</p>
                <div className="flex items-start gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Trade Port Europe, Voltastraat 12, 5928 PCA Venlo, The Netherlands</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>support@europalletliquidation.eu</span>
                </div>
                <p className="text-[10px] text-slate-500 pt-1 border-t border-slate-800">
                  Chamber of Commerce (KvK): 89234190 • Dutch VAT ID: NL864192084B01
                </p>
              </div>
            </div>
          </div>

          {/* Popular Departments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Departments
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className="hover:text-emerald-400 transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenTrackOrder}
                  className="hover:text-emerald-400 transition-colors text-left font-semibold text-slate-300"
                >
                  Track My Order
                </button>
              </li>
              <li>
                <span className="hover:text-emerald-400 cursor-pointer">
                  Shipping & European Delivery
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-400 cursor-pointer">
                  30-Day Returns Policy
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-400 cursor-pointer">
                  2-Year Statutory EU Warranty
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-400 cursor-pointer">
                  Authenticity & Testing Guarantee
                </span>
              </li>
              <li>
                <a href="mailto:support@europalletliquidation.eu" className="hover:text-emerald-400">
                  Email Support Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Payment Methods
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              We support fast and secure European payment methods with 256-bit encryption:
            </p>

            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono font-bold text-slate-300">
              <span className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center">VISA / MASTERCARD</span>
              <span className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center text-emerald-400">BUNQ</span>
              <span className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center">BANK TRANSFER</span>
              <span className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center text-teal-300">USDT</span>
            </div>

            <div className="pt-2">
              <span className="text-[10px] text-slate-400 block">Wholesale / Merchant inquiries:</span>
              <a 
                href="mailto:wholesale@europalletliquidation.eu"
                className="text-emerald-400 hover:underline text-[11px] font-semibold"
              >
                wholesale@europalletliquidation.eu
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>
            © 2026 EuroPalletLiquidation B.V. All rights reserved. Registered in The Netherlands.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy & Cookie Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">EU Consumer Rights</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
