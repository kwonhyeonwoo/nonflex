import { MovieData, MoviesData } from "movie"
import { Main, Section, Wrapper, Title } from "./css";
import { makeImage } from "../../utils/utils";
import { Movie } from "../../core/common";
import { Outlet } from "react-router-dom";

type Props = {
    data?: MovieData;
    isLoading: boolean;
    onMovieClicked: (id: number, data: MoviesData) => void;
}

const Search = ({ data, isLoading, onMovieClicked }: Props) => {
    return (
        <Main>

            <Section>
                <Title>Movie Search Lists</Title>
                <Wrapper>
                    {data?.results.map((item, idx) => (
                        <Movie
                            onClick={() => onMovieClicked(item.id, item)}
                            url={
                                makeImage(item.poster_path, "w200")
                            }
                            key={idx}
                        >
                        </Movie>


                    ))}
                </Wrapper>
            </Section>
            <Outlet />

        </Main>
    )
}



export default Search


// 검색
// https://api.themoviedb.org/3/search/movie?api_key=ae98cf1e5568a662263e277b893ef127&query=On
// https://api.themoviedb.org/3/movie/top_rated?api_key=ae98cf1e5568a662263e277b893ef127

//인기있는 티비
// https://api.themoviedb.org/3/tv/popular

//평점 높은 티비 
// https://api.themoviedb.org/3/tv/top_rated

// 현재 방영중인 티비
// https://api.themoviedb.org/3/tv/on_the_air


// 오늘 개봉하는 티비
// https://api.themoviedb.org/3/tv/airing_today