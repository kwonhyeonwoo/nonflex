import styled from "styled-components";

export const Title = styled.div`
    font-size: 48px;
    color:white;
    font-weight: 700;
`

export const Slider = styled.div`
    width: 100%;
    height:300px;
    margin-top:66px;
    position:relative;
    display: flex;
    flex-direction: column;
    z-index:1;
    overflow-x: hidden;
`;

export const SliderWrapper = styled.div`
    display: flex;
    width: max-content; 
    position: relative;
    margin-top: auto;
    transition: transform 0.1s ease-in-out;  
`;

export const Movie = styled.div<{ url: string }>`
     width: 300px;
    height: 200px;
    background-image: url(${({ url }) => url});
    background-size: cover;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        transform: translateY(-30px);
        top: -30px;
        scale:1.2
    }
`;


export const Button = styled.button`
    width:50px;
    height:50px;
    border-radius: 50%;
    border:none;
    background-color: rgba(255,255,255,0.9);
    transition:all .2s ease-in-out;
    position:absolute;
    cursor: pointer;
    &:hover{
        transition:all .2s ease-in-out;
        background-color: rgba(255,255,255,0.6);
    }
    
`
export const ButtonWrapper = styled.div`
    top:180px;
    position:absolute;
    width:100%;
`