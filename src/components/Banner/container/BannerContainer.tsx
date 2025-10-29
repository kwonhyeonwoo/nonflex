import { useCallback } from 'react'
import Banner from '../Banner';
import { useNavigate } from 'react-router-dom';
import { useMovieStore } from '../../../store/useMovieStore';
interface Props {
  imgUrl: string;
  title: string | undefined;
  overView: string | undefined;
  id:string;
}
const BannerContainer = ({
    imgUrl,
    title,
    overView,
    id,
}:Props) => {
    const router = useNavigate();
    const {setMovieKey} = useMovieStore();
    const handleBannerModal = useCallback(
      () => {
        setMovieKey("nowPlaying")
        return router(`/movies/${id}`)
      },
      [id],
    )
    
  return (
    <Banner
      onBannerModal={handleBannerModal}
      imgUrl={imgUrl}
      title={title}
      overView={overView}
    />
  );
}

export default BannerContainer