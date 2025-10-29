import {styled} from "styled-components"

export const FooterWrapper = styled.footer`
    width: 100%;
    height:100%;
    background-color: ${(props)=>props.theme.black.darker};
`

export const FooterBox = styled.div`
    width: 1200px;
    margin:0 auto;
    padding:40px 150px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
`

export const SnsWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

export const InfoBox = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
`


export const InfoText = styled.span`
    color: #808080;
    font-size: 11px;
    font-weight: 400;
`