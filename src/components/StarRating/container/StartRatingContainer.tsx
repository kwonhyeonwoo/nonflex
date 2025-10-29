import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import StarRating from "../StarRating";

interface Props{
    rating:number;
}

const StartRatingContainer = ({rating}:Props) => {
    const stars  = [];
    const normalized = rating / 2; // 10점 만점을 5점 만점으로 환산

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(normalized)) {
        stars.push(<FaStar key={i} color="#FFD700" />); // 꽉 찬 별
      } else if (i - normalized < 1) {
        stars.push(<FaStarHalfAlt key={i} color="#FFD700" />); // 반 별
      } else {
        stars.push(<FaRegStar key={i} color="#FFD700" />); // 빈 별
      }
    }
  return <StarRating stars={stars} />;
}

export default StartRatingContainer;