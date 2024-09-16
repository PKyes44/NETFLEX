import { getMovieDetail } from "../../api/movieApi";

async function movieDetailPageLoader({ params }) {
  const { movieId } = params;
  const movie = await getMovieDetail(movieId);

  return movie;
}

export default movieDetailPageLoader