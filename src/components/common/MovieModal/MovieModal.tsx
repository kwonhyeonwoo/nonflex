import { MoviesData } from "movie";
import { BtnWrapper, CloseBtn, InfoWrapper, LikedBtn, Modal, MovieImg, MovieTitle, PlayBtn, TitleWrapper } from "./css";
import { makeImage } from "../../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";

type Props = {
    data: MoviesData;
    onModalClose: () => void;
}

const MovieModal = ({ data, onModalClose }: Props) => {
    console.log('data', data.poster_path)
    return (
        <Modal>
            <CloseBtn onClick={onModalClose}>
                <FontAwesomeIcon icon={faXmark} />
            </CloseBtn>
            <MovieImg url={makeImage(data.poster_path)}>
                <TitleWrapper>
                    <MovieTitle>{data.original_title}</MovieTitle>
                    <BtnWrapper>
                        <PlayBtn>
                            <FontAwesomeIcon icon={faPlay} /> 재생</PlayBtn>
                        <LikedBtn>
                            <FontAwesomeIcon icon={faHeart} />
                        </LikedBtn>
                    </BtnWrapper>
                </TitleWrapper>
            </MovieImg>
            <InfoWrapper>
                <p className="date">{data.release_date}</p>
                <p className="overview">{data.overview}</p>
            </InfoWrapper>
        </Modal>
    )
};

export default MovieModal;