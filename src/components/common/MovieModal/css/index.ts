import styled from "styled-components";

export const Modal = styled.div`
    width:881px;
    z-index: 1;
    position:absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background-color: rgba(128,128,128,0.6);

`;

export const MovieImg = styled.div<{ url: string }>`
    width:100%;
    height:447px;
    position:relative;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)), 
        url(${({ url }) => url});
    background-size: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const CloseBtn = styled.button`
    width:35px;
    height:35px;
    border-radius: 50%;
    z-index:2;
    border:none;
    position:absolute;
    right:10px;
    top:4px;
    background-color: rgba(0,0,0,0.6);
    svg{
        color:white;
    }
    &:hover{
        background-color: rgba(0,0,0,0.4);
        svg{
            color:rgba(255,255,255,0.4)
        }
}`;


export const TitleWrapper = styled.div`
    position:absolute;
    padding:0px 20px;
    bottom:60px;
`;
export const MovieTitle = styled.h1`
    color:white;
    font-weight: 700;
    font-size:28px;
    margin-bottom: 11px;
`
export const BtnWrapper = styled.div`
    display: flex;
    column-gap: 22px;
`
export const PlayBtn = styled.button`
    padding:14px;
    background-color: white;
    color:black;
    font-size: 19px;
    font-weight: 700;
    border:none;
    border-radius: 5px;
    display: flex;
    column-gap: 4px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .2s ease-in-out;;

    svg{
        font-size:19px;
    }
    &:hover{
        transition: all .2s ease-in-out;;
        background-color: rgba(255,255,255,0.8);
        color:rgba(0,0,0,0.7)
    }
`;

export const LikedBtn = styled.button`
        border:1px solid white;
        border-radius:50%;
        width:50px;
        height:50px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:25px;
        transition:all .2s ease-in-out;
        cursor: pointer;
        svg{
            transition:all .2s ease-in-out;
            color:white;
        }
        &:hover{
            transition:all .2s ease-in-out;
            border:1px solid red;
            svg{
            transition:all .2s ease-in-out;

                color:red;
            }
        }
`;

export const InfoWrapper = styled.div`
    padding:14px;
    display: flex;
    row-gap: 8px;
    flex-direction: column;
    .date{
        color:rgba(255,255,255,0.5);
    }
    .overview{
        line-height: 150%;
    }
`;
