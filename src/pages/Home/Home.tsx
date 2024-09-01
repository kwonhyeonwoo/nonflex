import { Main, OverView, Title, Banner, BtnWrapper } from './css'
import { MovieData } from 'movie'
import { makeImage } from '../../utils/utils';
import MovieSliderContainer from '../../components/MovieSlider/container/MovieSliderContainer';
import { Outlet } from 'react-router-dom';
import PlayBtn from '../../components/common/PlayBtn/PlayBtn';

type Props = {
    data?: MovieData;
    popluar?: MovieData;
    topMovie?: MovieData;
    onMovieInfoOpen: (id: number) => void;
}

const Home = ({
    data,
    popluar,
    topMovie,
    onMovieInfoOpen
}: Props) => {
    console.log('data', data)
    console.log('data', popluar)
    console.log('data', topMovie)
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
                title="Movie Lists"
            />
            <MovieSliderContainer
                movies={popluar?.results}
                title="Popular Lists"
            />
            <MovieSliderContainer
                movies={topMovie?.results}
                title="Best Movie Lists"
            />
            <Outlet />
        </Main>
    )
}

export default Home