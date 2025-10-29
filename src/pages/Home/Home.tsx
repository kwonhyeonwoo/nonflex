import type { IMovie, IMovieResult } from 'movie'
import {
  ModalCard,
  ModalWrapper,
  MovieImg,
  MovieTitle,
  Page,
  SliderWrapper,
  TitleBox,
} from "./style/style";
import { formatImgUrl } from '../../utils/utils';
import { AnimatePresence } from 'framer-motion';
import MovieSliderContainer from '../../components/MovieSlider/container/MovieSliderContainer';
import BannerContainer from '../../components/Banner/container/BannerContainer';



interface Props {
  data:IMovie | undefined;
  movieMatch: string | undefined;
  movieId: string | undefined;
  movieResult:IMovieResult;
  handleBannerModal:()=>void;
  onModalClose:()=>void;
}

const Home = ({
  data,
  movieMatch,
  movieId,
  movieResult,
  onModalClose,
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
        <AnimatePresence>
          <ModalWrapper
            onClick={onModalClose}
            layoutId={movieId}
            animate={{ opacity: 1 }}
          >
            <ModalCard>
              <MovieImg img={formatImgUrl(movieResult.backdrop_path, "w500")} />
              <TitleBox>
                <MovieTitle>{movieResult.title}</MovieTitle>
              </TitleBox>
            </ModalCard>
          </ModalWrapper>
        </AnimatePresence>
      )}
    </Page>
  );
};

export default Home;
