import styled from "styled-components";

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