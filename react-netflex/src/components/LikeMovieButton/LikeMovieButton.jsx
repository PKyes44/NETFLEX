import { useQuery } from "@tanstack/react-query";
import { FaHeart } from "react-icons/fa";
import { checkIsLikedMovie } from "../../api/movieApi";
import { useEffect } from "react";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { checkIsLikedMovie, likeMovie, unlikeMovie } from "../../api/movieApi";

function LikeMovieButton({ movieId }) {
	const { data: isLiked } = useQuery({
		initialData: false,
		queryKey: ["isLikedMovie", { movieId }],
		queryFn: (movieId) => checkIsLikedMovie(movieId),
	});

	useEffect(() => {
		console.log("isLiked: ", isLiked);
	}, [isLiked]);

	// const queryClient = useQueryClient();
	// const queryKey = ["isLikedMovie", { movieId }];
	// const { data: isLiked } = useQuery({
	// 	initialData: false,
	// 	queryKey,
	// 	queryFn: (movieId) => checkIsLikedMovie(movieId),
	// });
	// const { mutateAsync: likeMovieMutationFn } = useMutation({
	// 	mutationFn: (movieId) => likeMovie(movieId),
	// });
	// const { mutateAsync: unlikeMovieMutationFn } = useMutation({
	// 	mutationFn: (movieId) => unlikeMovie(movieId),
	// });

	// const handleClickLikeButton = async () => {
	// 	console.log(isLiked);
	// 	if (isLiked) {
	// 		await unlikeMovieMutationFn(movieId);
	// 	} else {
	// 		await likeMovieMutationFn(movieId);
	// 	}

	// 	queryClient.invalidateQueries({ queryKey, exact: true });
	// };

	return (
		<button
			// onClick={handleClickLikeButton}
			className={
				`bg-gray-300 bg-opacity-30 w-14 h-14 rounded-full flex justify-center items-center border transition-all duration-500 
				`
				// 	${
				// 	isLiked ? "text-red-500/90" : "text-white/70"
				// }
			}
		>
			<FaHeart />
		</button>
	);
}

export default LikeMovieButton;
