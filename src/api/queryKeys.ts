export const movieKeys = {
    all: ['movies'] as const,
    contents: (category: "movie" | "tv", type: string) => ['movies', category, type],
    tvs: (id: string) => ['movies', 'tvs', id],
    movieSearch: (keyword: string) => ['movies', "search", keyword] as const,

}

export const userKeys = {
    user: (id: string) => ["user", id]
}