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

  const increase = () => {
    if (!data) return;
    const maxIndex = Math.ceil((data.results.length - 1) / 6) - 1;
    setIndex((prev) => prev === maxIndex ? 0 : prev + 1);
  };

  return (
    <Page onClick={increase}>
      <Banner img={formatImgUrl(data?.results?.[0]?.backdrop_path || "")}>
        <Title>{data?.results[0].title}</Title>
        <OverView>{data?.results[0].overview}</OverView>
      </Banner>
      <SliderWrapper>
          <AnimatePresence initial={false}>
            <SliderBox
              transition={{ type: "tween" }}
              initial={{ x: window.innerWidth  }}
              animate={{ x: 0 }}
              exit={{ x: -window.outerWidth  }}
              key={index}
            >
              {data?.results.slice(1).slice(6 * index, 6 * index + 6).map((movie) => (
                <Box 
                  key={movie.id} 
                  bgImg={formatImgUrl(movie.backdrop_path , "w500")}
                  initial={{scale:1}}
                  whileHover={{scale:1.3,y:-20,transition:{
                    delay:1,
                    duration:0.3
                  }}}
                >
                  1
                  </Box>
              ))}
            </SliderBox>
          </AnimatePresence>
        </SliderWrapper>
    </Page>
  );
}

export default Home;
