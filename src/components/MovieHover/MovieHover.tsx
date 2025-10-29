import StartRatingContainer from "../StarRating/container/StartRatingContainer";
import {
  HoverBtnWrapper,
  HoverInfoWrapper,
  HoverPlayerBtn,
  InfoTitle,
  MovieCardHover,
} from "./style/style";

interface Props {
  release_date: string;
  vote_average: number;
  original_title: string;
  id: number;
  onMovieModalOpen: (id: string) => void;
}

const childVariants = {
  hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const MovieHover = ({
  release_date,
  vote_average,
  original_title,
  id,
  onMovieModalOpen,
}: Props) => {
  return (
    <MovieCardHover variants={childVariants}>
      <HoverBtnWrapper>
        <HoverPlayerBtn>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            data-icon="PlayMedium"
            data-icon-id=":ro:"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
          >
            <path
              fill="currentColor"
              d="M5 2.7a1 1 0 0 1 1.48-.88l16.93 9.3a1 1 0 0 1 0 1.76l-16.93 9.3A1 1 0 0 1 5 21.31z"
            ></path>
          </svg>
        </HoverPlayerBtn>
        <HoverPlayerBtn>
          <span className="add">+</span>
        </HoverPlayerBtn>
        <HoverPlayerBtn onClick={() => onMovieModalOpen(String(id))}>
          <img src="/assets/right-arrow.svg" alt="" />
        </HoverPlayerBtn>
      </HoverBtnWrapper>
      <HoverInfoWrapper>
        <InfoTitle>
          <p className="title">
            {release_date}
            <StartRatingContainer rating={vote_average} />
          </p>
          <p className="title">{original_title}</p>
        </InfoTitle>
      </HoverInfoWrapper>
    </MovieCardHover>
  );
};

export default MovieHover;