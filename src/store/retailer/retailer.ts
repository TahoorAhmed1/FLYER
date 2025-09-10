import { create } from "zustand";



export const useRetailer = create<any>((set) => ({
  retailer: [   ],
  setRetailer: (retailer:any) => set({ retailer }),
}));
