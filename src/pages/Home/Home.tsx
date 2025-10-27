import type { IMovie, IMovieResult } from 'movie'
import {
  Banner,
  ModalCard,
  ModalWrapper,
  MovieCard,
  MovieCardHover,
  MovieImg,
  MovieTitle,
  OverView,
  Page,
  SliderBox,
  SliderWrapper,
  Title,
  TitleBox,
} from "./style/style";
import { formatImgUrl } from '../../utils/utils';
import { AnimatePresence } from 'framer-motion';


const parentVariants = {
  rest: { scale: 1, y: 0, zIndex: 1 },
  hover: { scale: 1.3, y: -32, zIndex: 99, transition: { duration: 0.2 } },
};

const childVariants = {
  hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

interface Props {
  data: IMovie | undefined;
  movieMatch: string | undefined;
  movieId: string | undefined;
  index: number;
  movieResult:IMovieResult;
  onModalClose: () => void;
  onSlider: () => void;
  onMovieModalOpen: (id: string) => void;
}

const Home = ({ 
    data,
    movieMatch,
    movieId,
    index,
    onSlider, 
    movieResult,
    onModalClose,
    onMovieModalOpen 
  }: Props) => {
  return (
    <Page>
      <Banner img={formatImgUrl(data?.results?.[0]?.backdrop_path || "")}>
        <Title>{data?.results[0].title}</Title>
        <OverView>{data?.results[0].overview}</OverView>
      </Banner>
      <SliderWrapper>
        <AnimatePresence initial={false}>
          <SliderBox
            transition={{ type: "tween" }}
            initial={{ x: window.innerWidth }}
            animate={{ x: 0 }}
            exit={{ x: -window.outerWidth }}
            key={index}
          >
            {data?.results
              .slice(1)
              .slice(6 * index, 6 * index + 6)
              .map((movie) => (
                <MovieCard
                  onClick={() => onMovieModalOpen(String(movie.id))}
                  key={movie.id}
                  bgImg={formatImgUrl(movie?.backdrop_path, "w500")}
                  layoutId={String(movie.id)}
                  variants={parentVariants}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                >
                  <MovieCardHover variants={childVariants}>
                    {movie.title}
                  </MovieCardHover>
                </MovieCard>
              ))}
          </SliderBox>
        </AnimatePresence>
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
