import React, { useEffect, useState } from 'react'
import MovieSlider from '../MovieSlider'
import { MoviesData } from 'movie'

type Props = {
    movies?: MoviesData[];
}

const MovieSliderContainer = ({ movies }: Props) => {
    const [index, setIndex] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(window.innerWidth);

    const handleNextBtn = () => {
        if (movies) {
            setIndex((prevIdx) =>
                prevIdx < movies.length - 1 ? prevIdx + 1 : prevIdx
            );
        }
    };
    const handlePrevBtn = () => {
        if (index > 0) {
            setIndex((prevIndex) => prevIndex - 1);
        }
    };
    return (
        <MovieSlider
            movies={movies}
            index={index}
            sliderWidth={sliderWidth}
            onNextBtn={handleNextBtn}
            onPrevBtn={handlePrevBtn}
        />
    )
}

export default MovieSliderContainer