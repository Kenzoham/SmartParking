import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendations" />
    </>
  );
}

export default Detail;
