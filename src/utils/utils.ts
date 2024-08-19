export const makeImage = (url: string, format?: string) => {
    return `https://image.tmdb.org/t/p/${format ? format : "original"}/${url}`;
};
