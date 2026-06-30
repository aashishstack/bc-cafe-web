"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, Clock, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/useCartStore";
import { MOCK_MENU } from "@/lib/mock/menu";

export function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    setDrawerOpen,
    updateQuantity,
    removeItem,
    getTotalPrice,
    addItem,
  } = useCartStore();

  const subtotal = getTotalPrice();
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const total = subtotal + tax;

  // Cross-sell items: grab items from MOCK_MENU that are NOT currently in the cart
  const crossSells = MOCK_MENU.filter(
    (menuItem) => !items.some((cartItem) => cartItem.item.id === menuItem.id)
  ).slice(0, 2);

  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    if (isDrawerOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Disable scroll when cart is open
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen, setDrawerOpen]);

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 bg-black z-50 cursor-pointer"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-bg-secondary border-l border-border-default z-50 flex flex-col justify-between shadow-large text-text-primary"
          >
            {/* Header */}
            <div className="p-6 border-b border-border-default/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-accent" />
                <h2 className="font-display font-extrabold text-xl">Your Order</h2>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="h-11 w-11 rounded-xl glass border border-border-default/60 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 active:scale-95 transition-all cursor-pointer"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Scrollable Items Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Delivery Speed estimation */}
              {items.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-surface border border-border-default/50 flex items-center gap-3 text-sm">
                  <div className="h-9 w-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Ready for pickup in 12-15 mins</p>
                    <p className="text-xs text-text-muted">Fast pickup from Anna Nagar branch</p>
                  </div>
                </div>
              )}

              {/* Items List */}
              {items.length === 0 ? (
                /* Empty State */
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                  <div className="h-16 w-16 rounded-full bg-surface border border-border-default/50 flex items-center justify-center text-text-muted">
                    <ShoppingCart className="h-8 w-8" />
                  </div>
                  <div className="space-y-1 max-w-xs">
                    <h3 className="font-display font-semibold text-lg text-text-primary">Your cart is empty</h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      Add some handcrafted coffee or burgers to start your order.
                    </p>
                  </div>
                  <Button onClick={() => setDrawerOpen(false)} size="sm">
                    Browse Menu
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((cartItem) => (
                    <div
                      key={cartItem.item.id}
                      className="flex gap-4 p-3 rounded-2xl bg-surface border border-border-default/50 hover:border-border-default transition-colors"
                    >
                      {/* Item Image */}
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-bg-secondary shrink-0 border border-border-default/40">
                        <Image
                          src={cartItem.item.image}
                          alt={cartItem.item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Item Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-semibold text-sm text-text-primary">
                            {cartItem.item.title}
                          </h4>
                          <span className="font-mono text-sm font-semibold text-text-primary">
                            ₹{cartItem.item.price * cartItem.quantity}
                          </span>
                        </div>

                        {/* Item actions */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center border border-border-default/60 rounded-xl bg-bg-secondary p-1">
                            <button
                              onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                              className="h-6 w-6 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:bg-surface active:scale-90 transition-all cursor-pointer"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-xs font-semibold text-text-primary">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                              className="h-6 w-6 rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:bg-surface active:scale-90 transition-all cursor-pointer"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(cartItem.item.id)}
                            className="text-text-muted hover:text-danger p-1 transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Cross Sells (Frequently Bought Together) */}
              {items.length > 0 && crossSells.length > 0 && (
                <div className="pt-4 border-t border-border-default/40 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    Frequently Bought Together
                  </h4>
                  <div className="space-y-2">
                    {crossSells.map((crossItem) => (
                      <div
                        key={crossItem.id}
                        className="flex items-center justify-between p-2.5 rounded-2xl bg-surface/50 border border-border-default/30 text-sm hover:border-accent/25 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-bg-secondary border border-border-default/40">
                            <Image
                              src={crossItem.image}
                              alt={crossItem.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-text-primary text-xs">{crossItem.title}</p>
                            <p className="text-[10px] text-text-muted">₹{crossItem.price}</p>
                          </div>
                        </div>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => addItem(crossItem)}
                          className="h-8 rounded-lg text-xs px-3"
                        >
                          Add
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Summary Total & Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border-default bg-surface/85 backdrop-blur-md space-y-4">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span className="font-mono">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-text-secondary">
                    <span>GST (5%)</span>
                    <span className="font-mono">₹{tax}</span>
                  </div>
                  <div className="flex justify-between text-text-primary font-bold text-base pt-2 border-t border-border-default/45">
                    <span>Total Amount</span>
                    <span className="font-mono text-accent">₹{total}</span>
                  </div>
                </div>

                <Link href="/checkout" onClick={() => setDrawerOpen(false)} className="block w-full">
                  <Button className="w-full h-12 text-sm font-bold gap-2 group shadow-glow" size="lg">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
