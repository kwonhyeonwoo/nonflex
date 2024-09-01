import { api } from "./config"

// 평점 높은 티비 
export const getPopularTvApi = async () => {
    const response = await api.get(`/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = response.data;
    return responseData;
}

// 평점높은 티비
export const getTopTvApi = async () => {
    const response = await api.get(`/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = response.data;
    return responseData;
};