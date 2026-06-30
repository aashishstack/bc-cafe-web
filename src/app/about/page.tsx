"use client";

import * as React from "react";
import { Coffee, ShieldCheck, Heart, Users } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Shell";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BlurText } from "@/components/ui/BlurText";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-bg-primary pt-28 pb-16 relative overflow-hidden">
        <Container className="space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bg-secondary border border-border-default">
              <Users className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-sans">
                Our Story
              </span>
            </div>
            
            <div className="space-y-1 select-none">
              <BlurText 
                text="About BC" 
                delay={80} 
                animateBy="words" 
                direction="top" 
                className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary tracking-tight" 
              />
              <BlurText 
                text="Café" 
                delay={120} 
                animateBy="words" 
                direction="bottom" 
                className="font-display font-light italic text-accent text-4xl sm:text-5xl tracking-tight" 
              />
            </div>
            
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-sans mt-4">
              We started with a simple vision: to bridge the gap between specialty roasts and gourmet handcrafted dining, served in a space that feels as clean and premium as a print design magazine.
            </p>
          </div>

          {/* Detailed Paragraph Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6 flex flex-col justify-center">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
                A Modern Lifestyle Brand
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                BC Café is not just a coffee shop—it is a community hub for creators, builders, and coffee aficionados. We select only the highest grade single-origin Arabica beans, roasted in small batches to preserve their delicate profiles.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                Our dining menu is curated by culinary professionals. From our Double Smash Burgers to our Decadent Cream Bomb pastries, we emphasize freshness, quality, and locally-sourced ingredients.
              </p>
            </div>
            
            {/* Visual Block with abstract grid */}
            <div className="h-[280px] sm:h-[350px] border-editorial bg-surface relative flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="h-14 w-14 bg-text-primary text-bg-primary flex items-center justify-center border border-text-primary transition-transform duration-500 group-hover:scale-105 rounded-none">
                  <Coffee className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-text-primary text-lg">Brewing Daily</h3>
                <p className="text-xs text-text-secondary max-w-xs leading-relaxed font-sans">
                  Join us at our Anna Nagar lounge. High-speed Wi-Fi, ambient music, and single-origin coffee.
                </p>
              </div>
            </div>
          </div>

          {/* Brand Values */}
          <div className="space-y-8 pt-8 border-t border-border-default/45">
            <h2 className="font-display text-2xl font-bold text-text-primary text-center">
              Our Core Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              
              {/* Value 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface border-editorial p-6 flex flex-col gap-4 rounded-none hover:border-accent transition-colors duration-300"
              >
                <div className="h-10 w-10 bg-bg-secondary border border-border-default flex items-center justify-center text-text-primary rounded-none">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-text-primary font-display">Specialty Quality</h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans">
                    From roasting to assembly, we maintain rigorous standards. We work directly with farmers to source top-tier ingredients.
                  </p>
                </div>
              </motion.div>

              {/* Value 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface border-editorial p-6 flex flex-col gap-4 rounded-none hover:border-accent transition-colors duration-300"
              >
                <div className="h-10 w-10 bg-bg-secondary border border-border-default flex items-center justify-center text-text-primary rounded-none">
                  <Coffee className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-text-primary font-display">Technology First</h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans">
                    Our checkout and online portal are built for developers and builders. Fast queues, contactless pickup, and instant status updates.
                  </p>
                </div>
              </motion.div>

              {/* Value 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface border-editorial p-6 flex flex-col gap-4 rounded-none hover:border-accent transition-colors duration-300"
              >
                <div className="h-10 w-10 bg-bg-secondary border border-border-default flex items-center justify-center text-text-primary rounded-none">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-text-primary font-display">Community Rooted</h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-sans">
                    We host weekly meetups, builder hours, and creative coffee workshops. BC Café is designed to support the local neighborhood.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
