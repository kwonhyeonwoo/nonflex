import React from 'react'
import Home from '../Home'
import { useQuery } from 'react-query';
import { MovieData } from 'movie';
import { getMovie, getPopularMovie, getTopMovie } from '../../../api/movieApi';

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
    return (
        <Home data={data} popluar={popluar} topMovie={topMovie} />
    )
}

export default HomeContainer