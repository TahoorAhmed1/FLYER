import { create } from "zustand";



export const useProduct = create<any>((set) => ({
  product: [],
  setProduct: (product:any) => set({ product }),
}));
