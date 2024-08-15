declare module "movie" {
    export interface MovieData {
        dates: {
            maximum: string;
            minimum: string;
        },
        results: [
            {
                id: number;
                original_title: string;
                backdrop_path: string;
                overview: string;
                poster_path: string;
                release_date: string;
                title: string;
                vote_average: string;
            }
        ]
    }
    export type MoviesData = {
        id: number;
        original_title: string;
        backdrop_path: string;
        overview: string;
        poster_path: string;
        release_date: string;
        title: string;
        vote_average: string;
    }
}