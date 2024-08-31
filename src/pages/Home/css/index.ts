import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height:100%;
`
export const Banner = styled.div<{ url: string }>`
    width: 100%;
    height:600px;
    padding:0px 20px;
    box-sizing: border-box;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)), 
        url(${({ url }) => url});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
`

export const Title = styled.h1`
    font-size:48px;
    font-weight: 700;
    color:white;
`;
export const OverView = styled.p`
    width: 50%;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color:rgba(255,255,255,0.7);
`
