import type { IContentBase } from "content";
import { MoviePage, SliderWrapper } from "./style/style";
import BannerContainer from "../../components/Banner/container/BannerContainer";
import MovieSliderContainer from "../../components/MovieSlider/container/MovieSliderContainer";
import { formatImgUrl } from "../../utils/utils";
import ModalContainer from "../../components/Modal/container/ModalContainer";

interface Props {
  data: IContentBase | undefined;
  movieMatch: string | undefined;
  movieId: string | undefined;
  handleBannerModal: () => void;
  onModalClose: () => void;
}

const Movie = ({ data, movieMatch }: Props) => {
  return (
    <MoviePage>
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
        <MovieSliderContainer
          category="movie"
          type="popular"
          title="가장 인기있는 영화"
        />
        <MovieSliderContainer
          category="movie"
          type="top_rated"
          title="최고 평점을 받은 영화"
        />
        <MovieSliderContainer
          category="movie"
          type="upcoming"
          title="상영 예정인 영화"
        />
      </SliderWrapper>
      {movieMatch && <ModalContainer />}
    </MoviePage>
  );
};

export default Movie