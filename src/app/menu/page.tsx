"use client";

import * as React from "react";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Shell";
import { ProductCard } from "@/components/cards/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MOCK_MENU, CATEGORIES } from "@/lib/mock/menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [sortBy, setSortBy] = React.useState<"default" | "price-asc" | "price-desc" | "rating">("default");
  
  // Quick Filter States
  const [vegOnly, setVegOnly] = React.useState(false);
  const [spicyOnly, setSpicyOnly] = React.useState(false);
  const [popularOnly, setPopularOnly] = React.useState(false);

  // Filter items matching query and criteria
  const filteredItems = React.useMemo(() => {
    let items = [...MOCK_MENU];

    if (selectedCategory !== "All") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.ingredients.some((ing) => ing.toLowerCase().includes(query))
      );
    }

    if (vegOnly) {
      items = items.filter((item) => item.tags.includes("Veg"));
    }
    if (spicyOnly) {
      items = items.filter((item) => item.tags.includes("Spicy"));
    }
    if (popularOnly) {
      items = items.filter(
        (item) => item.tags.includes("Popular") || item.tags.includes("Best Seller")
      );
    }

    if (sortBy === "price-asc") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      items.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      items.sort((a, b) => b.rating - a.rating);
    }

    return items;
  }, [searchQuery, selectedCategory, sortBy, vegOnly, spicyOnly, popularOnly]);

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-bg-primary pt-28 pb-16 relative overflow-hidden">
        {/* Ambient Dot Field Background */}
        <div className="fixed inset-0 dot-field-bg pointer-events-none z-0" />
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none ambient-glow" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none ambient-glow" style={{ animationDelay: '4s' }} />
        <Container>
          {/* Header */}
          <div className="space-y-4 mb-8">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary tracking-tight">
              BC Café <span className="text-accent">Menu</span>
            </h1>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl">
              Freshly brewed premium coffee, gourmet handcrafted burgers, and delicious pastries made to order.
            </p>
          </div>

          {/* Sticky Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center mb-8 pb-6 border-b border-border-default/50 sticky top-[60px] bg-bg-primary/95 backdrop-blur-md z-30 pt-4">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
              <Input
                type="text"
                placeholder="Search coffee, burgers, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 h-11"
              />
            </div>

            {/* Quick Tag Selectors */}
            <div className="md:col-span-4 flex flex-wrap gap-2">
              <button
                onClick={() => setVegOnly(!vegOnly)}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-colors cursor-pointer",
                  vegOnly
                    ? "bg-success/15 border-success/40 text-success"
                    : "border-border-default bg-surface text-text-secondary hover:border-border-default/80"
                )}
              >
                Veg Only
              </button>
              <button
                onClick={() => setSpicyOnly(!spicyOnly)}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-colors cursor-pointer",
                  spicyOnly
                    ? "bg-danger/15 border-danger/40 text-danger"
                    : "border-border-default bg-surface text-text-secondary hover:border-border-default/80"
                )}
              >
                Spicy
              </button>
              <button
                onClick={() => setPopularOnly(!popularOnly)}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-semibold rounded-xl border transition-colors cursor-pointer",
                  popularOnly
                    ? "bg-accent/15 border-accent/40 text-accent"
                    : "border-border-default bg-surface text-text-secondary hover:border-accent/45"
                )}
              >
                Popular
              </button>
            </div>

            {/* Sorting controls */}
            <div className="md:col-span-3 flex items-center gap-2">
              <ArrowUpDown className="h-4.5 w-4.5 text-text-muted shrink-0" />
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full h-11 px-3 py-2 rounded-2xl bg-surface border border-border-default text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focused cursor-pointer transition-colors"
              >
                <option value="default">Default Sorting</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating: High to Low</option>
              </select>
            </div>
          </div>

          {/* Categories & Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar list */}
            <aside className="lg:col-span-3 lg:sticky lg:top-[160px] space-y-3 z-20">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4 px-2 hidden lg:block">
                Categories
              </h3>
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 pb-2 lg:pb-0 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "px-4 py-2.5 rounded-xl font-medium text-sm text-left transition-all duration-200 cursor-pointer whitespace-nowrap lg:w-full",
                      selectedCategory === cat
                        ? "bg-accent/10 text-accent border border-accent/25"
                        : "text-text-secondary hover:bg-surface hover:text-text-primary border border-transparent"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </aside>

            {/* Results Grid */}
            <div className="lg:col-span-9">
              {filteredItems.length === 0 ? (
                /* Empty state screen */
                <div className="py-24 text-center rounded-3xl border border-border-default/50 bg-surface/50 max-w-md mx-auto space-y-4">
                  <div className="h-14 w-14 rounded-full bg-surface border border-border-default/60 flex items-center justify-center text-text-muted mx-auto">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-primary">No items found</h3>
                  <p className="text-sm text-text-secondary max-w-xs mx-auto leading-relaxed">
                    Try adjusting your filters, clearing your search query, or checking other categories.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                      setVegOnly(false);
                      setSpicyOnly(false);
                      setPopularOnly(false);
                    }}
                  >
                    Reset All Filters
                  </Button>
                </div>
              ) : (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredItems.map((item) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        key={item.id}
                        className="h-full"
                      >
                        <ProductCard item={item} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
