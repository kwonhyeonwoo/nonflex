import type { JSX } from "react";

interface Props {
  stars: JSX.Element[];
}

const StarRating = ({stars}:Props) => {
  return (
   <div style={{ display: "flex", gap: "3px" }}>{stars}</div>
  )
}

export default StarRating