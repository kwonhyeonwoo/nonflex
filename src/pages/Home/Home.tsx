import type { IMovie } from 'movie'
import { Banner, Box, OverView, Page, SliderBox, SliderWrapper, Title } from './style/style'
import { formatImgUrl } from '../../utils/utils';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

interface Props{
  data:IMovie | undefined;
}

const Home = ({data}:Props) => {
  const [index, setIndex] = useState(0);
  const increase = () => setIndex((prev)=>prev+1);
  const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,19,20,1,1,1,1,]
  const [slider,setSlider] = useState(1);
  const onClick = ()=>{
      setSlider((prev)=> prev < items.length ? -(2 * window.innerWidth)+38 : prev);
      console.log('slider',slider)
  }
  console.log(items.length)

  return (
    <Page onClick={onClick}>
      <Banner img={formatImgUrl(data?.results[0].backdrop_path || "")}>
        <Title>{data?.results[0].title}</Title>
        <OverView>{data?.results[0].overview}</OverView>
        {/* <SliderWrapper>
          <AnimatePresence>
            <SliderBox
              transition={{ type: "tween" }}
              initial={{ x: window.innerWidth  }}
              animate={{ x: 0 }}
              exit={{ x: -window.outerWidth  }}
              key={index}
            >
              {[1, 2, 3, 4, 5, 6,7,8,9].map((item, idx) => (
                <Box key={idx}>{item}</Box>
              ))}
            </SliderBox>
          </AnimatePresence>
        </SliderWrapper> */}
        <SlideWrapper>
          <SlideBox x={String(slider)}>
            {items.map((item,idx)=>(
              <Card key={idx}>{item}</Card>
            ))}
          </SlideBox>
        </SlideWrapper>
      </Banner>
    </Page>
  );
}

export default Home;

const SlideWrapper = styled.div`
  width: 100%;
  border:1px solid blue;
  overflow: hidden;
`;

const SlideBox = styled.div<{x:string}>`
    display: flex;
    border:2px solid red;
    column-gap: 10px;
    padding:10px 0px;
    transform: translateX(${(props)=>`${props.x}px`});
    transition:all .2s ease-in-out;
`;

const Card = styled.div`
  flex: 0 0 calc((100% - 10px * 5) / 6); /* 6개 보이도록 너비 계산 */
  height: 250px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color:black;
`