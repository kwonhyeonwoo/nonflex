import { motion } from "framer-motion";
import styled from "styled-components";

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
  bottom: -89px;
  font-size: 14px;
  color: white;
  opacity: 0;
  z-index: 99;
`;

export const HoverBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
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
  color: white;
  display: flex;
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
  .title {
    display: flex;
    align-items: center;
    column-gap: 9px;
  }
`;