"use client";

import Image from "next/image";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MenuItem } from "@/lib/mock/menu";
import { useCartStore } from "@/lib/store/useCartStore";
import { toast } from "sonner";
import * as React from "react";

interface ProductCardProps {
  item: MenuItem;
}

export function ProductCard({ item }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(item);
    toast.success(`${item.title} added to cart!`);
  };

  return (
    <div className="flex flex-col h-full bg-surface border-editorial transition-all duration-300 hover:border-accent hover:-translate-y-1 relative group rounded-none">
      {/* Image Container — sharp corners with minimal border frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-secondary border-b border-border-default">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Top left Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
          {item.tags.map((tag) => (
            <Badge key={tag} variant={tag === "Popular" || tag === "Best Seller" ? "primary" : "default"}>
              {tag}
            </Badge>
          ))}
        </div>

        {/* Favorite Icon Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 z-20 h-10 w-10 border border-text-primary bg-bg-primary flex items-center justify-center text-text-secondary hover:text-red-500 hover:border-red-500/30 transition-all duration-300 active:scale-90 cursor-pointer rounded-none"
        >
          <Heart className={`h-4.5 w-4.5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </button>
      </div>

      {/* Info Content */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent transition-colors duration-300">
              {item.title}
            </h3>
            <div className="flex items-center gap-1 text-accent text-sm font-bold font-sans">
              <Star className="h-4 w-4 fill-accent" />
              <span className="text-text-primary">{item.rating}</span>
            </div>
          </div>
          <p className="text-sm text-text-secondary font-sans leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-4 border-t border-border-default/45">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted font-sans">Price</span>
            <p className="font-display font-extrabold text-lg text-text-primary">
              ₹{item.price}
            </p>
          </div>
          <Button variant="secondary" size="sm" className="gap-2" onClick={handleAddToCart}>
            <ShoppingBag className="h-4 w-4" />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
