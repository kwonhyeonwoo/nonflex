import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height:100%;
    padding:100px 20px 0px 20px;
`;

export const Section = styled.section`  
    display: flex;
    flex-direction: column;
    row-gap:30px;
`;
export const Title = styled.h2`
    font-size:28px;
    font-weight: 700;
    color:white;

`
export const Wrapper = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 11px;
`;
