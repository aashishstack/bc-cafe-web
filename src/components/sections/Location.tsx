"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container, Section } from "@/components/layout/Shell";
import { BlurText } from "@/components/ui/BlurText";
import { motion } from "framer-motion";

export function Location() {
  return (
    <Section className="bg-bg-secondary relative overflow-hidden" id="location">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bg-primary border border-border-default">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-sans">
                  Our Space
                </span>
              </div>
              <BlurText 
                text="Visit BC Café" 
                delay={80} 
                animateBy="words" 
                direction="top" 
                className="font-display text-4xl sm:text-5xl font-black text-text-primary tracking-tight" 
              />
              <p className="text-text-secondary text-sm leading-relaxed max-w-md font-sans">
                Come for the premium specialty roast coffee, stay for the handcrafted gourmet dining and high-speed Wi-Fi lounge.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 bg-surface border border-text-primary flex items-center justify-center text-accent shrink-0 rounded-none">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary font-sans">Address</h3>
                  <p className="text-sm text-text-secondary mt-1 leading-relaxed font-sans">
                    Anna Nagar, Chennai, Tamil Nadu, 600040
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 bg-surface border border-text-primary flex items-center justify-center text-accent shrink-0 rounded-none">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary font-sans">Opening Hours</h3>
                  <p className="text-sm text-text-secondary mt-1 leading-relaxed font-sans">
                    Open Daily: 8:00 AM - 12:00 AM<br />
                    Kitchen last orders: 11:30 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 bg-surface border border-text-primary flex items-center justify-center text-accent shrink-0 rounded-none">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary font-sans">Phone</h3>
                  <p className="text-sm text-text-secondary mt-1 font-sans">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Brutalist Map Container */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] border-editorial bg-surface relative flex items-center justify-center rounded-none overflow-hidden group">
            
            {/* Map Grid Lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,var(--border-default)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-default)_1px,transparent_1px)] bg-[size:32px_32px]" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-6">
              
              {/* Map pin */}
              <motion.div 
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex items-center justify-center"
              >
                <div className="h-12 w-12 bg-text-primary text-bg-primary border border-text-primary flex items-center justify-center rounded-none shadow-md">
                  <MapPin className="h-6 w-6" />
                </div>
              </motion.div>

              <div className="z-10 max-w-sm space-y-2">
                <h4 className="font-display font-bold text-text-primary text-lg">BC Café Anna Nagar</h4>
                <p className="text-xs text-text-secondary leading-relaxed font-sans">
                  Located near the main circle. Convenient parking, cozy indoor lounge, and drive-through pick-up available.
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="z-10 inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest bg-text-primary text-bg-primary border border-text-primary hover:bg-transparent hover:text-text-primary transition-all duration-300 font-sans rounded-none"
              >
                Open Google Maps
              </a>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
