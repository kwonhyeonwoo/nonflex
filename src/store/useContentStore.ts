import { create } from "zustand";

interface Store{
    category:"movie"|"tv",
    contentKey:string;
    setContentKey:(category:"movie"|"tv",contentKey:string)=>void;
}

export const useContentStore = create<Store>((set) => ({
  category: "movie",
  contentKey: "",
  setContentKey: (category:"movie" | "tv",contentKey: string) =>
    set(() => ({
      category,
      contentKey,
    })),
}));