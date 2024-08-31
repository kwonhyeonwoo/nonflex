import { Main, OverView, Title, Banner } from './css'
import { MovieData } from 'movie'
import { makeImage } from '../../utils/utils';
import MovieSliderContainer from '../../components/MovieSlider/container/MovieSliderContainer';
import { Outlet } from 'react-router-dom';

type Props = {
    data?: MovieData;
    popluar?: MovieData;
    topMovie?: MovieData;
}

const Home = ({ data, popluar, topMovie }: Props) => {
    console.log('data', data)
    console.log('data', popluar)
    console.log('data', topMovie)
    return (
        <Main>
            <Banner url={makeImage(data?.results[0].backdrop_path || "")}>
                <Title>{data?.results[0].title}</Title>
                <OverView>{data?.results[0].overview}</OverView>
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