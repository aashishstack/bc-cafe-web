"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coffee, ShoppingCart, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

import { useCartStore } from "@/lib/store/useCartStore";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const cartCount = useCartStore((state) => state.getTotalItemsCount());
  const setDrawerOpen = useCartStore((state) => state.setDrawerOpen);
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    if (savedTheme === "light" || (!savedTheme && systemPrefersLight)) {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b border-transparent font-sans",
        scrolled
          ? "bg-bg-primary/95 border-border-default py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center bg-text-primary text-bg-primary transition-all duration-300 group-hover:scale-105 border border-text-primary">
                <Coffee className="h-5 w-5" />
              </div>
              <span className="font-display font-black text-xl tracking-wider text-text-primary group-hover:text-accent transition-colors">
                BC <span className="text-accent font-light italic">CAFÉ</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:text-accent",
                    isActive
                      ? "text-accent border-b border-accent"
                      : "text-text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="secondary"
              size="icon"
              className="relative group h-11 w-11 flex items-center justify-center p-0"
              onClick={() => setDrawerOpen(true)}
            >
              <ShoppingCart className="h-4.5 w-4.5 group-hover:text-bg-primary" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-text-primary text-bg-primary text-[8px] font-bold border border-text-primary">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="relative h-11 w-11 flex items-center justify-center p-0 cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-accent" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-accent" />
              )}
            </Button>
            <Link href="/menu">
              <Button size="default">Order Now</Button>
            </Link>
          </div>

          {/* Mobile Menu & Cart Button */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              variant="secondary"
              size="icon"
              className="relative h-11 w-11"
              onClick={() => setDrawerOpen(true)}
            >
              <ShoppingCart className="h-4.5 w-4.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-text-primary text-bg-primary text-[8px] font-bold border border-text-primary">
                  {cartCount}
                </span>
              )}
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              className="relative h-11 w-11 flex items-center justify-center cursor-pointer"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-accent" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-accent" />
              )}
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-text-secondary hover:text-accent hover:bg-surface border border-border-default h-11 w-11 cursor-pointer transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Side Menu */}
      <div
        className={cn(
          "fixed top-0 bottom-0 right-0 w-64 bg-bg-primary border-l border-border-default p-6 z-50 md:hidden transition-transform duration-300 ease-in-out flex flex-col justify-between",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border-default">
            <span className="font-display font-black text-lg">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="h-10 w-10 flex items-center justify-center border border-border-default cursor-pointer text-text-secondary hover:text-accent"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col space-y-3">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-2 text-sm font-bold uppercase tracking-wider transition-colors",
                    isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3 pt-6 border-t border-border-default">
          <Link href="/menu" onClick={() => setIsOpen(false)} className="w-full">
            <Button className="w-full h-11">Order Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
