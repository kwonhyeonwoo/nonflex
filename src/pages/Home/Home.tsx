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
                link='movies'
            />
            <MovieSliderContainer
                movies={popluar?.results}
                title="Popular Lists"
                link='movies'
            />
            <MovieSliderContainer
                movies={topMovie?.results}
                title="Best Movie Lists"
                link='movies'
            />
            <Outlet />
        </Main>
    )
}

export default Home