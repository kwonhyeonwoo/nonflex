import Search from '../Search'
import { useMatch, useNavigate } from 'react-router-dom'
import { getMovie, getSearchMovie } from '../../../api/movieApi';
import { useQuery } from 'react-query';
import { MovieData, MoviesData } from 'movie';
import { useEffect } from 'react';

const SearchContainer = () => {
    const navigate = useNavigate();
    const match = useMatch('/search/:keyword');
    const keyword = match?.params.keyword || null;

    const { data, error, isLoading } = useQuery<MovieData>(
        ['search', keyword],
        () => getSearchMovie(keyword),
        {
            enabled: !!keyword,
        }
    );

    const handleMovieClicked = (id: number, data: MoviesData) => {
        navigate(`${id}`, { state: data });
    };


    return (
        <Search
            data={data}
            isLoading={isLoading}
            onMovieClicked={handleMovieClicked}
        />
    )
}

export default SearchContainer