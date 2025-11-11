import { useMatch } from "react-router-dom";
import { useContentQuery } from "../../../hooks/queries/useContentQuery";
import Tv from "../Tv"
import { useContentStore } from "../../../store/useContentStore";

const TvContainer = () => {
  const { data } = useContentQuery("tv", "airing_today");
  const {id} = useContentStore();
  const tvMatch = useMatch(`/tv/movies/${id}`);
  return (
    <Tv data={data} tvMatch={tvMatch?.pathname}/>
  )
}

export default TvContainer