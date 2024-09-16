import { Link } from "react-router-dom";

function MovieCard({ movie }) {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
	return (
		<Link to={`/movies/${movie.id}`} className="block w-[275px]">
			<img
				className="object-contain aspect-video w-full"
				src={IMAGE_BASE_URL + movie.backdrop_path}
			></img>
			<h6 className="text-base mt-2">{movie.title}</h6>
		</Link>
	);
}

export default MovieCard;
