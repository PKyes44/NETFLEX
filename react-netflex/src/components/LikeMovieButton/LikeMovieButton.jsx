/* eslint-disable react-hooks/exhaustive-deps */
import { FaHeart } from "react-icons/fa";
import { useMovies } from "../../contexts/movie.context";

function LikeMovieButton({ movieId }) {
	const { toggleLikeMovieInContext, likedMovieIds } = useMovies();
	return (
		<button
			onClick={() => toggleLikeMovieInContext(movieId)}
			className={`bg-gray-300 bg-opacity-30 w-14 h-14 rounded-full flex justify-center items-center border transition-all duration-500
				${
					likedMovieIds.find(
						(thisMovieId) => thisMovieId === movieId
					) !== undefined
						? "text-red-500/90"
						: "text-white/70"
				}
				`}
		>
			<FaHeart />
		</button>
	);
}

export default LikeMovieButton;
