import { useContentQuery } from "../../../hooks/queries/useContentQuery";
import Tv from "../Tv"

const TvContainer = () => {
  const { data } = useContentQuery("tv", "airing_today");
  return (
    <Tv data={data}/>
  )
}

export default TvContainer