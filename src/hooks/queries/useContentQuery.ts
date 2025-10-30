import { useQuery } from "@tanstack/react-query"
import { movieKeys } from "../../api/queryKeys"
import { movieServie } from "../../api/servies/movieService"
import type { IContentBase } from "content";

export const useContentQuery = (category: "movie" | "tv", type: string) => {
  return useQuery<IContentBase>({
    queryKey: movieKeys.contents(category,type),
    queryFn: () => movieServie.getContents(category,type),
  });
};