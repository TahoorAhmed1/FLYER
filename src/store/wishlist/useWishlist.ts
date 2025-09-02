import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: string;
  product_name: string;
  price?: string;
  image_url?: string;
}

interface WishlistStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  clearProducts: () => void;

  hydrated: boolean;
  setHydrated: (value: boolean) => void;
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
      clearProducts: () => set({ products: [] }),

      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
    }),
    {
      name: "wishlist-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
