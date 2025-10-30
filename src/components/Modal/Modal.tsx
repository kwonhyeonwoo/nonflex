import { AnimatePresence } from "framer-motion";
import { AddBtn, BtnWrapper, CloseButton, ModalCard, ModalWrapper, MovieImg, MovieTitle, OpenDate, OverView, OverViewText, TitleBox } from "./style/style";
import { formatImgUrl } from "../../utils/utils";
import PlayBtn from "../PlayBtn/PlayBtn";
import StartRatingContainer from "../StarRating/container/StartRatingContainer";
import type { IContentResult } from "content";

interface Props {
  layoutId: string | undefined;
  data: IContentResult;
  onCloseModal: () => void;
}


const Modal = ({ layoutId, data, onCloseModal }: Props) => {
  return (
    <AnimatePresence>
        <ModalWrapper layoutId={layoutId} animate={{ opacity: 1 }}>
            <ModalCard>
                <CloseButton onClick={onCloseModal}>
                    <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    data-icon="XMedium"
                    data-icon-id=":r59:"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    >
                    <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="m10.59 12-8.3-8.3 1.42-1.4L12 10.58l8.3-8.3 1.4 1.42-8.28 8.3 8.3 8.3-1.42 1.4-8.3-8.28-8.3 8.3-1.4-1.42z"
                        clip-rule="evenodd"
                    ></path>
                    </svg>
                </CloseButton>
                <MovieImg img={formatImgUrl(data.backdrop_path, "w500")} />
                <TitleBox>
                    <MovieTitle>{data.title}</MovieTitle>
                    <BtnWrapper>
                    <PlayBtn />
                    <AddBtn>
                        <span>+</span>
                    </AddBtn>
                    </BtnWrapper>
                </TitleBox>
                <OverView>
                    <StartRatingContainer rating={data.vote_average}/>
                    <OpenDate>{data.release_date}</OpenDate>
                    <OverViewText>{data.overview}</OverViewText>
                </OverView>
            </ModalCard>
        </ModalWrapper>
    </AnimatePresence>
  );
};

export default Modal