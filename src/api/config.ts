import axios from "axios";

export const api = axios.create({
    baseURL:
        `https://api.themoviedb.org/3`,
    headers: {
        "Content-Type": "application/json"
    }
});

//https://image.tmdb.org/t/p/w200/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg



//  https://api.themoviedb.org/3/popular/now_playing?api_key=ae98cf1e5568a662263e277b893ef127