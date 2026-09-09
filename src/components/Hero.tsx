import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Flame, 
  Clock, 
  Percent, 
  Tag, 
  CheckCircle2 
} from 'lucide-react';
import { Currency, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { formatCurrency } from '../utils/formatters';

interface HeroProps {
  currency: Currency;
  onExploreCatalog: () => void;
  onViewProduct: (product: Product) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currency,
  onExploreCatalog,
  onViewProduct,
  onSelectCategory
}) => {
  // Deal of the day
  const dealOfTheDay = PRODUCTS.find(p => p.dealOfTheDay) || PRODUCTS[0];

  // Countdown timer simulation (Hours, Minutes, Seconds)
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 py-8 md:py-14">
      {/* Background visual grid subtle ambient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Retail Value Pitch (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Central Europe Liquidation Outlet • Direct from Venlo Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Europe's Premier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                Online Liquidation & Outlet
              </span> Shop
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-xl">
              Authentic consumer electronics, coffee machines, power tools, and smart home appliances sourced directly from major European retailer overstocks and returns. <span className="text-emerald-400 font-bold">Save up to 80% off standard retail MSRP</span> with fast, tracked home delivery.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreCatalog}
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/25 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Shop Today's Outlet Deals</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectCategory('electronics-audio')}
                className="px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm flex items-center gap-2 transition-colors"
              >
                <span>Electronics Deals</span>
              </button>
            </div>

            {/* Consumer Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free EU Shipping over €50</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <RotateCcw className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30-Day Easy Returns</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2-Year EU Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Tested</span>
              </div>
            </div>
          </div>

          {/* Right Column: Deal of the Day Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl relative overflow-hidden group">
              {/* Top Banner with Countdown */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Flame className="w-4 h-4 fill-amber-400" />
                  <span>Deal of the Day</span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-xs font-mono font-bold text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Product Visual */}
              <div 
                onClick={() => onViewProduct(dealOfTheDay)}
                className="relative h-56 w-full rounded-xl overflow-hidden bg-slate-950 cursor-pointer"
              >
                <img
                  src={dealOfTheDay.images[0]}
                  alt={dealOfTheDay.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5 bg-rose-500 text-white font-mono font-black text-xs px-2.5 py-1 rounded-lg shadow-lg">
                  -{dealOfTheDay.discountPercentage}% OFF
                </div>
                <div className="absolute bottom-2.5 left-2.5 bg-slate-950/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                  {dealOfTheDay.condition}
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400 uppercase">
                    {dealOfTheDay.brand}
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    Only {dealOfTheDay.stockCount} remaining in Venlo
                  </span>
                </div>

                <h3 
                  onClick={() => onViewProduct(dealOfTheDay)}
                  className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1 cursor-pointer"
                >
                  {dealOfTheDay.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2">
                  {dealOfTheDay.description}
                </p>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Outlet Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-white font-mono">
                        {formatCurrency(dealOfTheDay.price, currency)}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        {formatCurrency(dealOfTheDay.originalMSRP, currency)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onViewProduct(dealOfTheDay)}
                    className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>View Deal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
