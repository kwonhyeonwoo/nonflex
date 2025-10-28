import styled from "styled-components";

export const BannerWrapper = styled.div<{ img: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  padding: 0 20px;
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
  width: 50%;
  line-height: 130%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  padding-top: 30px;
  box-sizing: border-box;
`