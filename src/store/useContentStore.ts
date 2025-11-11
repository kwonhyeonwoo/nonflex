import { create } from "zustand";

interface Store {
  category: "movie" | "tv" | "search",
  contentKey: string;
  id:string;
  setContentKey: (category: "movie" | "tv" | "search", contentKey: string) => void;
  setMovieId:(id:string)=>void;
}

export const useContentStore = create<Store>((set) => ({
  category: "movie",
  contentKey: "",
  id:"",
  setContentKey: (category: "movie" | "tv" | "search", contentKey: string) =>
    set(() => ({
      category,
      contentKey,
    })),
  setMovieId:(id:string)=>set(()=>({
    id
  }))
}));