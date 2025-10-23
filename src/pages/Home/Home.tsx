import type { IMovie } from 'movie'
import { Banner, Box, OverView, Page, SliderBox, SliderWrapper, Title } from './style/style'
import { formatImgUrl } from '../../utils/utils';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Props{
  data:IMovie | undefined;
}

const Home = ({data}:Props) => {
  const [index, setIndex] = useState(0);
  const increase = () => setIndex((prev)=>prev+1);
  console.log(window.innerWidth)
  return (
    <Page onClick={increase}>
      <Banner img={formatImgUrl(data?.results[0].backdrop_path || "")}>
        <Title>{data?.results[0].title}</Title>
        <OverView>{data?.results[0].overview}</OverView>
        <SliderWrapper>
          <AnimatePresence>
            <SliderBox
              transition={{ type: "tween" }}
              initial={{ x: window.innerWidth  }}
              animate={{ x: 0 }}
              exit={{ x: -window.outerWidth  }}
              key={index}
            >
              {[1, 2, 3, 4, 5, 6].map((item, idx) => (
                <Box key={idx}>{item}</Box>
              ))}
            </SliderBox>
          </AnimatePresence>
        </SliderWrapper>
      </Banner>
    </Page>
  );
}

export default Home