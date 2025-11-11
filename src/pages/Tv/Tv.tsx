import type { IContentBase } from "content";
import BannerContainer from "../../components/Banner/container/BannerContainer";
import { SliderWrapper, TvPage } from "./style/style";
import { formatImgUrl } from "../../utils/utils";
import MovieSliderContainer from "../../components/MovieSlider/container/MovieSliderContainer";
import ModalContainer from "../../components/Modal/container/ModalContainer";

interface Props {
  data: IContentBase | undefined;
  tvMatch?:string;
}

const Tv = ({ data, tvMatch }: Props) => {
  return (
    <TvPage>
      <BannerContainer
        category="tv"
        contentKey="airing_today"
        imgUrl={formatImgUrl(data?.results[0].backdrop_path || "")}
        title={data?.results[0].original_name}
        overView={data?.results[0].overview}
        id={String(data?.results[0].id)}
      />
      <SliderWrapper>
        <MovieSliderContainer
          category="tv"
          link="tv"
          type="airing_today"
          title="지금 상영중인 시리즈"
        />
        <MovieSliderContainer
          category="tv"
          type="popular"
          link="tv"
          title="가장 인기있는 시리지"
        />
        <MovieSliderContainer
          category="tv"
          link="tv"
          type="top_rated"
          title="Top 시리즈"
        />
      </SliderWrapper>
      {tvMatch && <ModalContainer link="tv"/>}
    </TvPage>
  );
};

export default Tv;
