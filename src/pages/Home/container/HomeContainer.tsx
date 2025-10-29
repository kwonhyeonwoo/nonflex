import { useMatch, useNavigate } from "react-router-dom";
import { useMovieQuery } from "../../../hooks/queries/useMovieQuery"
import Home from "../Home"

const HomeContainer = () => {
  const { data } = useMovieQuery("nowPlaying", "now_playing");
  const router = useNavigate();
  const movieMatch = useMatch('/movies/:id');
  const handleModalClose = () => router("/");
  const handleBannerModal = ()=>router(`/movies/${data?.results[0].id}`)
  return (
    <Home
      data={data}
      movieMatch={movieMatch?.pathname}
      movieId={movieMatch?.params.id}
      handleBannerModal={handleBannerModal}
      onModalClose={handleModalClose}
    />
  );
}

export default HomeContainer