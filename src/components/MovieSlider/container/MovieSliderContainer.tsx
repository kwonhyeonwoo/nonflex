import { useState } from 'react'
import MovieSlider from '../MovieSlider'
import { MoviesData } from 'movie'
import { useNavigate } from 'react-router-dom';

type Props = {
    movies?: MoviesData[];
    link: string;
    title: string;
}

const MovieSliderContainer = ({ movies, title, link }: Props) => {
    const navigate = useNavigate();
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

    const handleMovieClicked = (id: number, data: MoviesData) => {
        navigate(`${link}/${id}`, { state: data });
    }

    return (
        <MovieSlider
            movies={movies}
            title={title}
            currentIdx={currentIdx}
            sliderWidth={window.innerWidth}
            onNextBtn={handleNextBtn}
            onPrevBtn={handlePrevBtn}
            onMovieClicked={handleMovieClicked}
        />
    )
}

export default MovieSliderContainer