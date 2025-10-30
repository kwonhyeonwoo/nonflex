import styled from "styled-components";

export const TvPage = styled.main`
    width: 100%;
`

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  top: -150px;
  flex-direction: column;
  row-gap: 300px;
  &::after {
    content: "";
    display: block;
    visibility: hidden;
  }
`;
