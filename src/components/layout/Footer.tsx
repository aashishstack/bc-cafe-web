import Link from "next/link";
import { Coffee, Heart, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-default mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-bg-primary">
                <Coffee className="h-4 w-4" />
              </div>
              <span className="font-display font-black text-lg tracking-wider text-text-primary">
                BC <span className="text-accent">CAFÉ</span>
              </span>
            </Link>
            <p className="text-sm text-text-muted max-w-xs leading-relaxed">
              Brew Better. Fuel Your Day. Experience premium lifestyle coffee and handcrafted dining.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4 font-display">
              Navigate
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-sm text-text-muted hover:text-accent transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-sm text-text-muted hover:text-accent transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-text-muted hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-text-muted hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4 font-display">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex justify-between">
                <span>Monday - Sunday</span>
                <span className="text-text-primary">8:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Dine-in / Takeaway</span>
                <span className="text-text-primary">All Hours</span>
              </li>
              <li className="flex justify-between">
                <span>Kitchen Closes</span>
                <span className="text-text-primary">11:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4 font-display">
              Find Us
            </h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Anna Nagar, Chennai, Tamil Nadu, 600040</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border-default/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} BC Café. All rights reserved.
            </p>
            <p className="text-[10px] text-text-muted font-sans">
              Powered by <span className="text-accent font-semibold">Mech Strek</span> — Engineering the future of the web.
            </p>
          </div>
          <p className="text-xs text-text-muted flex items-center gap-1 font-sans">
            Made with <Heart className="h-3.5 w-3.5 text-accent fill-accent" /> for premium taste.
          </p>
        </div>
      </div>
    </footer>
  );
}
