import { motion } from "framer-motion";
import {styled} from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    row-gap: 20px;;
    position:relative;
`

export const MovieTitle = styled.h2`
    font-size: 25px;
    font-weight: 400;
`

export const SliderBox = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  position:absolute;
  top:45px;
  box-sizing: border-box;
`;

export const MovieCard = styled(motion.div)<{ bgImg: string }>`
  height: 200px;
  background-color: white;
  color: black;
  display: flex;

  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 40px;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  &:first-child {
    transform-origin: left center; /* ⬅️ 축을 좌측으로 */
  }

  &:last-child {
    transform-origin: right center; /* ⬅️ 축을 우측으로 */
  }
`;


export const PaginationBtnWrapper = styled.div`
  width: 100%;
  top: 100px;
  height: 80px;
  position: absolute;
  
`;



export const PaginationBtn = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  position:absolute;
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);

  &:last-child{
    right:20px;

  }
`;