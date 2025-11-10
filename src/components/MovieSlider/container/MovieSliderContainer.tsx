import { useNavigate } from 'react-router-dom';
import { useContentQuery } from '../../../hooks/queries/useContentQuery'
import MovieSlider from '../MovieSlider'
import { useCallback, useState } from 'react';
import { useContentStore } from '../../../store/useContentStore';

interface Props{
    title:string;
    category:"movie" | "tv";
    type:string;
}

const MovieSliderContainer = ({title,category,type}:Props) => {
    const router = useNavigate();
    const { data } = useContentQuery(category, type);
    const {setContentKey} = useContentStore();
    const [index, setIndex] = useState<number>(0)
    const [sliderType, setSliderType] = useState<string>("next");
    const handleSlider = useCallback(
      (type:"next" | "prev") => {
        if (!data || !data.results || data.results.length === 0) {
          return;
        }
        const maxIndex = Math.ceil((data.results.length - 1) / 6) - 1;
        if (type === "next") {
            setSliderType("next");
            setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        } else if(type === 'prev') {
            setSliderType('prev')
            setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
        }
      },
      [data,sliderType],
    )
    
    const handleMovieModalOpen = useCallback(
      (id: string) => {
        console.log('tq',type)
        setContentKey(category,type)
        return router(`/movies/${id}`);
      },
      [router,setContentKey,category,type]
    );
  return (
    <MovieSlider
      data={data}
      title={title}
      index={index}
      sliderType={sliderType}
      type={type}
      handleSlider={handleSlider}
      onMovieModalOpen={handleMovieModalOpen}
    />
  );
}

export default MovieSliderContainer;