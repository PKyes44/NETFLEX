import axios from "axios";

const baseURL = "http://localhost:8080/movie-api";

const serverClient = axios.create({ baseURL });

export const getMovieDetailInApi = async (movieId) => {
	const url = `/movie/${movieId}`;
	const res = await serverClient.get(url);

	return res.data;
};

export const getMoviesOnCategoryInApi = async (category) => {
	const url = `/movies/category/${category}`;
	const res = await serverClient.get(url);

	return res.data;
};

export const getLikedMoviesInApi = async (memberId) => {
	const url = `/liked-movies/${memberId}`;
	const res = await serverClient.get(url);

	return res.data;
};
export const checkIsLikedMovieInApi = async (data) => {
	const { memberId, movieId } = data;
	console.log(memberId, movieId);
	const url = `/liked-movies/${memberId}/${movieId}`;
	const res = await serverClient.get(url);

	return res.data;
};

export const toggleLikedMovieInApi = async (memberId, movieId) => {
	const url = `/liked-movies`;
	const res = await serverClient.put(url, { memberId, movieId });

	return res.data;
};
