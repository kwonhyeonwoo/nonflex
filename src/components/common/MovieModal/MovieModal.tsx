import { MoviesData } from "movie";
import { BtnWrapper, CloseBtn, InfoWrapper, LikedBtn, Modal, MovieImg, MovieTitle, TitleWrapper } from "./css";
import { makeImage } from "../../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlay, faHeart } from "@fortawesome/free-solid-svg-icons";
import PlayBtn from "../PlayBtn/PlayBtn";

type Props = {
    data: MoviesData;
    onModalClose: () => void;
}

const MovieModal = ({ data, onModalClose }: Props) => {
    return (
        <Modal>
            <CloseBtn onClick={onModalClose}>
                <FontAwesomeIcon icon={faXmark} />
            </CloseBtn>
            <MovieImg url={makeImage(data?.poster_path)}>
                <TitleWrapper>
                    <MovieTitle>{data?.original_title}</MovieTitle>
                    <BtnWrapper>
                        <PlayBtn type="play" />
                        <LikedBtn>
                            <FontAwesomeIcon icon={faHeart} />
                        </LikedBtn>
                    </BtnWrapper>
                </TitleWrapper>
            </MovieImg>
            <InfoWrapper>
                <p className="date">{data?.release_date}</p>
                <p className="overview">{data?.overview}</p>
            </InfoWrapper>
        </Modal>
    )
};

export default MovieModal;