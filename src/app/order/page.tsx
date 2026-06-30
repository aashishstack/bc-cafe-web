"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Clock, ShoppingBag, Receipt, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Shell";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const steps = [
  { id: "received", label: "Order Received", desc: "Our store has verified your payment and accepted the order." },
  { id: "preparing", label: "Preparing", desc: "Chefs are brewing your coffee and grilling your burger." },
  { id: "ready", label: "Ready for Pickup", desc: "Your food and beverage is packed and ready to go." },
  { id: "completed", label: "Completed", desc: "Order picked up successfully by customer." }
];

export default function OrderSuccessPage() {
  const [currentStepIdx, setCurrentStepIdx] = React.useState(0);
  const [customerName, setCustomerName] = React.useState("");
  const [orderType, setOrderType] = React.useState("");
  const [orderTotal, setOrderTotal] = React.useState("");
  const [orderItems, setOrderItems] = React.useState<any[]>([]);
  const [orderId, setOrderId] = React.useState("");

  React.useEffect(() => {
    // Generate order ID
    setOrderId("BC-" + Math.floor(100000 + Math.random() * 900000));
    
    // Retrieve checkout logs from sessionStorage
    setCustomerName(sessionStorage.getItem("customerName") || "Valued Guest");
    setOrderType(sessionStorage.getItem("orderType") || "pickup");
    setOrderTotal(sessionStorage.getItem("orderTotal") || "0");
    try {
      setOrderItems(JSON.parse(sessionStorage.getItem("orderItems") || "[]"));
    } catch (e) {
      setOrderItems([]);
    }

    // Auto-advance order statuses for mock live tracking simulation
    const interval = setInterval(() => {
      setCurrentStepIdx((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 15000); // Advancing status index every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-bg-primary pt-28 pb-16 relative overflow-hidden">
        
        {/* Glow halo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none z-0" />

        <Container className="z-10 relative">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-6 mb-12">
            
            {/* Animated Checkmark Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="h-16 w-16 bg-accent rounded-full mx-auto flex items-center justify-center text-bg-primary shadow-glow"
            >
              <Check className="h-8 w-8 stroke-[3.5]" />
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display font-black text-4xl text-text-primary tracking-tight"
              >
                Order Confirmed!
              </motion.h1>
              <p className="text-text-secondary text-sm">
                Thank you for ordering, {customerName}! Your order has been dispatched to the kitchen.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3 rounded-2xl glass border border-border-default/60 text-xs">
              <div>
                <span className="text-text-muted">Order ID</span>
                <p className="font-mono font-bold text-accent mt-0.5">{orderId}</p>
              </div>
              <div className="h-6 w-px bg-border-default" />
              <div>
                <span className="text-text-muted">Type</span>
                <p className="font-bold text-text-primary capitalize mt-0.5">{orderType}</p>
              </div>
              <div className="h-6 w-px bg-border-default" />
              <div>
                <span className="text-text-muted">Time Estimate</span>
                <p className="font-bold text-text-primary mt-0.5">12-15 mins</p>
              </div>
            </div>
          </div>

          {/* Details Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Live Progress Timeline */}
            <div className="lg:col-span-7">
              <Card className="bg-surface border-border-default/50">
                <CardHeader className="border-b border-border-default/45 pb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4.5 w-4.5 text-accent animate-pulse" />
                    <CardTitle className="text-lg font-bold text-text-primary font-display">Live Order Tracking</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="relative pl-8 space-y-8">
                    
                    {/* Progress Connecting Line */}
                    <div className="absolute top-3 bottom-3 left-3 w-[2px] bg-border-default/70">
                      <motion.div
                        className="w-full bg-accent origin-top"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: currentStepIdx / (steps.length - 1) }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>

                    {/* Steps Map */}
                    {steps.map((step, idx) => {
                      const isCompleted = idx < currentStepIdx;
                      const isActive = idx === currentStepIdx;
                      const isUpcoming = idx > currentStepIdx;

                      return (
                        <div key={step.id} className="relative flex flex-col items-start text-sm">
                          
                          {/* Circle Icon */}
                          <div className={`absolute -left-8 top-1 h-6.5 w-6.5 rounded-full flex items-center justify-center border z-10 transition-all duration-300 ${isCompleted ? "bg-accent border-accent text-bg-primary" : isActive ? "bg-bg-secondary border-accent text-accent shadow-[0_0_12px_rgba(57,255,20,0.3)] animate-pulse" : "bg-bg-secondary border-border-default text-text-disabled"}`}>
                            {isCompleted ? (
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                            ) : (
                              <span className="text-[10px] font-bold">{idx + 1}</span>
                            )}
                          </div>

                          <div className="pl-2.5">
                            <h3 className={`font-semibold text-base transition-colors ${isActive ? "text-accent" : isUpcoming ? "text-text-disabled" : "text-text-primary"}`}>
                              {step.label}
                            </h3>
                            <p className={`text-xs mt-1 transition-colors leading-relaxed ${isUpcoming ? "text-text-disabled/70" : "text-text-muted"}`}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}

                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Receipt summary */}
            <div className="lg:col-span-5">
              <Card className="bg-surface border-border-default/50">
                <CardHeader className="border-b border-border-default/45 pb-4">
                  <div className="flex items-center gap-2">
                    <Receipt className="h-4.5 w-4.5 text-accent" />
                    <CardTitle className="text-lg font-bold text-text-primary font-display">Receipt Details</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    {orderItems.map((cartItem) => (
                      <div key={cartItem.item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-text-secondary font-semibold text-xs">{cartItem.quantity}x</span>
                          <span className="text-text-muted">{cartItem.item.title}</span>
                        </div>
                        <span className="font-mono text-text-secondary">₹{cartItem.item.price * cartItem.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border-default/45 space-y-2 text-sm">
                    <div className="flex justify-between text-text-primary font-bold text-base pt-2 border-t border-border-default/40">
                      <span>Total Paid</span>
                      <span className="font-mono text-accent">₹{orderTotal}</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/menu">
                      <Button variant="secondary" className="w-full gap-2 group">
                        <ShoppingBag className="h-4 w-4" />
                        <span>Order Something Else</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
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
