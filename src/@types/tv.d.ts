declare module "tv"  {
    interface ITvResults {
      backdrop_path: string;
      original_name: string;
      overview: string;
      poster_path: string;
      first_air_date: string;
      vote_average: number;
      id: number;
    }
    interface ITv {
      page: number;
      results: ITvResults[];
      total_pages: number;
      total_results: number;
    }
}