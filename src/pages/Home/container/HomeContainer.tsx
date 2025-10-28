import { useMatch, useNavigate } from "react-router-dom";
import { useMovieQuery } from "../../../hooks/queries/useMovieQuery"
import Home from "../Home"
import type { IMovieResult } from "movie";

const HomeContainer = () => {
  const { data } = useMovieQuery("nowPlaying", "now_playing");
  const router = useNavigate();
  const movieMatch = useMatch('/movies/:id');
  const movieResult = data?.results.find(
    (find) => String(find.id) === movieMatch?.params.id
  );
  const handleModalClose = () => router("/");
  const handleBannerModal = ()=>router(`/movies/${data?.results[0].id}`)
  return (
    <Home
      data={data}
      movieMatch={movieMatch?.pathname}
      movieId={movieMatch?.params.id}
      handleBannerModal={handleBannerModal}
      onModalClose={handleModalClose}
      movieResult={movieResult as IMovieResult}
    />
  );
}

export default HomeContainer