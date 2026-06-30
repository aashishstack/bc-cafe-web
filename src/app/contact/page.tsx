"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Shell";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { BlurText } from "@/components/ui/BlurText";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all form details.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      toast.success("Message sent successfully! We'll reply within 24 hours.");
      setName("");
      setEmail("");
      setMessage("");
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-bg-primary pt-28 pb-16 relative overflow-hidden">
        <Container>
          {/* Header */}
          <div className="space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-bg-secondary border border-border-default">
              <Mail className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-sans">
                Contact Details
              </span>
            </div>
            
            <div className="space-y-1 select-none">
              <BlurText 
                text="Get in" 
                delay={80} 
                animateBy="words" 
                direction="top" 
                className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary tracking-tight" 
              />
              <BlurText 
                text="Touch" 
                delay={120} 
                animateBy="words" 
                direction="bottom" 
                className="font-display font-light italic text-accent text-4xl sm:text-5xl tracking-tight" 
              />
            </div>
            
            <p className="text-text-secondary text-sm sm:text-base max-w-xl font-sans leading-relaxed">
              Have questions about our blends, catering requests, or feedback? Send us a message below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface border-editorial p-6 sm:p-8 rounded-none"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-text-secondary font-sans">Your Name</label>
                    <Input
                      id="contact-name"
                      placeholder="Aravind Swamy"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSending}
                      className="rounded-none border-editorial-thin h-11 bg-bg-primary focus-visible:ring-1 focus-visible:ring-border-focused"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-text-secondary font-sans">Email Address</label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="aravind@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSending}
                      className="rounded-none border-editorial-thin h-11 bg-bg-primary focus-visible:ring-1 focus-visible:ring-border-focused"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-text-secondary font-sans">Your Message</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="How can we help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isSending}
                      className="flex w-full rounded-none border border-border-default bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-disabled focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focused disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                    />
                  </div>

                  <Button type="submit" disabled={isSending} className="w-full h-12 gap-2">
                    {isSending ? (
                      <>
                        <div className="h-4 w-4 border-2 border-bg-primary border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Right Column: Contact info */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-surface border-editorial p-6 sm:p-8 rounded-none hover:border-accent transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-text-primary font-display mb-6">Contact Info</h3>
                <div className="space-y-6">
                  
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-text-primary uppercase tracking-wider font-sans">Lounge Location</h4>
                      <p className="text-xs text-text-secondary mt-1 leading-relaxed font-sans">
                        Anna Nagar, Chennai, Tamil Nadu, 600040
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-text-primary uppercase tracking-wider font-sans">Phone</h4>
                      <p className="text-xs text-text-secondary mt-1 font-sans">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-text-primary uppercase tracking-wider font-sans">General Queries</h4>
                      <p className="text-xs text-text-secondary mt-1 font-sans">
                        hello@bccafe.com
                      </p>
                    </div>
                  </div>

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
