import InfoDetailBtn from '../InfoDetailBtn/InfoDetailBtn';
import PlayBtn from '../PlayBtn/PlayBtn';
import { BannerWrapper, ButtonWrapper, OverView, Title } from './style/style';

interface Props{
    imgUrl:string;
    title:string | undefined;
    overView:string | undefined;
    onBannerModal:()=>void;
}

const Banner = ({ imgUrl, title, overView, onBannerModal }: Props) => {
  return (
    <BannerWrapper img={imgUrl}>
      <Title>{title}</Title>
      <OverView>{overView}</OverView>
      <ButtonWrapper>
        <PlayBtn />
        <InfoDetailBtn onBannerModal={onBannerModal} />
      </ButtonWrapper>
    </BannerWrapper>
  );
};

export default Banner