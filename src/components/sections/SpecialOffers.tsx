"use client";

import * as React from "react";
import { Gift, Copy, Check } from "lucide-react";
import { Container, Section, Grid } from "@/components/layout/Shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_OFFERS } from "@/lib/mock/menu";
import { toast } from "sonner";
import { BlurText } from "@/components/ui/BlurText";
import { motion } from "framer-motion";

export function SpecialOffers() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    toast.success(`Coupon code ${code} copied!`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <Section className="bg-bg-secondary relative overflow-hidden" id="offers">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bg-primary border border-border-default">
            <Gift className="h-3.5 w-3.5 text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-sans">
              Exclusive Promos
            </span>
          </div>
          <BlurText 
            text="Today's Special Offers" 
            delay={80} 
            animateBy="words" 
            direction="top" 
            className="font-display text-4xl sm:text-5xl font-black text-text-primary tracking-tight" 
          />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-sans">
            Grab these limited-time deals on your favorite brews and premium burgers before they expire.
          </p>
        </div>

        {/* Offers Editorial Split List */}
        <Grid cols={2} className="max-w-5xl mx-auto gap-8">
          {MOCK_OFFERS.map((offer, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={offer.id} 
              className="relative border-editorial bg-surface p-6 sm:p-8 flex flex-col justify-between rounded-none hover:border-accent transition-colors duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Badge variant="primary" className="px-3 py-1 text-[9px] font-bold uppercase rounded-none tracking-widest">
                    {offer.badge}
                  </Badge>
                  <span className="font-display font-light italic text-accent/50 text-2xl">
                    OFFER {idx + 1}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-sans leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-8 flex items-center justify-between border-t border-border-default/45">
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
        </Grid>
      </Container>
    </Section>
  );
}
