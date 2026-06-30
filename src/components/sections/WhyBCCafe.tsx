"use client";

import { Coffee, Flame, ShieldCheck, Zap } from "lucide-react";
import { Container, Section } from "@/components/layout/Shell";
import { BlurText } from "@/components/ui/BlurText";
import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    icon: Coffee,
    title: "100% Specialty Arabica Roasts",
    description: "Ethically sourced, high-grade specialty beans roasted in-house daily for the richest aroma.",
  },
  {
    num: "02",
    icon: Flame,
    title: "Fresh Handcrafted Dining",
    description: "Every burger, sauce, and dessert is made fresh to order by certified culinary chefs.",
  },
  {
    num: "03",
    numAlt: "03",
    icon: ShieldCheck,
    title: "Premium Local Ingredients",
    description: "No compromises. Organic dairy, fresh greens, and hormone-free premium meats only.",
  },
  {
    num: "04",
    icon: Zap,
    title: "Lightning Fast Web Order Flow",
    description: "Order through our web portal for instant queue-skips, rapid pickups, and fresh deliveries.",
  },
];

export function WhyBCCafe() {
  return (
    <Section className="bg-bg-primary relative overflow-hidden" id="why-bc">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Summary */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-[120px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bg-secondary border border-border-default/80">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-sans">
                The BC Standard
              </span>
            </div>
            
            <BlurText 
              text="Why BC Café?" 
              delay={80} 
              animateBy="words" 
              direction="top" 
              className="font-display text-4xl sm:text-5xl font-black text-text-primary tracking-tight" 
            />
            
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-sans max-w-md">
              We merge cutting-edge web technology, premium aesthetic styling, and elite-grade dining into one seamless experience. No shortcuts, no compromises.
            </p>
          </div>

          {/* Right Column: Numbered List Block */}
          <div className="lg:col-span-7 border-editorial bg-surface p-6 sm:p-10 divide-y divide-border-default/50">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  key={idx} 
                  className={`flex gap-6 items-start ${idx === 0 ? "pb-8" : "py-8 last:pb-0"}`}
                >
                  {/* Big Editorial Number */}
                  <span className="font-display font-light italic text-accent text-3xl sm:text-4xl shrink-0 leading-none">
                    {item.num}
                  </span>
                  
                  {/* Copy Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4.5 w-4.5 text-text-primary shrink-0" />
                      <h3 className="font-display font-bold text-lg text-text-primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}
