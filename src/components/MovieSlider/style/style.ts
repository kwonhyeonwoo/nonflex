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

export const MovieCardHover = styled(motion.div)`
  width: 100%;
  padding: 9px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 14px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.black.lighter};
  position: absolute;
  bottom:-89px;
  font-size: 14px;
  color: white;
  opacity: 0;
  z-index: 99;
`;

export const HoverBtnWrapper= styled.div`
  display: flex;
  align-items: center;
  column-gap:8px;
`
export const HoverPlayerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  background-color: transparent;
  span {
    color: white;
    font-size: 22px;
  }
  svg {
    size: 20px;
    color: white;
  }
  img {
    width: 20px;
    height: 20px;
    transform: rotateZ(90deg);
  }
`;

export const HoverInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  color:white;
  display: flex;
  
`
export const PaginationBtnWrapper = styled.div`
  width: 100%;
  top: 100px;
  height: 80px;
  position: absolute;
  
`;

export const InfoTitle = styled.div`
  font-size: 10px;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  p {
    color: grey; // 밝은 그레이 색상, 흰색에 가까운 세련된 서브톤
  }
  .title{
    display: flex;
    align-items: center;
    column-gap: 9px;
  }
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