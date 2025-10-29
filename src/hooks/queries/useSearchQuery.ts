import { useQuery } from "@tanstack/react-query"
import { movieKeys } from "../../api/queryKeys"
import { movieServie } from "../../api/servies/movieService"

export const useSearchQuery = (id:string,keyword:string)=>{
    return useQuery<{ keyword: string }>({
      queryKey: movieKeys.movieSearch(id),
      queryFn: () => movieServie.getAllSearch(keyword),
    });
}