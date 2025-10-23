import { useQuery } from "@tanstack/react-query"
import { movieKeys } from "../../api/queryKeys"
import { movieServie } from "../../api/servies/movieService"
import type { IMovie } from "movie"

export const useMovieQuery = (id:string)=>{
    return useQuery<IMovie>({
        queryKey:movieKeys.movies(id),
        queryFn:movieServie.getMovies,
    })
}