import React from 'react'
import { Button, Movie, Slider, SliderWrapper } from './css'
import { MoviesData } from 'movie'

type Props = {
    movies?: MoviesData[];
    index: number;
    sliderWidth: number;
    onNextBtn: () => void;
    onPrevBtn: () => void;
}

const MovieSlider = ({
    movies,
    index,
    sliderWidth,
    onNextBtn,
    onPrevBtn
}: Props) => {
    return (
        <Slider>
            <Button
                onClick={onNextBtn}
            >color</Button>

            <SliderWrapper
                style={{
                    transform: `translateX(-${index * sliderWidth}px)`,
                    transition: 'transform 0.3s ease-in-out',
                }}
            >
                {movies?.map((item, idx) => (
                    <Movie>{idx}</Movie>
                ))}
                {/* 추가 아이템들 */}
            </SliderWrapper>
        </Slider>
    )
}

export default MovieSlider