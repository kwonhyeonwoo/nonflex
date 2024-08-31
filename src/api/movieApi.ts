import { api } from "./config"

// 개봉영화
export const getMovie = async () => {
    const response = await api.get(`/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = response.data;
    return responseData;
}

// 영화 검색
export const getSearchMovie = async (keyword?: string | null) => {
    const response = await api.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}`)
    const responseData = response.data;
    return responseData;
}

// 인기영화
export const getPopularMovie = async () => {
    const response = await api.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = response.data;
    return responseData;
};

// 평점높은 영화
export const getTopMovie = async () => {
    const response = await api.get(`/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = response.data;
    return responseData;
};

// 곧 개봉영화
export const getUpcomingMovie = async () => {
    const response = await api.get(`/upcoming?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = response.data;
    return responseData;
}
