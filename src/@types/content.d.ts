declare module "content"{
    interface IContentResult {
      id: number;
      backdrop_path: string;
      poster_path: string;
      title: string;
      original_name?:string;
      first_air_date?:string;
      overview: string;
      vote_average: number; // 평점
      vote_count: number; // 재생횟수
      release_date: string;
      original_title:string;
    }
    interface IContentBase {
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