import { create } from "zustand";



export const useProduct = create<any>((set) => ({
  slider: [],
  product: [],
  setSlider: (slider:any) => set({ slider }),
  setProduct: (product:any) => set({ product }),
  category: [],
  setCategory: (category:any) => set({ category }),
}));
