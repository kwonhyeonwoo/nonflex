export const makeImage = (url: string, formath?: string) => {
    return `https://image.tmdb.org/t/p/${formath ? formath : ""}/original/${url}}`
};
