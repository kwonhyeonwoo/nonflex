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
