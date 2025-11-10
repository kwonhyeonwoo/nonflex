type IContentsType = "movie" | "tv" | "search"

export const movieKeys = {
  all: ["contents"] as const,
  contents: (type: IContentsType, id: string) => 
    [...movieKeys.all, type, id],
  search: (keyword: string) => [...movieKeys.all, "search", keyword],
};

export const userKeys = {
    user: (id: string) => ["user", id]
}