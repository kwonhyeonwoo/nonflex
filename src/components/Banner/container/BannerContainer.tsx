import React, { useCallback } from 'react'
import Banner from '../Banner';
import { useNavigate } from 'react-router-dom';
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
    const handleBannerModal = useCallback(
      () => {
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