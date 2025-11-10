import {useMatch, useNavigate } from "react-router-dom";
import { formatImgUrl } from "../../utils/utils";
import { MovieCard } from "../MovieSlider/style/style";
import MovieHover from "../MovieHover/MovieHover";
import { useCallback, type SetStateAction } from "react";
import { useContentStore } from "../../store/useContentStore";
import { Grid, NoResult, Wrapper } from "./style/style";
import ModalContainer from "../Modal/container/ModalContainer";
import type { IContentResult } from "content";

interface Props {
    results: IContentResult[];
    setId:React.Dispatch<SetStateAction<string>>;
  }

const parentVariants = {
    rest: { scale: 1, y: 0, zIndex: 1 },
    hover: { scale: 1.5, y: -32, zIndex: 99, transition: { duration: 0.2 } },
  };
  

const SearchOverlay = ({ results, setId }: Props) => {
  const router = useNavigate();
  const searchMatch = useMatch("movies/:id");
  const { setContentKey } = useContentStore();
  const handleMovieModalOpen = useCallback(
    (id: string) => {
      setId(id)
      return router(`movies/${id}`);
    },

    [router, setContentKey]
  );

  return (
    <Wrapper>
      {results.length === 0 ? (
        <NoResult>검색 결과가 없습니다 😢</NoResult>
      ) : (
        <Grid>
          {results.slice(0, 12).map((item) => (
            <MovieCard
              key={item.id}
              bgImg={formatImgUrl(item.poster_path, "w500")}
              layoutId={String("search" + item.id)}
              variants={parentVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
            >
              <MovieHover
                release_date={item.release_date ?? item.first_air_date ?? ""}
                original_title={item.original_title ?? item.original_name ?? ""}
                vote_average={item.vote_average}
                id={item.id}
                onMovieModalOpen={handleMovieModalOpen}
              />
            </MovieCard>
          ))}
        </Grid>
      )}
      {searchMatch?.pathname && <ModalContainer />}
    </Wrapper>
  );
};

export default SearchOverlay;

