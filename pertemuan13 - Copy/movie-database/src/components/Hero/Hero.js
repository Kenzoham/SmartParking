import StyledHero from "./Hero.style";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function Hero() {
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getTrendingMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    return response.data.results[2];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    const response = await axios(ENDPOINTS.DETAIL(id));
    setMovie(response.data);
  }

  return (
    <StyledHero>
      {movie && (
        <>
          <div>
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button as="a" href={trailer} target="_blank">
              Watch
            </Button>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt="placeholder"
            />
          </div>
        </>
      )}
    </StyledHero>
  );
}

export default Hero;
