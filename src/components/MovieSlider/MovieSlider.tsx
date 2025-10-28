import { AnimatePresence } from 'framer-motion';
import { HoverBtnWrapper, HoverInfoWrapper, HoverPlayerBtn, InfoTitle, MovieCard, MovieCardHover, MovieTitle, PaginationBtn, PaginationBtnWrapper, SliderBox, Wrapper } from './style/style';
import { formatImgUrl } from '../../utils/utils';
import type { IMovie } from 'movie';
import StartRatingContainer from '../StarRating/container/StartRatingContainer';

interface Props {
  data: IMovie | undefined;
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

const childVariants = {
  hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
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
                <MovieCardHover variants={childVariants}>
                  <HoverBtnWrapper>
                    <HoverPlayerBtn>
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        data-icon="PlayMedium"
                        data-icon-id=":ro:"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        role="img"
                      >
                        <path
                          fill="currentColor"
                          d="M5 2.7a1 1 0 0 1 1.48-.88l16.93 9.3a1 1 0 0 1 0 1.76l-16.93 9.3A1 1 0 0 1 5 21.31z"
                        ></path>
                      </svg>
                    </HoverPlayerBtn>
                    <HoverPlayerBtn>
                      <span className="add">+</span>
                    </HoverPlayerBtn>
                    <HoverPlayerBtn
                      onClick={() => onMovieModalOpen(String(movie.id))}
                    >
                      <img src="/assets/right-arrow.svg" alt="" />
                    </HoverPlayerBtn>
                  </HoverBtnWrapper>
                  <HoverInfoWrapper>
                    <InfoTitle>
                      <p className='title'>
                        {movie.release_date}
                        <StartRatingContainer rating={movie.vote_average} />
                      </p>

                      <p className="title">{movie.original_title}</p>
                    </InfoTitle>
                  </HoverInfoWrapper>
                </MovieCardHover>
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