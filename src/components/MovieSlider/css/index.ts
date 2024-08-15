import styled from "styled-components";

export const Slider = styled.div`
    width: 100%;  
    height: 300px;
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    overflow: hidden;
`;

export const SliderWrapper = styled.div`
    display: flex;
    width: max-content; 
    transition: transform 0.3s ease-in-out;  /* 부드러운 이동을 위한 트랜지션 */

`;

export const Movie = styled.div`
    width: 300px;
    height: 200px;
    background-color: white;
    color: blue;
    border: 1px solid red;
    flex-shrink: 0;  
`;

export const Button = styled.button`
    border:none;
    color:red;
    width: 100px;
    height:100px;
    cursor: pointer;
`