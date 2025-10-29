import { create } from "zustand";

interface Store{
    movieKey:string;
    setMovieKey:(key:string)=>void;
}

export const useMovieStore = create<Store>((set)=>({
    movieKey:"",
    setMovieKey:(key:string)=>set(()=>({movieKey:key}))
}))