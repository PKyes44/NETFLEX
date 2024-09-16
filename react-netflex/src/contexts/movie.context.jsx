import { createContext, useContext, useState } from "react";
import { AuthContext, useAuth } from "./auth.context";

const initMovieValue = {
	likedMovieIds: [],
	toggleLikeMovie: () => {},
	checkIsLiked: () => {},
};
export const MovieContext = createContext(initMovieValue);

export const useMovies = () => useContext(MovieContext);

export function MovieProvider({ children }) {
	const [likedMovieIds, setLikedMovieIds] = useState([]);
	const { isLoggedIn } = useAuth(AuthContext);

	const toggleLikeMovie = (movieId) => {
		if (!isLoggedIn) {
			alert("로그인하세요");
			return;
		}

		const isLiked = likedMovieIds.includes(movieId);

		let newLikedMovieIds = [];
		if (isLiked) {
			newLikedMovieIds = likedMovieIds.filter(
				(likedMovieId) => likedMovieId !== movieId
			);
		} else {
			newLikedMovieIds = [...likedMovieIds, movieId];
		}
		setLikedMovieIds(newLikedMovieIds);
	};
	const checkIsLiked = (movieId) => {
		return likedMovieIds.includes(movieId);
	};

	const value = {
		likedMovieIds,
		checkIsLiked,
		toggleLikeMovie,
	};

	return (
		<MovieContext.Provider value={value}>{children}</MovieContext.Provider>
	);
}
