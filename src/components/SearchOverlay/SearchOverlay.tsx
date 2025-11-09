import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { formatImgUrl } from "../../utils/utils";
import { MovieCard } from "../MovieSlider/style/style";
import MovieHover from "../MovieHover/MovieHover";
import { useCallback } from "react";
import { useContentStore } from "../../store/useContentStore";

interface Props {
    results: any[];
  }
  
const parentVariants = {
    rest: { scale: 1, y: 0, zIndex: 1 },
    hover: { scale: 1.5, y: -32, zIndex: 99, transition: { duration: 0.2 } },
  };
  

const SearchOverlay = ({ results }: Props) => {
    const router = useNavigate();
    const {setContentKey} = useContentStore();
    const handleMovieModalOpen = useCallback(
        (id: string) => {
          setContentKey("search","search")
          return router(`/movies/${id}`);
        },
        [router,setContentKey]
      );
  return (
    <Wrapper>
    {results.length === 0 ? (
      <NoResult>검색 결과가 없습니다 😢</NoResult>
    ) : (
      <Grid>
        {results.slice(0, 12).map((item) => (
          <Link
            key={item.id}
            to={`/${item.media_type}/${item.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            {/* <Card>
              <img
                src={
                  item.poster_path
                    ? formatImgUrl(item.poster_path)
                    : "/default-thumbnail.png"
                }
                alt={item.title || item.name}
              />
              <h4>{item.title || item.name}</h4>
            </Card> */}
            <MovieCard
                key={item.id}
                bgImg={formatImgUrl(item.poster_path, "w500")}
                layoutId={String("search" + item.id)}
                variants={parentVariants}
                initial="rest"
                animate="rest"
                whileHover="hover"
            >
                <MovieHover
                release_date={
                    item.release_date ?? item.first_air_date ?? ""
                  }
                  original_title={
                    item.original_title ?? item.original_name ?? ""
                  }
                  vote_average={item.vote_average}
                  id={item.id}
                  onMovieModalOpen={handleMovieModalOpen}
                />
            </MovieCard>
          </Link>
        ))}
      </Grid>
    )}
  </Wrapper>
  );
};

export default SearchOverlay;

const Wrapper = styled.div`
  width: 100%;
  padding: 80px 40px;
  background-color: #141414;
  min-height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    border-radius: 10px;
  }
  h4 {
    font-size: 14px;
    margin-top: 8px;
    color: #fff;
  }
`;

const NoResult = styled.p`
  color: #aaa;
  text-align: center;
  margin-top: 50px;
`;