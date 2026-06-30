import { create } from "zustand";
import { MenuItem } from "@/lib/mock/menu";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItemsCount: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isDrawerOpen: false,
  setDrawerOpen: (open) => set({ isDrawerOpen: open }),
  
  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.item.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isDrawerOpen: true, // Auto open cart on adding item
        };
      }
      return { 
        items: [...state.items, { item, quantity: 1 }],
        isDrawerOpen: true, // Auto open cart on adding item
      };
    });
  },

  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((i) => i.item.id !== itemId),
    }));
  },

  updateQuantity: (itemId, quantity) => {
    set((state) => ({
      items: state.items
        .map((i) => (i.item.id === itemId ? { ...i, quantity } : i))
        .filter((i) => i.quantity > 0),
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotalPrice: () => {
    return get().items.reduce((total, i) => total + i.item.price * i.quantity, 0);
  },

  getTotalItemsCount: () => {
    return get().items.reduce((count, i) => count + i.quantity, 0);
  },
}));
