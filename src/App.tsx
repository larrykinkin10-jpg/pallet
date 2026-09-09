import React, { useState } from 'react';
import { Currency, Product, CartItem, ShopOrder, ProductVariant } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedCarousel } from './components/FeaturedCarousel';
import { ValueProps } from './components/ValueProps';
import { CatalogView } from './components/CatalogView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { TrackOrderModal } from './components/TrackOrderModal';
import { Footer } from './components/Footer';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function App() {
  // Navigation & View
  const [currentView, setCurrentView] = useState<'home' | 'catalog'>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Global Currency State (EUR / GBP)
  const [currency, setCurrency] = useState<Currency>('EUR');

  // Product Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Shopping Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 } // Pre-seed with Sony WH-1000XM5
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Wishlist State
  const [wishlistIds, setWishlistIds] = useState<string[]>([PRODUCTS[1].id]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Promo Coupon State
  const [couponCode, setCouponCode] = useState<string>('');
  const [appliedDiscountEur, setAppliedDiscountEur] = useState<number>(0);

  // Checkout & Order State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderConfirmedOpen, setIsOrderConfirmedOpen] = useState(false);
  const [latestOrder, setLatestOrder] = useState<ShopOrder | null>(null);
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);

  // Orders History
  const [orders, setOrders] = useState<ShopOrder[]>([
    {
      id: 'ORD-894102',
      orderNumber: 'EPL-ORD-894102',
      date: '2026-03-08',
      items: [{ product: PRODUCTS[1], quantity: 1 }],
      subtotalEur: 279,
      discountEur: 0,
      shippingEur: 0,
      shippingMethod: {
        id: 'standard',
        name: 'Standard EU Tracked Delivery',
        carrier: 'DPD Europe',
        transitTime: '3-4 Business Days',
        priceEur: 0,
        freeThresholdEur: 50
      },
      vatEur: 48.42,
      totalEur: 279,
      paymentMethod: 'card',
      customer: {
        fullName: 'Alexander Weber',
        email: 'alex.weber@example.de',
        phone: '+49 211 9840 210',
        street: 'Industriestraße 45',
        city: 'Düsseldorf',
        postalCode: '40213',
        country: 'Germany'
      },
      status: 'Packing in Venlo',
      trackingNumber: 'DPD-EU-48192049',
      carrier: 'DPD Europe',
      estimatedDelivery: '3-4 Business Days'
    }
  ]);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Coupon handling
  const handleApplyCoupon = (code: string): boolean => {
    const cleanCode = code.toUpperCase();
    const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    if (cleanCode === 'OUTLET10') {
      const discount = Math.round(subtotal * 0.10 * 100) / 100;
      setCouponCode('OUTLET10');
      setAppliedDiscountEur(discount);
      showToast('Promo code OUTLET10 applied: 10% discount added!');
      return true;
    } else if (cleanCode === 'SAVE20') {
      const discount = Math.min(20, subtotal);
      setCouponCode('SAVE20');
      setAppliedDiscountEur(discount);
      showToast('Promo code SAVE20 applied: €20 discount added!');
      return true;
    } else if (cleanCode === 'WELCOME5') {
      const discount = Math.min(5, subtotal);
      setCouponCode('WELCOME5');
      setAppliedDiscountEur(discount);
      showToast('Promo code WELCOME5 applied: €5 discount added!');
      return true;
    }
    return false;
  };

  const handleRemoveCoupon = () => {
    setCouponCode('');
    setAppliedDiscountEur(0);
    showToast('Promo coupon removed.');
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1, variant?: ProductVariant) => {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.product.id === product.id && item.selectedVariant?.id === variant?.id
      );
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.selectedVariant?.id === variant?.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedVariant: variant }];
    });

    showToast(`Added ${quantity}x "${product.title}" to your cart.`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number, variantId?: string) => {
    if (quantity <= 0) {
      handleRemoveItem(productId, variantId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId && item.selectedVariant?.id === variantId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, variantId?: string) => {
    setCartItems(prev =>
      prev.filter(item => !(item.product.id === productId && item.selectedVariant?.id === variantId))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // 1-Click Buy Now
  const handleBuyNow = (product: Product, quantity = 1, variant?: ProductVariant) => {
    const existing = cartItems.find(
      item => item.product.id === product.id && item.selectedVariant?.id === variant?.id
    );
    if (!existing) {
      setCartItems(prev => [...prev, { product, quantity, selectedVariant: variant }]);
    }
    setIsDetailModalOpen(false);
    setIsCheckoutOpen(true);
  };

  // Wishlist toggle
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds(prev => {
      if (prev.includes(productId)) {
        showToast('Item removed from your wishlist.');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Item saved to your wishlist!');
        return [...prev, productId];
      }
    });
  };

  // View product detail
  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailModalOpen(true);
  };

  // Category navigation
  const handleSelectCategory = (categoryId: string) => {
    if (categoryId === 'all') {
      setSelectedCategoryId(null);
    } else {
      setSelectedCategoryId(categoryId);
    }
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Order completion
  const handleOrderCompleted = (order: ShopOrder) => {
    setOrders(prev => [order, ...prev]);
    setLatestOrder(order);
    setCartItems([]);
    setCouponCode('');
    setAppliedDiscountEur(0);
    setIsOrderConfirmedOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950 font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 border border-emerald-500/50 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        currency={currency}
        onToggleCurrency={() => setCurrency(prev => prev === 'EUR' ? 'GBP' : 'EUR')}
        cartItems={cartItems}
        wishlistIds={wishlistIds}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
        onSelectProduct={handleViewProduct}
        onSelectCategory={handleSelectCategory}
        selectedCategoryId={selectedCategoryId}
        onNavigateHome={() => {
          setSelectedCategoryId(null);
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateCatalog={() => {
          setCurrentView('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <div>
            {/* Retail Hero with Deal of the Day */}
            <Hero
              currency={currency}
              onExploreCatalog={() => {
                setCurrentView('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onViewProduct={handleViewProduct}
              onSelectCategory={handleSelectCategory}
            />

            {/* Department Categories Grid */}
            <CategoryGrid
              onSelectCategory={handleSelectCategory}
              selectedCategoryId={selectedCategoryId}
            />

            {/* Featured Outlet Deals Carousel */}
            <FeaturedCarousel
              currency={currency}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              onViewDetails={handleViewProduct}
              onViewAll={() => {
                setCurrentView('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Consumer Trust Pillars */}
            <ValueProps />
          </div>
        ) : (
          /* Catalog View */
          <CatalogView
            currency={currency}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={(catId) => {
              if (catId === 'all') setSelectedCategoryId(null);
              else setSelectedCategoryId(catId);
            }}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onViewDetails={handleViewProduct}
          />
        )}
      </main>

      {/* Store Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenTrackOrder={() => setIsTrackOrderOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        currency={currency}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        currency={currency}
        couponCode={couponCode}
        appliedDiscountEur={appliedDiscountEur}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        onViewProduct={handleViewProduct}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        currency={currency}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToCart={(p) => handleAddToCart(p, 1)}
        onViewProduct={handleViewProduct}
      />

      {/* Express Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        currency={currency}
        couponCode={couponCode}
        appliedDiscountEur={appliedDiscountEur}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Order Confirmation Screen */}
      <OrderConfirmationModal
        order={latestOrder}
        isOpen={isOrderConfirmedOpen}
        onClose={() => setIsOrderConfirmedOpen(false)}
        currency={currency}
        onContinueShopping={() => {
          setCurrentView('catalog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Track My Order Modal */}
      <TrackOrderModal
        isOpen={isTrackOrderOpen}
        onClose={() => setIsTrackOrderOpen(false)}
        orders={orders}
        currency={currency}
      />

    </div>
  );
}
