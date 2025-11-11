import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)<{ bgImg: string }>`
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
    background-color: red;
    cursor: pointer;
    &:first-child {
        transform-origin: left center;
    }
    &:last-child {
        transform-origin: right center; 
    }
`;
