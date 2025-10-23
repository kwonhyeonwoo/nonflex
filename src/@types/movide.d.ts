declare module "movie"{
    interface IMovieResult {
      id: number;
      backdrop_path: string;
      poster_path: string;
      title: string;
      overview: string;
    }
    interface IMovie {
      dates: {
        maximum: string;
        minimum: string;
      };
      page: number;
      results: IMovieResult[];
      total_pages: number;
      total_results: number;
    }
}