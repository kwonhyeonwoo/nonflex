import client from "../client";

export const movieServie = {
  getContents: (category: "movie" | "tv" | "search", type: string) =>
    client
      .get(`/${category}/${type}?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => res.data),
  getAllSearch: (keyword: string) =>
    client
      .get(
        `/search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${keyword}`
      )
      .then((res) => res.data),
  getTvs: (type: string) =>
    client
      .get(`/tv/${type}?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => res.data),
};