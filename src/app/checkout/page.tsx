"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CreditCard, ShoppingCart, User, MapPin, Clock, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Shell";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/lib/store/useCartStore";
import { toast } from "sonner";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [isProcessing, setIsProcessing] = React.useState(false);

  // Form States
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pref, setPref] = React.useState<"pickup" | "dine-in">("pickup");
  const [pickupTime, setPickupTime] = React.useState("asap");

  const subtotal = getTotalPrice();
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  React.useEffect(() => {
    // Redirect if cart is empty
    if (items.length === 0 && !isProcessing) {
      toast.error("Your cart is empty. Redirecting to menu...");
      router.push("/menu");
    }
  }, [items, router, isProcessing]);

  const handleNextStep = () => {
    if (step === 1) {
      if (!name.trim() || !phone.trim() || !email.trim()) {
        toast.error("Please fill in all customer details.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePaymentSubmit = () => {
    setIsProcessing(true);
    toast.info("Processing secure mock payment...");

    // Simulated payment processing (the only spinner permitted in PRD)
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment completed successfully!");
      // Save details to sessionStorage to show on order page
      sessionStorage.setItem("customerName", name);
      sessionStorage.setItem("orderType", pref);
      sessionStorage.setItem("orderTotal", total.toString());
      sessionStorage.setItem("orderItems", JSON.stringify(items));
      
      // Clear the Zustand shopping cart
      clearCart();
      
      // Redirect to Order Confirmation/Tracking page
      router.push("/order");
    }, 3000);
  };

  if (items.length === 0 && !isProcessing) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-bg-primary pt-28 pb-16">
        <Container>
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/menu"
              className="h-11 w-11 rounded-xl glass border border-border-default/60 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/40 active:scale-95 transition-all"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="font-display font-extrabold text-3xl text-text-primary tracking-tight">
              Checkout
            </h1>
          </div>

          {/* Stepper Indicator */}
          <div className="flex items-center justify-center max-w-lg mx-auto mb-12 gap-2 text-sm font-semibold">
            <div className={`flex items-center gap-2 ${step >= 1 ? "text-accent" : "text-text-disabled"}`}>
              <span className={`h-6 w-6 rounded-full flex items-center justify-center border ${step >= 1 ? "border-accent bg-accent/10" : "border-border-default bg-surface"}`}>1</span>
              <span>Details</span>
            </div>
            <div className={`h-px w-12 bg-border-default ${step >= 2 ? "bg-accent" : ""}`} />
            <div className={`flex items-center gap-2 ${step >= 2 ? "text-accent" : "text-text-disabled"}`}>
              <span className={`h-6 w-6 rounded-full flex items-center justify-center border ${step >= 2 ? "border-accent bg-accent/10" : "border-border-default bg-surface"}`}>2</span>
              <span>Dining</span>
            </div>
            <div className={`h-px w-12 bg-border-default ${step >= 3 ? "bg-accent" : ""}`} />
            <div className={`flex items-center gap-2 ${step >= 3 ? "text-accent" : "text-text-disabled"}`}>
              <span className={`h-6 w-6 rounded-full flex items-center justify-center border ${step >= 3 ? "border-accent bg-accent/10" : "border-border-default bg-surface"}`}>3</span>
              <span>Payment</span>
            </div>
          </div>

          {/* Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Steps */}
            <div className="lg:col-span-7">
              <Card className="bg-surface border-border-default/50">
                <CardContent className="pt-6 space-y-6">
                  
                  {/* STEP 1: Details */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-border-default/40 pb-3">
                        <User className="h-5 w-5 text-accent" />
                        <h2 className="font-display font-bold text-lg text-text-primary">Customer Information</h2>
                      </div>
                      
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-text-secondary">Full Name</label>
                        <Input
                          id="name"
                          placeholder="Aravind Swamy"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold text-text-secondary">Mobile Number</label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-text-secondary">Email Address</label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="aravind@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <Button onClick={handleNextStep} className="w-full mt-6">
                        Continue to Dining
                      </Button>
                    </div>
                  )}

                  {/* STEP 2: Dining */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-border-default/40 pb-3">
                        <MapPin className="h-5 w-5 text-accent" />
                        <h2 className="font-display font-bold text-lg text-text-primary">Dining Preference</h2>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setPref("pickup")}
                          className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${pref === "pickup" ? "bg-accent/10 border-accent text-text-primary" : "border-border-default bg-bg-secondary text-text-secondary hover:border-accent/25"}`}
                        >
                          <h3 className="font-semibold text-sm">Self Pickup</h3>
                          <p className="text-xs text-text-muted mt-1">Ready at Anna Nagar outlet in 15 mins</p>
                        </button>
                        <button
                          onClick={() => setPref("dine-in")}
                          className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${pref === "dine-in" ? "bg-accent/10 border-accent text-text-primary" : "border-border-default bg-bg-secondary text-text-secondary hover:border-accent/25"}`}
                        >
                          <h3 className="font-semibold text-sm">Dine-in</h3>
                          <p className="text-xs text-text-muted mt-1">Pre-order for instant table serving</p>
                        </button>
                      </div>

                      <div className="space-y-1.5 pt-4">
                        <label htmlFor="pickupTime" className="text-xs font-semibold text-text-secondary">Select Time</label>
                        <select
                          id="pickupTime"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full h-11 px-3 py-2 rounded-2xl bg-bg-secondary border border-border-default text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focused cursor-pointer transition-colors"
                        >
                          <option value="asap">As soon as possible (15 mins)</option>
                          <option value="30">In 30 minutes</option>
                          <option value="60">In 1 hour</option>
                          <option value="90">In 1.5 hours</option>
                        </select>
                      </div>

                      <div className="flex gap-4 pt-6">
                        <Button variant="secondary" className="w-1/2" onClick={() => setStep(1)}>
                          Back
                        </Button>
                        <Button className="w-1/2" onClick={handleNextStep}>
                          Proceed to Payment
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Payment */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-border-default/40 pb-3">
                        <CreditCard className="h-5 w-5 text-accent" />
                        <h2 className="font-display font-bold text-lg text-text-primary">Secure Payment Checkout</h2>
                      </div>

                      {isProcessing ? (
                        <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center">
                          {/* Spinner permitted strictly for payments */}
                          <div className="h-10 w-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                          <div>
                            <h3 className="font-semibold text-text-primary text-base">Processing secure transaction</h3>
                            <p className="text-xs text-text-muted mt-1">Connecting with payment gateways, please do not close this page.</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="p-4 rounded-2xl border border-accent/20 bg-accent/5 flex items-center justify-between text-sm">
                            <div>
                              <p className="font-bold text-text-primary">Simulated Razorpay Sandbox</p>
                              <p className="text-xs text-text-muted mt-0.5">Click pay below to simulate a secure mock transaction.</p>
                            </div>
                            <CheckCircle className="h-5 w-5 text-accent" />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-text-secondary">Select Payment Mode</label>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="p-3.5 rounded-xl border border-accent bg-accent/5 flex flex-col items-center gap-1.5 text-center">
                                <CreditCard className="h-5 w-5 text-accent" />
                                <span className="text-[10px] font-bold uppercase text-text-primary">Card / UPI</span>
                              </div>
                              <div className="p-3.5 rounded-xl border border-border-default opacity-50 flex flex-col items-center gap-1.5 text-center">
                                <span className="h-5 font-bold text-sm text-text-muted">Paytm</span>
                                <span className="text-[10px] font-bold uppercase text-text-muted">Wallet</span>
                              </div>
                              <div className="p-3.5 rounded-xl border border-border-default opacity-50 flex flex-col items-center gap-1.5 text-center">
                                <span className="h-5 font-bold text-sm text-text-muted">COD</span>
                                <span className="text-[10px] font-bold uppercase text-text-muted">Cash Counter</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-4 pt-6">
                            <Button variant="secondary" className="w-1/2" onClick={() => setStep(2)}>
                              Back
                            </Button>
                            <Button className="w-1/2" onClick={handlePaymentSubmit}>
                              Pay ₹{total} Now
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                </CardContent>
              </Card>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-5">
              <Card className="bg-surface border-border-default/50 sticky top-24">
                <CardHeader className="border-b border-border-default/40 pb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-4.5 w-4.5 text-accent" />
                    <CardTitle className="text-lg font-bold text-text-primary font-display">Order Summary</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  
                  {/* Items list */}
                  <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2 scrollbar-none">
                    {items.map((cartItem) => (
                      <div key={cartItem.item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-accent font-mono font-bold text-xs">{cartItem.quantity}x</span>
                          <span className="text-text-primary font-semibold">{cartItem.item.title}</span>
                        </div>
                        <span className="font-mono text-text-secondary">₹{cartItem.item.price * cartItem.quantity}</span>
                      </div>
                    ))}
                  </div>

                  {/* Calculations */}
                  <div className="pt-4 border-t border-border-default/45 space-y-2 text-sm">
                    <div className="flex justify-between text-text-secondary">
                      <span>Subtotal</span>
                      <span className="font-mono">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-text-secondary">
                      <span>GST (5%)</span>
                      <span className="font-mono">₹{tax}</span>
                    </div>
                    <div className="flex justify-between text-text-primary font-bold text-base pt-3 border-t border-border-default/45">
                      <span>Total Amount</span>
                      <span className="font-mono text-accent">₹{total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
