import { useQuery } from "@tanstack/react-query";
import { movieKeys } from "../../api/queryKeys";
import { movieServie } from "../../api/servies/movieService";
import type { IContentBase } from "content";
export const useSearchQuery = (type:string,keyword: string) => {
  return useQuery<IContentBase>({
    queryKey: movieKeys.contents("search",type),
    queryFn: () => movieServie.getAllSearch(keyword),
    enabled: !!keyword && keyword.trim().length > 0,
  });
};
