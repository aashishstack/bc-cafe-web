"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section } from "@/components/layout/Shell";
import { ProductCard } from "@/components/cards/ProductCard";
import { MOCK_MENU, CATEGORIES } from "@/lib/mock/menu";
import { cn } from "@/lib/utils";
import { BlurText } from "@/components/ui/BlurText";

export function FeaturedMenu() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems = selectedCategory === "All"
    ? MOCK_MENU
    : MOCK_MENU.filter(item => item.category === selectedCategory);

  return (
    <Section className="bg-bg-secondary relative overflow-hidden" id="featured-menu">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <BlurText 
            text="Featured Masterpieces" 
            delay={80} 
            animateBy="words" 
            direction="top" 
            className="font-display text-4xl sm:text-5xl font-black text-text-primary tracking-tight" 
          />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-sans">
            Savor our hand-selected favorites, crafted using pure organic ingredients and high-grade roasts.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-16 border-b border-border-default/45 pb-4 max-w-xl mx-auto">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "pb-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer border-b-2",
                selectedCategory === category
                  ? "border-accent text-accent"
                  : "border-transparent text-text-secondary hover:text-text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Asymmetric Staggered Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              // Apply staggered vertical offsets to column layouts for editorial print feeling
              const staggerClass = idx % 3 === 1 
                ? "lg:mt-8" 
                : idx % 3 === 2 
                  ? "lg:mt-16" 
                  : "";
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  key={item.id}
                  className={cn("h-full", staggerClass)}
                >
                  <ProductCard item={item} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
