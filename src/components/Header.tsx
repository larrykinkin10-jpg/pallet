import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Truck, 
  Search, 
  Globe2, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  Package, 
  Menu, 
  X,
  Clock,
  RotateCcw
} from 'lucide-react';
import { Currency, Product, CartItem } from '../types';
import { CATEGORIES } from '../data/categories';
import { SearchAutocomplete } from './SearchAutocomplete';
import { formatCurrency } from '../utils/formatters';

interface HeaderProps {
  currency: Currency;
  onToggleCurrency: () => void;
  cartItems: CartItem[];
  wishlistIds: string[];
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenTrackOrder: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (categoryId: string) => void;
  selectedCategoryId: string | null;
  onNavigateHome: () => void;
  onNavigateCatalog: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onToggleCurrency,
  cartItems,
  wishlistIds,
  onOpenCart,
  onOpenWishlist,
  onOpenTrackOrder,
  onSelectProduct,
  onSelectCategory,
  selectedCategoryId,
  onNavigateHome,
  onNavigateCatalog
}) => {
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotalEur = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800 transition-colors">
      
      {/* Top Retail Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border-b border-slate-800 text-[11px] text-slate-300 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>FLASH SALE: Extra 10% OFF with code <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/30 font-mono">OUTLET10</span></span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              Free EU Tracked Shipping on orders over €50
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <RotateCcw className="w-3 h-3 text-emerald-400" />
              30-Day Money-Back Guarantee
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <button 
              onClick={onOpenTrackOrder}
              className="hover:text-emerald-400 text-slate-300 font-medium flex items-center gap-1 transition-colors"
            >
              <Package className="w-3.5 h-3.5 text-emerald-400" />
              <span>Track Order</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          
          {/* Logo */}
          <div 
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  EuroPallet<span className="text-emerald-400">Liquidation</span>
                </span>
                <span className="text-[10px] uppercase font-extrabold tracking-wider bg-emerald-500 text-slate-950 px-1.5 py-0.5 rounded shadow-sm">
                  STORE
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wide">
                EUROPE'S LIQUIDATION & OUTLET SHOP
              </p>
            </div>
          </div>

          {/* Search Autocomplete Bar (Desktop/Tablet) */}
          <div className="flex-1 max-w-xl hidden sm:block">
            <SearchAutocomplete
              currency={currency}
              onSelectProduct={onSelectProduct}
              onSearchSubmit={() => onNavigateCatalog()}
            />
          </div>

          {/* Header Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Currency Switcher */}
            <button
              onClick={onToggleCurrency}
              title="Switch Currency (EUR / GBP)"
              className="px-2.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-slate-300 hover:text-white hover:border-slate-600 transition-colors flex items-center gap-1.5"
            >
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currency === 'EUR' ? 'EUR €' : 'GBP £'}</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              title="Saved Wishlist"
              className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white transition-colors flex items-center"
            >
              <Heart className={`w-4 h-4 ${wishlistIds.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlistIds.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">My Cart</span>
              <span className="bg-slate-950 text-emerald-400 text-[11px] font-mono font-black px-1.5 py-0.5 rounded-full">
                {totalCartCount}
              </span>
              {cartSubtotalEur > 0 && (
                <span className="hidden md:inline font-mono font-bold text-slate-950 pl-0.5">
                  • {formatCurrency(cartSubtotalEur, currency)}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 sm:hidden">
          <SearchAutocomplete
            currency={currency}
            onSelectProduct={onSelectProduct}
            onSearchSubmit={() => onNavigateCatalog()}
          />
        </div>
      </div>

      {/* Category Pills Quick Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2 text-xs">
          <button
            onClick={() => {
              onSelectCategory('all');
              onNavigateCatalog();
            }}
            className={`px-3 py-1 rounded-full shrink-0 font-bold transition-colors ${
              selectedCategoryId === null
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            🔥 All Outlet Deals
          </button>

          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                onNavigateCatalog();
              }}
              className={`px-3 py-1 rounded-full shrink-0 font-medium transition-colors ${
                selectedCategoryId === cat.id
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onNavigateCatalog();
                setIsMobileMenuOpen(false);
              }}
              className="py-2.5 px-3 bg-slate-800 rounded-xl text-xs font-bold text-slate-100 text-center"
            >
              Browse All Deals
            </button>
            <button
              onClick={() => {
                onOpenTrackOrder();
                setIsMobileMenuOpen(false);
              }}
              className="py-2.5 px-3 bg-slate-800 rounded-xl text-xs font-bold text-slate-100 text-center flex items-center justify-center gap-1.5"
            >
              <Package className="w-3.5 h-3.5 text-emerald-400" />
              <span>Track Order</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-800 text-xs space-y-1.5">
            <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">
              Categories
            </span>
            {CATEGORIES.slice(0, 6).map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  onNavigateCatalog();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-1.5 text-slate-300 hover:text-emerald-400"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
