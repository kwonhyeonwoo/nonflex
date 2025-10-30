import { AnimatePresence } from 'framer-motion';
import {MovieCard,MovieTitle, PaginationBtn, PaginationBtnWrapper, SliderBox, Wrapper } from './style/style';
import { formatImgUrl } from '../../utils/utils';
import MovieHover from '../MovieHover/MovieHover';
import type { IContentBase } from 'content';

interface Props {
  data: IContentBase |  undefined;
  index: number;
  title: string;
  sliderType:string;
  type:string;
  handleSlider:(type:"next"|"prev")=>void;
  onMovieModalOpen: (id: string) => void;
}

const parentVariants = {
  rest: { scale: 1, y: 0, zIndex: 1 },
  hover: { scale: 1.5, y: -32, zIndex: 99, transition: { duration: 0.2 } },
};


const MovieSlider = ({
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
            .slice(1)
            .slice(6 * index, 6 * index + 6)
            .map((movie) => (
              <MovieCard
                key={movie.id}
                bgImg={formatImgUrl(movie?.poster_path, "w500")}
                layoutId={String(type + movie.id)}
                variants={parentVariants}
                initial="rest"
                animate="rest"
                whileHover="hover"
              >
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

export default MovieSlider