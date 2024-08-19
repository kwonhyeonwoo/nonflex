import React, { useEffect, useState } from 'react'
import MovieSlider from '../MovieSlider'
import { MoviesData } from 'movie'
import { useLocation, useMatch, useNavigate } from 'react-router-dom';

type Props = {
    movies?: MoviesData[];
}

const MovieSliderContainer = ({ movies }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const match = useMatch(`/movies/:id`);
    const [currentIdx, setIndex] = useState(0);

    const handleNextBtn = () => {
        const maxIndex = movies && movies.length - 0;
        if (maxIndex && currentIdx < maxIndex) {
            setIndex(prevIdx => prevIdx + 1);
        }
    };

    const handlePrevBtn = () => {
        if (currentIdx > 0) {
            setIndex(prevIdx => prevIdx - 1);
        }
    };

    const handleMovieClicked = (id: number) => {
        navigate(`/movies/${id}`);
    }

    return (
        <MovieSlider
            movies={movies}
            currentIdx={currentIdx}
            sliderWidth={window.innerWidth}
            match={match}
            onNextBtn={handleNextBtn}
            onPrevBtn={handlePrevBtn}
            onMovieClicked={handleMovieClicked}
        />
    )
}

export default MovieSliderContainer