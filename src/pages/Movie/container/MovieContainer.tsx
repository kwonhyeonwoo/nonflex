import { useMatch, useNavigate } from 'react-router-dom';
import { useContentQuery } from '../../../hooks/queries/useContentQuery';
import Movie from '../Movie'

const MovieContainer = () => {
  const { data } = useContentQuery("movie", "now_playing");
  const router = useNavigate();
  const movieMatch = useMatch("/movies/:id");
  const handleModalClose = () => router("/");
  const handleBannerModal = () => router(`/movies/${data?.results[0].id}`);
  return (
    <Movie
      data={data}
      movieMatch={movieMatch?.pathname}
      movieId={movieMatch?.params.id}
      handleBannerModal={handleBannerModal}
      onModalClose={handleModalClose}
    />
  );
}

export default MovieContainer