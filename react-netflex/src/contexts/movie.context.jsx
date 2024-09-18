import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth.context";
import { getLikedMoviesInApi, toggleLikedMovieInApi } from "../api/movieApi";

const initMovieValue = {
	likedMovieIds: [],
	toggleLikeMovieInContext: () => {},
};
export const MovieContext = createContext(initMovieValue);

export const useMovies = () => useContext(MovieContext);

export function MovieProvider({ children }) {
	const [likedMovieIds, setLikedMovieIds] = useState([]);
	const { isLoggedIn, currentMember } = useAuth();

	const toggleLikeMovieInContext = async (movieId) => {
		if (!isLoggedIn) {
			alert("로그인하세요");
			return;
		}

		if (
			likedMovieIds.find((thisMovieId) => thisMovieId === movieId) ===
			undefined
		) {
			setLikedMovieIds((prevLikedMovieIds) => {
				return [...prevLikedMovieIds, movieId];
			});
		} else {
			setLikedMovieIds((prevLikedMovieIds) => {
				const newLikedMovieIds = prevLikedMovieIds.filter(
					(thisMovieId) => thisMovieId !== movieId
				);
				return newLikedMovieIds;
			});
		}

		await toggleLikedMovieInApi(currentMember.id, movieId);
	};

	useEffect(() => {
		if (currentMember === null) return;
		(async () =>
			setLikedMovieIds(await getLikedMoviesInApi(currentMember.id)))();
	}, [currentMember]);

	const value = {
		likedMovieIds,
		toggleLikeMovieInContext,
	};

	return (
		<MovieContext.Provider value={value}>{children}</MovieContext.Provider>
	);
}
