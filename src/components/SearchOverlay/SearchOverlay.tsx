import {useMatch, useNavigate } from "react-router-dom";
import MovieHover from "../MovieHover/MovieHover";
import { useCallback, type SetStateAction } from "react";
import { useContentStore } from "../../store/useContentStore";
import { Grid,NoResult, Wrapper } from "./style/style";
import ModalContainer from "../Modal/container/ModalContainer";
import type { IContentResult } from "content";
import MovieCard from "../MovieCard/MovieCard";

interface Props {
    results: IContentResult[];
    setId:React.Dispatch<SetStateAction<string>>;
  }

const SearchOverlay = ({ results, setId }: Props) => {
  const router = useNavigate();
  const searchMatch = useMatch("movies/:id");
  const { setContentKey } = useContentStore();
  const handleMovieModalOpen = useCallback(
    (id: string) => {
      setId(id)
      setContentKey("search",id)
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
            <MovieCard id={String(item.id)} poster_path={item.poster_path}>
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

