// src/store/useSearchStore.ts
import { create } from "zustand";

interface SearchState {
  isSearchOpen: boolean;
  keyword: string;
  setKeyword: (value: string) => void;
  toggleSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  isSearchOpen: false,
  keyword: "",
  setKeyword: (value) => set({ keyword: value }),
  toggleSearch: () =>
    set((state) => ({ isSearchOpen: !state.isSearchOpen, keyword: "" })),
}));
