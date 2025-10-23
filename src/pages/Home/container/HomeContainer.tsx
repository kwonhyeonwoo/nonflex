import { useMovieQuery } from "../../../hooks/queries/useMovieQuery"
import Home from "../Home"

const HomeContainer = () => {
  const { data, } = useMovieQuery("nowPlaying");
  return (
    <Home data={data} />
  );
}

export default HomeContainer