import styled from "styled-components";

export const PlayButton = styled.button<{ type: "play" | "info" }>`
    padding:10px 20px;
    color:${({ type }) =>
        type === "play" ? "black" : "white"
    };
    font-size:19px;
    font-weight: 700;
    display: flex;
    border-radius:5px;
    align-items: center;
    justify-content: center;
    column-gap:18px;
    border:none;
    background-color: ${({ type }) => (
        type === "play" ? "white" : "rgba(255,255,255,0.4)"
    )};
    
    &>.play-btn{
        font-size:24px
    }
    &>.info-btn{
        width: 22px;
        height:22px;
        font-size:24px;
        padding:8px;
        box-sizing: border-box;
        border-radius:50%;
        border:2px solid white;
    }
    &:hover{
        background-color: rgba(255,255,255,0.3);
    }
`