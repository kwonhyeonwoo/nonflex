import type { IMovie } from 'movie'
import {
  Page,
  SliderWrapper,
} from "./style/style";
import { formatImgUrl } from '../../utils/utils';
import MovieSliderContainer from '../../components/MovieSlider/container/MovieSliderContainer';
import BannerContainer from '../../components/Banner/container/BannerContainer';
import ModalContainer from '../../components/Modal/container/ModalContainer';



interface Props {
  data:IMovie | undefined;
  movieMatch: string | undefined;
  movieId: string | undefined;
  handleBannerModal:()=>void;
  onModalClose:()=>void;
}

const Home = ({
  data,
  movieMatch,
}: Props) => {
  return (
    <Page>
      <BannerContainer
        imgUrl={formatImgUrl(data?.results?.[0]?.backdrop_path || "")}
        title={data?.results[0].title}
        overView={data?.results[0].overview}
        id={String(data?.results[0].id)}
      />
      <SliderWrapper>
        <MovieSliderContainer
          type="nowPlaying"
          url="now_playing"
          title="지금 상영중인 영화"
        />
        <MovieSliderContainer
          type="popular"
          url="popular"
          title="가장 인기있는 영화"
        />
        <MovieSliderContainer
          type="topRated"
          url="top_rated"
          title="최고 평점을 받은 영화"
        />
        <MovieSliderContainer
          type="upcoming"
          url="upcoming"
          title="상영 예정인 영화"
        />
      </SliderWrapper>

      {movieMatch && (
        <ModalContainer/>
      )}
    </Page>
  );
};

export default Home;
