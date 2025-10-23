import { motion } from "framer-motion";
import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
`;

export const Banner = styled.div<{ img: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  padding:0px 20px;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h2`
    font-size: 68px;
    font-weight: 400;
`;

export const OverView = styled.p`
    font-size: 18px;
    width:50%;
    line-height: 130%;
`

export const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    bottom:160px;
    border:1px solid red;
`;

export const SliderBox = styled(motion.div)`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(6, 1fr);
    position: absolute;
    width: 100%;
`;

export const Box = styled(motion.div)`
    height:200px;
    background-color:white;
    color:black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 40px;
`