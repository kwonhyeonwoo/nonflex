import { Button, ButtonWrapper, Slider, SliderWrapper, Title } from './css'
import { MoviesData } from 'movie'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeImage } from '../../utils/utils';
import { Movie } from '../../core/common';

type Props = {
    movies?: MoviesData[];
    currentIdx: number;
    title: string;
    sliderWidth: number;
    onNextBtn: () => void;
    onPrevBtn: () => void;
    onMovieClicked: (id: number, data: MoviesData) => void;
}

const MovieSlider = ({
    movies,
    currentIdx,
    sliderWidth,
    title,
    onNextBtn,
    onPrevBtn,
    onMovieClicked,
}: Props) => {
    const maxIndex = movies ? Math.ceil(movies.length * 200 / sliderWidth) - 1 : 0;
    return (
        <Slider>
            <Title>{title}</Title>
            <SliderWrapper
                style={{
                    transform: `translateX(-${currentIdx * sliderWidth}px)`,
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                {movies?.map((item, idx) => {
                    return (
                        <Movie
                            onClick={() => onMovieClicked(item.id, item)}
                            url={
                                makeImage(item.poster_path, "w200")
                            }
                            key={idx}
                        >
                        </Movie>
                    )
                })}
            </SliderWrapper>
            <ButtonWrapper>
                {
                    currentIdx !== 0 &&
                    <Button onClick={onPrevBtn} style={{ left: '20px' }}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Button>
                }
                {
                    currentIdx >= maxIndex ? undefined :
                        <Button onClick={onNextBtn} style={{ right: '20px' }}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                }
            </ButtonWrapper>
        </Slider>
    )
}

export default MovieSlider