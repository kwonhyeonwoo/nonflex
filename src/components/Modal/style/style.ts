import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
`;

export const ModalCard = styled(motion.div)`
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    position: relative;
    top: 9%;
`;

export const MovieImg = styled.div<{ img: string }>`
  width: 100%;
  height: 450px;
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.img});
`;

export const TitleBox = styled.div`
    width: 100%;
    padding: 0px 40px;
    box-sizing: border-box;
    position:absolute;
    top:258px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`
export const AddBtn = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    color:white;
    font-size: 50px;
  }
`;
export const MovieTitle = styled.h3`
  font-size: 50px;
  font-weight: 700;
  color: white;
`;


export const CloseButton = styled.button`
    width: 40px;
    height:40px;
    border-radius: 50%;
    background-color: #181818;
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    top:10px;
    right:20px;
    svg{
        color:white;
    }
`

export const OverView = styled.div`
  flex: 1;
  background-color: #181818;
  padding: 20px 45px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const OpenDate = styled.p`
    color:#D2D2D2;
`

export const OverViewText = styled.p`
  color: white;
  font-size: 18px;
  line-height: 150%;
`;  