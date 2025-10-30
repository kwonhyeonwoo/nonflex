import { useCallback } from 'react'
import Banner from '../Banner';
import { useNavigate } from 'react-router-dom';
import { useContentStore } from '../../../store/useContentStore';
interface Props {
  imgUrl: string;
  title: string | undefined;
  overView: string | undefined;
  id: string;
  category: "movie" | "tv";
  contentKey:string;
}
const BannerContainer = ({
    imgUrl,
    title,
    overView,
    id,
    category,
    contentKey
}:Props) => {
    const { setContentKey,  } = useContentStore();
    const router = useNavigate();
    const handleBannerModal = useCallback(() => {
      setContentKey(category, contentKey);
      console.log('category',category)
      console.log('contentKey',contentKey)
      return router(`/movies/${id}`);
    }, [router,category, contentKey, id,setContentKey]);
    
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