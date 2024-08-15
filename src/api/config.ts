import axios from "axios";

export const api = axios.create({
    baseURL:
        `https://api.themoviedb.org/3`,
    headers: {
        "Content-Type": "application/json"
    }
});

//https://image.tmdb.org/t/p/w200/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg

