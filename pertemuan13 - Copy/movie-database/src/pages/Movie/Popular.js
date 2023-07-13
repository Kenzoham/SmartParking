import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function PopularMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);

    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movie" />
    </>
  );
}

export default PopularMovie;
