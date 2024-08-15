import { api } from "./config"

export const getMovie = async () => {
    const response = await api.get(`/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
    console.log('process.env.REACT_APP_API_KEY', process.env.REACT_APP_API_KEY)
    const responseData = response.data;
    return responseData;
}
// now_playing