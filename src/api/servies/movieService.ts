import client from "../client";

export const movieServie = {
    getMovies: () =>
        client.get(`/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`).then(res => res.data)
}