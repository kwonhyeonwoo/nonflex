import React, { useCallback } from 'react'
import Tv from '../Tv'
import { useQuery } from 'react-query'
import { getPopularTvApi, getTopTvApi } from '../../../api/tvApi';
import { MovieData } from 'movie';
import { useNavigate } from 'react-router-dom';

const TvContainer = () => {
    const { data, error, isLoading } = useQuery<MovieData>("tvpopular", getPopularTvApi);
    const { data: bsetTvData, } = useQuery<MovieData>("topTv", getTopTvApi);
    const navigate = useNavigate();
    const handleMovieInfoOpen = useCallback(
        (id: number) => {
            navigate(`movies/${id}`)
        },
        [],
    )
    return (
        <Tv
            data={data}
            bestTvData={bsetTvData}
            onMovieInfoOpen={handleMovieInfoOpen}
        />
    )
}

export default TvContainer