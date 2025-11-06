import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderWrapper = styled(motion.header)`
    width: 100%;
    height:80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:fixed;
    padding:8px 15px;
    box-sizing: border-box;
    z-index: 9999;
    background-color: transparent;
`

export const LeftBox = styled.div`
    display: flex;
    align-items: center;
    column-gap: 24px;
`

export const RightBox = styled.div`
    display: flex;
    align-items: center;
    position:relative;
    justify-content: flex-end;
`
export const Email = styled(motion.p)`
    color:white;
`

export const Logo = styled.svg`
  width: 95px;
  height: 25px;
  path {
    fill: ${(props) => props.theme.red};
  }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    column-gap: 20px;
    
`;


export const List = styled(motion.li)`
    font-size: 14px;
    font-weight: 400;
    position:relative;
    color:white;
`;


export const Circle = styled(motion.div)`
    width:5px;
    height:5px;
    border-radius: 50px;
    position:absolute;
    top: 18px;
    left:0;
    right:0;
    margin:0 auto;
    background-color: ${(props)=>props.theme.red};
`

export const Input = styled(motion.input)`
  transform-origin: right center;
  position:absolute;
  border:1px solid white;
  background-color:transparent;
  padding:8px 0px;
  padding-left:30px;
  box-sizing: border-box;
  color:white;
`;
export const SearchSvg = styled(motion.svg)`
    position:absolute;
    right:-5px;
    z-index:999 ;
    cursor: pointer;
`;