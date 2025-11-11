import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 80px 40px;
  background-color: #141414;
  min-height: 100vh;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    border-radius: 10px;
  }
  h4 {
    font-size: 14px;
    margin-top: 8px;
    color: #fff;
  }
`;

export const NoResult = styled.p`
  color: #aaa;
  text-align: center;
  margin-top: 50px;
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
    transform-origin: left center;
  }

  &:last-child {
    transform-origin: right center;
  }
`;