import { create } from "zustand";

interface Store {
  category: "movie" | "tv" | "search",
  contentKey: string;
  setContentKey: (category: "movie" | "tv" | "search", contentKey: string) => void;
}

export const useContentStore = create<Store>((set) => ({
  category: "movie",
  contentKey: "",
  setContentKey: (category: "movie" | "tv" | "search", contentKey: string) =>
    set(() => ({
      category,
      contentKey,
    })),
}));