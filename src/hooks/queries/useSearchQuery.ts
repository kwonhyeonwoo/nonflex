import { useQuery } from "@tanstack/react-query";
import { movieKeys } from "../../api/queryKeys";
import { movieServie } from "../../api/servies/movieService";

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  media_type: string;
  poster_path?: string;
  overview?: string;
}

interface SearchResponse {
  page: number;
  results: SearchResult[];
  total_pages: number;
  total_results: number;
}

export const useSearchQuery = (keyword: string) => {
  return useQuery<SearchResponse>({
    queryKey: movieKeys.movieSearch(keyword),
    queryFn: () => movieServie.getAllSearch(keyword),
    enabled: !!keyword && keyword.trim().length > 0,
  });
};
