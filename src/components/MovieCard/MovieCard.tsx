import  {  type ReactNode } from 'react'
import { Card } from './style/style'
import { formatImgUrl } from '../../utils/utils';

interface Props{
  poster_path:string;
  id:string;
  children:ReactNode

}
const parentVariants = {
  rest: { scale: 1, y: 0, zIndex: 1 },
  hover: { scale: 1.5, y: -32, zIndex: 99, transition: { duration: 0.2 } },
};
  
const MovieCard = ({ poster_path, id, children }: Props) => {
  return (
    <Card
      key={id}
      bgImg={formatImgUrl(poster_path, "w500")}
      layoutId={String("search" + id)}
      variants={parentVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      {children}
    </Card>
  );
};

export default MovieCard