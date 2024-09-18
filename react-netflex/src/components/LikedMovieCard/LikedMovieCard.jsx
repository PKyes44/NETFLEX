/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useMovies } from "../../contexts/movie.context";
import { getMovieDetailInApi } from "../../api/movieApi";
import { GiCancel } from "react-icons/gi";

function LikedMovieCard({ movieId }) {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
	const [movieDetail, setMovieDetail] = useState("");
	const { toggleLikeMovieInContext } = useMovies();
	// const [isLiked, setIsLiked] = useState(true);
	const getMovieDetailInComponent = async (movieId) => {
		const movieDetail = await getMovieDetailInApi(movieId);
		setMovieDetail(movieDetail);
	};

	useEffect(() => {
		getMovieDetailInComponent(movieId);
	}, [movieId]);

	return (
		<>
			<img
				className="w-56 h-80"
				src={`${IMAGE_BASE_URL}/${movieDetail.poster_path}`}
				alt=""
			/>
			<div className="flex flex-row justify-between items-center">
				<span className="font-normal text-xl">{movieDetail.title}</span>
				<button onClick={() => toggleLikeMovieInContext(movieId)}>
					{/* <MdOutlineCancel /> */}
					<GiCancel size={20} />
				</button>
			</div>
		</>
	);
}

export default LikedMovieCard;
