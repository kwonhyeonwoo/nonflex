import client from "../client";

export const movieServie = {
    getMovies: (type:string) =>
        client.get(`/movie/${type}?api_key=${import.meta.env.VITE_API_KEY}`).then(res => res.data)
}