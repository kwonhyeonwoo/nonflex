import { useQuery } from "@tanstack/react-query"
import { movieKeys } from "../../api/queryKeys"
import { movieServie } from "../../api/servies/movieService"
import type { ITv } from "tv"

export const useTvQuery = (id:string,url:string)=>{
    return useQuery<ITv>({
        queryKey:movieKeys.tvs(id),
        queryFn:()=>movieServie.getTvs(url)
    })
}