import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingCart, 
  Zap, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  Check, 
  Heart, 
  Share2, 
  Flame, 
  Package, 
  AlertCircle 
} from 'lucide-react';
import { Product, Currency, ProductVariant } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product, quantity: number, variant?: ProductVariant) => void;
  onBuyNow: (product: Product, quantity: number, variant?: ProductVariant) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  currency,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onBuyNow
}) => {
  if (!isOpen || !product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants && product.variants.length > 0 ? product.variants[0] : undefined
  );
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'reviews'>('features');
  const [isCopied, setIsCopied] = useState(false);

  const savingsEur = product.originalMSRP - product.price;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col relative divide-y divide-slate-800"
      >
        {/* Sticky Header with Close */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur z-20 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-emerald-400 uppercase tracking-wide">
              {product.brand}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 font-mono text-[11px]">SKU: {product.sku}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
              title="Share deal link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isCopied ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => onToggleWishlist(product.id)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Body */}
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Left Column: Gallery (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="relative h-72 sm:h-84 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-emerald-500 text-slate-950 font-black font-mono text-xs px-2.5 py-1 rounded-lg shadow-md">
                -{product.discountPercentage}% OUTLET PRICE
              </div>
              <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-md text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                {product.condition}
              </div>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImageIndex === idx ? 'border-emerald-500 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Live Social Urgency */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 flex items-center gap-2 text-xs text-amber-300">
              <Flame className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400 animate-pulse" />
              <span>
                High demand: <strong>14 customers</strong> are currently viewing this item.
              </span>
            </div>
          </div>

          {/* Right Column: Buying Controls & Info (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white leading-snug">
                {product.title}
              </h2>

              {/* Rating & Stock */}
              <div className="flex items-center gap-3 mt-2 text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-slate-500">({product.reviewCount} reviews)</span>
                </div>
                <span className="text-slate-600">|</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  In Stock in Venlo ({product.stockCount} left)
                </span>
              </div>

              {/* Pricing Box */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mt-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Liquidation Outlet Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                        {formatCurrency(product.price, currency)}
                      </span>
                      <span className="text-sm text-slate-400 line-through">
                        {formatCurrency(product.originalMSRP, currency)}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-1 rounded-md">
                      You save {formatCurrency(savingsEur, currency)}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      Includes 21% EU VAT
                    </span>
                  </div>
                </div>
              </div>

              {/* Variant Selector (if available) */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-3">
                  <label className="text-xs font-bold text-slate-300 block mb-1.5">
                    Select {product.variants[0].name}:
                  </label>
                  <div className="flex items-center gap-2 flex-wrap">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedVariant?.id === v.id
                            ? 'bg-emerald-500 text-slate-950 shadow-md'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {v.value}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper */}
              <div className="mt-3 flex items-center gap-3">
                <label className="text-xs font-bold text-slate-300">Quantity:</label>
                <div className="flex items-center bg-slate-950 border border-slate-700 rounded-lg p-1 text-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-white rounded hover:bg-slate-800 font-bold"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-mono font-bold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    className="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-white rounded hover:bg-slate-800 font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="text-[11px] text-slate-400">
                  (Max {product.stockCount} per customer)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => onAddToCart(product, quantity, selectedVariant)}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add {quantity} to Shopping Cart</span>
              </button>

              <button
                onClick={() => onBuyNow(product, quantity, selectedVariant)}
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Buy Now with 1-Click Checkout</span>
              </button>
            </div>

            {/* Delivery & Warranty Guarantees */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{product.freeShippingEligible ? 'Free Tracked Shipping' : '€4.95 EU Shipping'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>30-Day Free Return Policy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{product.warrantyMonths}-Month EU Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Package className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dispatched from Venlo, NL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Info Section (Features, Specs, Reviews) */}
        <div className="p-4 sm:p-6 bg-slate-950/40">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-2 text-xs font-bold">
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'features' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              Key Features & Details
              {activeTab === 'features' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'specs' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              Technical Specifications
              {activeTab === 'specs' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'reviews' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              Customer Reviews ({product.reviews.length})
              {activeTab === 'reviews' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
              )}
            </button>
          </div>

          <div className="pt-4 text-xs sm:text-sm text-slate-300">
            {activeTab === 'features' && (
              <div className="space-y-3">
                <p className="leading-relaxed">{product.description}</p>
                <div className="space-y-1.5 mt-2">
                  <span className="font-bold text-white block text-xs uppercase tracking-wider">
                    Highlighted Features:
                  </span>
                  {product.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex justify-between">
                    <span className="text-slate-400">{key}</span>
                    <span className="font-semibold text-white">{val}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-3">
                {product.reviews.map(rev => (
                  <div key={rev.id} className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-xs">{rev.userName}</span>
                        <span className="text-[10px] text-slate-500">({rev.userCountry})</span>
                        {rev.verifiedPurchase && (
                          <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/20 font-medium">
                            Verified Outlet Buyer
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500">{rev.date}</span>
                    </div>

                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < rev.rating ? 'fill-amber-400' : 'text-slate-700'}`}
                        />
                      ))}
                    </div>

                    <h4 className="font-semibold text-xs text-slate-200">{rev.title}</h4>
                    <p className="text-xs text-slate-400">{rev.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
