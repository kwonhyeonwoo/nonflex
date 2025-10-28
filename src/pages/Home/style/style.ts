import { motion } from "framer-motion";
import styled from "styled-components";

export const Page = styled.main`
    width: 100%;
`;

export const SliderWrapper = styled.div`
  position: relative; 
  display: flex;
  top:-150px;
  flex-direction: column;
  row-gap: 300px;
  &::after {
    content: '';
    display: block;
    visibility: hidden;
  }
`;
export const ModalWrapper = styled(motion.div)`
    position: fixed;
    width: 100%;
    height:100vh;
    top:0;
    background-color: rgba(0,0,0,0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
`

export const ModalCard = styled(motion.div)`
    width: 60%;
    position:relative;
    top: 10%;
    border-radius: 10px;
    border:1px solid red;
`

export const MovieImg = styled.div<{img:string}>`
    width: 100%;
    height:450px;
    background-size: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-position: center;
     background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
     url(${(props) => props.img});
`

export const TitleBox = styled.div`
    padding:0px 40px;
    box-sizing: border-box;
    transform: translateY(-150px);
`

export const MovieTitle = styled.h3`
    font-size: 30px;
    font-weight: 700;
    color: white;
`

