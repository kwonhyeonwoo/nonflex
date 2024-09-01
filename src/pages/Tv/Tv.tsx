import React from 'react'
import { Main } from './css'
import MovieSlider from '../../components/MovieSlider/MovieSlider'
import { Banner, BtnWrapper, OverView, Title } from '../Home/css'
import { makeImage } from '../../utils/utils'
import PlayBtn from '../../components/common/PlayBtn/PlayBtn'
import { MovieData } from 'movie'
import MovieSliderContainer from '../../components/MovieSlider/container/MovieSliderContainer'
import { Outlet } from 'react-router-dom'
type Props = {
    data?: MovieData;
    bestTvData?: MovieData;
    onMovieInfoOpen: (id: number) => void;
}
const Tv = ({ data, bestTvData, onMovieInfoOpen }: Props) => {
    return (
        <Main>
            <Banner url={makeImage(data?.results[0].backdrop_path || "")}>
                <Title>{data?.results[0].title}</Title>
                <OverView>{data?.results[0].overview}</OverView>
                <BtnWrapper>
                    <PlayBtn type='play' />
                    <PlayBtn id={data?.results[0]?.id} Active={onMovieInfoOpen} type='info' />
                </BtnWrapper>
            </Banner>
            <MovieSliderContainer
                movies={data?.results}
                title="Tv Lists"
                link='tv'
            />
            <MovieSliderContainer
                movies={bestTvData?.results}
                title="BestTv Lists"
                link='tv'
            />
            <Outlet />
        </Main>
    )
}

export default Tv