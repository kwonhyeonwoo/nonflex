import { useQuery } from "@tanstack/react-query"
import { movieKeys } from "../../api/queryKeys"
import { movieServie } from "../../api/servies/movieService"
import type { IContentBase } from "content";

export const useContentQuery = (type: "movie" | "tv" | "search", id: string) => {
  return useQuery<IContentBase>({
    queryKey: movieKeys.contents(type, id),
    queryFn: () => movieServie.getContents(type, id),
  });
};