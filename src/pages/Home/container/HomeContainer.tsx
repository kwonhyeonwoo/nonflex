import React, { useCallback } from 'react'
import Home from '../Home'
import { useQuery } from 'react-query';
import { MovieData } from 'movie';
import { getMovie, getPopularMovie, getTopMovie } from '../../../api/movieApi';
import { useNavigate, useNavigation } from 'react-router-dom';

const HomeContainer = () => {
    const {
        data,
        error,
        isLoading
    } = useQuery<MovieData>('movie', getMovie);
    const {
        data: popluar
    } = useQuery<MovieData>('popluar', getPopularMovie);
    const {
        data: topMovie,
    } = useQuery<MovieData>('movie', getTopMovie);
    const navigate = useNavigate();
    const handleMovieInfoOpen = useCallback(
        (id: number) => {
            navigate(`movies/${id}`)
        },
        [],
    )

    return (
        <Home
            onMovieInfoOpen={handleMovieInfoOpen}
            data={data}
            popluar={popluar}
            topMovie={topMovie}
        />
    )
}

export default HomeContainer