import { AnimatePresence } from "framer-motion";
import { LankImg, MovieCard, MovieTitle, PaginationBtn, PaginationBtnWrapper, SliderBox, Wrapper } from "./stlye/style";
import MovieHover from "../MovieHover/MovieHover";
import type { IContentBase } from "content";
import { formatImgUrl } from "../../utils/utils";
import RankIcon from "../RankIcon/RankIcon";

interface Props {
  data: IContentBase | undefined;
  index: number;
  title: string;
  sliderType: string;
  type: string;
  handleSlider: (type: "next" | "prev") => void;
  onMovieModalOpen: (id: string) => void;
}

const parentVariants = {
  rest: {
    scale: 1,
    y: 0,
    zIndex: 1,
  },
  hover: {
    scale: 1.5,
    y: -32,
    zIndex: 99,
    tq: {
        display:"block",
    },
    "rank":{
        display:"none"
    },
    transition: { duration: 0.2 },
  },
};

const childVariants = {
  hover: { width:269,  transition: { duration: 0 } },
};
const TopContent = ({
  data,
  index,
  type,
  sliderType,
  title,
  handleSlider,
  onMovieModalOpen,
}: Props) => {
  return (
    <Wrapper>
      <MovieTitle>{title}</MovieTitle>
      <AnimatePresence initial={false}>
        <SliderBox
          transition={{ type: "tween" }}
          initial={{
            x: sliderType === "next" ? window.innerWidth : -window.innerWidth,
          }}
          animate={{ x: 0 }}
          exit={{
            x: sliderType === "next" ? -window.innerWidth : window.innerWidth,
          }}
          key={index}
        >
          {data?.results
            .slice(1, 11)
            .slice(index === 0 ? 0 : 6, index === 0 ? 6 : 10)
            .map((movie, i) => (
              <MovieCard
                key={movie.id}
                layoutId={String(type + movie.id)}
                variants={parentVariants}
                initial="rest"
                animate="rest"
                whileHover="hover"
              >
                <RankIcon rank={i + 1 + index * 6} />
                <LankImg
                  variants={childVariants}
                  src={formatImgUrl(movie?.poster_path, "w500")}
                />
                <MovieHover
                  release_date={
                    movie.release_date ?? movie.first_air_date ?? ""
                  }
                  original_title={
                    movie.original_title ?? movie.original_name ?? ""
                  }
                  vote_average={movie.vote_average}
                  id={movie.id}
                  onMovieModalOpen={onMovieModalOpen}
                />
              </MovieCard>
            ))}
        </SliderBox>
      </AnimatePresence>
      <PaginationBtnWrapper>
        <PaginationBtn onClick={() => handleSlider("prev")}>
          <img src="/assets/left-arrow.svg" alt="left-arrow" />
        </PaginationBtn>
        <PaginationBtn onClick={() => handleSlider("next")}>
          <img src="/assets/right-arrow.svg" alt="right-arrow" />
        </PaginationBtn>
      </PaginationBtnWrapper>
    </Wrapper>
  );
};

export default TopContent