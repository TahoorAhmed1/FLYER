import { create } from "zustand";
import { persist } from "zustand/middleware";

type LocationState = {
  country: string;
  city: string;
  language: string;
  setLocation: (data: { country: string; city: string; language: string }) => void;
};

export const useLocation = create<LocationState>()(
  persist(
    (set) => ({
      country: "Pakistan",
      city: "All", // default city
      language: "English",
      setLocation: (data) => set(() => ({ ...data })),
    }),
    {
      name: "userLocation", // key in localStorage
    }
  )
);
