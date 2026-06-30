"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-bg-primary pt-32 pb-16 overflow-hidden">
      {/* Decorative vertical editorial line */}
      <div className="absolute right-[40%] top-0 bottom-0 w-[0.75px] bg-border-default/40 hidden lg:block" />

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Asymmetric Header Block */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-sans">
                BC Café — Anna Nagar
              </span>
              <span className="h-[0.75px] w-8 bg-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted font-sans">
                Version 2.0 (PRD)
              </span>
            </motion.div>

            {/* Editorial Title Block */}
            <div className="space-y-4 max-w-4xl select-none">
              <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight text-text-primary">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Brew Better.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="block italic font-light text-accent text-5xl sm:text-7xl lg:text-8xl mt-2 pl-4 sm:pl-10"
                >
                  Fuel Your Day.
                </motion.span>
              </h1>
            </div>

            {/* Asymmetric Description & CTA Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-border-default/40 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-7 space-y-4"
              >
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans">
                  We blend high-contrast digital elegance with organic, artisan dining. Serving fresh batch-roasted Arabica, handcrafted smash burgers, and sweet cream bomb pastries in a minimal brutalist space.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-5 flex flex-col gap-4 justify-start pt-2"
              >
                <Link href="/menu" className="w-full">
                  <Button variant="primary" className="w-full justify-between h-12">
                    <span>Order Online</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/menu" className="w-full">
                  <Button variant="secondary" className="w-full h-12">
                    Explore Menu
                  </Button>
                </Link>
              </motion.div>
            </div>

          </div>

          {/* Asymmetric Offset Cover Image Block */}
          <div className="lg:col-span-4 flex justify-end pt-12 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[340px] border-editorial bg-surface p-4 space-y-4"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] bg-bg-secondary overflow-hidden">
                <Image
                  src="/hero/cappuccino.png"
                  alt="BC Premium Cappuccino"
                  fill
                  className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                  sizes="340px"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="flex justify-between items-start pt-2">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-base text-text-primary">Artisan Latte Art</h4>
                  <p className="text-xs text-text-muted font-sans">Single-origin roast, fresh daily</p>
                </div>
                <div className="flex items-center gap-1 text-accent text-xs font-bold font-sans">
                  <Star className="h-3.5 w-3.5 fill-accent" />
                  <span>4.9</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Editorial Page Info Bottom bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full border-t border-border-default/40 pt-8 mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-text-muted font-sans">
          <div className="flex gap-8">
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Open 8AM — 12AM</span>
            <span>Chennai Lounge</span>
          </div>
          <span>&copy; {new Date().getFullYear()} BC Café. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}
