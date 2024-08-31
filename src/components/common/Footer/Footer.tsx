import React from 'react'
import { Wrapper, Flex, Title, Info, Box } from './css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Wrapper>
            <Box>
                {footerInfo.map(({ title, info, link }, idx) => (
                    <Flex key={idx}>
                        <Title>{title}</Title>
                        <Info>
                            <Link to={link}>{info}</Link>
                        </Info>
                    </Flex>
                ))}
            </Box>
        </Wrapper>
    )
}

export default Footer;

const footerInfo = [
    {
        title: "Name:",
        info: "Kwon Hyeon Woo",
        link: ""
    },
    {
        title: "Email:",
        info: "khw19980926@gmail.com",
        link: ""
    },
    {
        title: "Github:",
        info: "",
        link: ""
    },
    {
        title: "Portfolio:",
        info: "",
        link: ""
    },
    {
        title: "© 2024 Kwonhyeonwoo. All Rights Reserved.",
        info: "",
        link: ""
    },
    {
        title: "Address:",
        info: "Korea, Daegu Dong-gu",
        link: ""
    }
]

// 이름 , 직업
// 이메일 , 휴대폰번호
// 깃허브 주소
// 포트폴리오주소
// 저작권정보
// 간단한 나의 소개 
// 위치