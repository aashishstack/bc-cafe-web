"use client";

import * as React from "react";
import { Gift, Copy, Check, Info } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Shell";
import { CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_OFFERS } from "@/lib/mock/menu";
import { toast } from "sonner";
import { BlurText } from "@/components/ui/BlurText";
import { motion } from "framer-motion";

export default function OffersPage() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast.success(`Coupon code ${code} copied!`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-bg-primary pt-28 pb-16 relative overflow-hidden">
        <Container>
          {/* Header */}
          <div className="space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bg-secondary border border-border-default">
              <Gift className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-sans">
                Rewards Program
              </span>
            </div>
            
            <div className="space-y-1 select-none">
              <BlurText 
                text="Exclusive" 
                delay={80} 
                animateBy="words" 
                direction="top" 
                className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary tracking-tight" 
              />
              <BlurText 
                text="Offers" 
                delay={120} 
                animateBy="words" 
                direction="bottom" 
                className="font-display font-light italic text-accent text-4xl sm:text-5xl tracking-tight" 
              />
            </div>
            
            <p className="text-text-secondary text-sm sm:text-base max-w-xl font-sans leading-relaxed">
              Enjoy custom savings on our organic roasts and gourmet handcrafted menu. Apply codes at checkout.
            </p>
          </div>

          {/* Offers list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {MOCK_OFFERS.map((offer, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={offer.id} 
                className="relative border-editorial bg-surface flex flex-col justify-between p-6 sm:p-8 rounded-none hover:border-accent transition-colors duration-300"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <Badge variant="primary" className="px-3 py-1 text-[9px] font-bold uppercase rounded-none tracking-widest">
                      {offer.badge}
                    </Badge>
                    <span className="text-xs text-text-muted flex items-center gap-1.5 font-sans font-medium">
                      <Info className="h-3.5 w-3.5 text-accent" />
                      Limited Time
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-text-primary font-display">
                      {offer.title}
                    </CardTitle>
                    <CardDescription className="text-text-secondary leading-relaxed font-sans text-sm">
                      {offer.description}
                    </CardDescription>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-border-default/45 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted font-sans">Promo Code</span>
                    <span className="font-mono text-base font-extrabold text-accent">{offer.code}</span>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => copyToClipboard(offer.code, offer.id)}
                    className="gap-2"
                  >
                    {copiedId === offer.id ? (
                      <>
                        <Check className="h-4 w-4 text-success" />
                        <span className="text-success">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
