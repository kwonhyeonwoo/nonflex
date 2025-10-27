import { useMatch, useNavigate } from "react-router-dom";
import { useMovieQuery } from "../../../hooks/queries/useMovieQuery"
import Home from "../Home"
import { useCallback,useState } from "react";
import type { IMovieResult } from "movie";

const HomeContainer = () => {
  const { data } = useMovieQuery("nowPlaying");
  const movieMatch = useMatch('/movies/:id');
  const router = useNavigate();
  const [index, setIndex] = useState<number>(0);
  const movieResult = data?.results.find(
    (find) => String(find.id) === movieMatch?.params.id
  );
  
  const handleSlider = useCallback(() => {
    if (!data) return;
    const maxIndex = Math.ceil((data.results.length - 1) / 6) - 1;
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }, [index]);

  const handleModalClose = ()=> router('/')
  const handleMovieModalOpen = useCallback(
    (id: string) => {
        return router(`/movies/${id}`);

    },
    [router]
  );


  return (
    <Home
      data={data}
      movieMatch={movieMatch?.pathname}
      movieId={movieMatch?.params.id}
      index={index}
      movieResult={movieResult as IMovieResult}
      onModalClose={handleModalClose}
      onMovieModalOpen={handleMovieModalOpen}
      onSlider={handleSlider}
    />
  );
}

export default HomeContainer