import { Main, OverView, Title, Banner } from './css'
import { MovieData } from 'movie'
import { makeImage } from '../../utils/utils';
import MovieSliderContainer from '../../components/MovieSlider/container/MovieSliderContainer';

type Props = {
    data?: MovieData;
}

const Home = ({ data }: Props) => {
    return (
        <Main>
            <Banner url={makeImage(data?.results[0].backdrop_path || "")}>
                <Title>{data?.results[0].title}</Title>
                <OverView>{data?.results[0].overview}</OverView>
            </Banner>
            <MovieSliderContainer
                movies={data?.results}
            />
        </Main>
    )
}

export default Home