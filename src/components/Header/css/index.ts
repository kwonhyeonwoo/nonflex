import styled from "styled-components";

export const Wrapper = styled.header<{ scroll: number }>`
    width: 100%;
    height:60px;
    position:fixed;
    background-color: ${({ scroll }) =>
        scroll > 80 ? "black" : "transparent"};
    transition:${({ scroll }) => scroll > 80 ? (
        "all .5s ease-in-out"
    ) : (
        "all .5s ease-in-out"
    )};
    padding:20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.svg`
    width:100px;
    height:30px;
    margin-right:30px;
`;

export const Items = styled.ul`
    display: flex;
    column-gap:20px;
`;

export const Item = styled.li`
    font-size:14px;
    font-weight: 400;
    position:relative;
    a{
        color:white;
    }
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
`;

export const Search = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    svg {
        color: white;
        font-size: 19px;
    }
`;

export const SearchInput = styled.input<{ isSearch: boolean }>`
    padding: 0px 8px;
    box-sizing: border-box;
    border: 1px solid white;
    color:white;
    background-color: transparent;
    height: 30px;
    outline: none;
    transition: width 0.3s ease-in-out, opacity 0.2s ease-in-out;
    width: ${(props) => (props.isSearch ? '170px' : '0')}; 
    opacity: ${(props) => (props.isSearch ? 1 : 0)}; 
`;

export const Profile = styled.div``

export const Circle = styled.div`
    width:5px;
    height:5px;
    position:absolute;
    top:20px;
    left:50%;
    right:50%;
    background-color: red;
    border-radius: 50%;
`