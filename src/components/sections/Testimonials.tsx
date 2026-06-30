"use client";

import { Star, MessageSquare } from "lucide-react";
import { Container, Section, Grid } from "@/components/layout/Shell";
import { MOCK_TESTIMONIALS } from "@/lib/mock/menu";
import { BlurText } from "@/components/ui/BlurText";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <Section className="bg-bg-primary relative overflow-hidden" id="testimonials">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bg-secondary border border-border-default">
            <MessageSquare className="h-3.5 w-3.5 text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-sans">
              Guest Feedback
            </span>
          </div>
          <BlurText 
            text="Loved By Our Community" 
            delay={80} 
            animateBy="words" 
            direction="top" 
            className="font-display text-4xl sm:text-5xl font-black text-text-primary tracking-tight" 
          />
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-sans">
            See what our guests are saying about the brews, the bites, and the modern experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <Grid cols={3} className="gap-8">
          {MOCK_TESTIMONIALS.map((t, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={t.id} 
              className="bg-surface border-editorial p-6 sm:p-8 flex flex-col justify-between h-full rounded-none hover:border-accent transition-colors duration-300"
            >
              <div className="space-y-6">
                <div className="flex gap-1 text-accent">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <p className="font-display italic text-base text-text-primary leading-relaxed">
                  "{t.comment}"
                </p>
              </div>
              
              <div className="pt-5 mt-6 border-t border-border-default/45 flex items-center gap-3">
                <div className="h-10 w-10 bg-bg-secondary border border-border-default flex items-center justify-center font-display font-black text-accent text-sm">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-text-primary">
                    {t.name}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted font-sans">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
