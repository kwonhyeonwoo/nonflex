import type { IContentBase } from 'content'
import {
  Page,
  SliderWrapper,
} from "./style/style";
import { formatImgUrl } from '../../utils/utils';
import MovieSliderContainer from '../../components/MovieSlider/container/MovieSliderContainer';
import BannerContainer from '../../components/Banner/container/BannerContainer';
import ModalContainer from '../../components/Modal/container/ModalContainer';
import TopContentContainer from '../../components/TopContent/container/TopContentContainer';

interface Props {
  data: IContentBase | undefined;
  movieMatch: string | undefined;
  movieId: string | undefined;
  handleBannerModal: () => void;
  onModalClose: () => void;
}

const Home = ({
  data,
  movieMatch,
}: Props) => {
  return (
    <Page>
      <BannerContainer
        category="movie"
        contentKey="now_playing"
        imgUrl={formatImgUrl(data?.results?.[0]?.backdrop_path || "")}
        title={data?.results[0].title}
        overView={data?.results[0].overview}
        id={String(data?.results[0].id)}
      />
      <SliderWrapper>
        <MovieSliderContainer
          category="movie"
          type="now_playing"
          title="지금 상영중인 영화"
        />
        <TopContentContainer
          category="movie"
          type="popular"
          title="오늘 전세계의 Top10 영화"
        />

        <MovieSliderContainer
          category="movie"
          type="upcoming"
          title="상영 예정인 영화"
        />
        <MovieSliderContainer
          category="tv"
          type="airing_today"
          title="지금 상영중인 시리즈"
        />
        <TopContentContainer
          category="tv"
          type="top_rated"
          title="오늘 대한민국의 Top10 시리즈"
        />
        <MovieSliderContainer
          category="tv"
          type="popular"
          title="가장 인기있는 시리지"
        />
      </SliderWrapper>

      {movieMatch && <ModalContainer />}
    </Page>
  );
};

export default Home;
