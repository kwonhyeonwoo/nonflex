import React from 'react'
import Home from '../Home'
import { useQuery } from 'react-query';
import { MovieData } from 'movie';
import { getMovie } from '../../../api/movieApi';

const HomeContainer = () => {
    const {
        data,
        error,
        isLoading
    } = useQuery<MovieData>('movie', getMovie);

    return (
        <Home data={data} />
    )
}

export default HomeContainer