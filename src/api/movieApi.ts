import { api } from "./config"

export const getMovie = async () => {
    const response = await api.get(`/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
    const responseData = response.data;
    return responseData;
}
// now_playing