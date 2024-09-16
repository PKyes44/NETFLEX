import axios from "axios";

const baseURL = "http://localhost:8080";

const serverClient = axios.create({ baseURL });

export const addMovies = async (movies) => {
	const url = "/movie-api/movies";
	const res = await serverClient.post(url, movies);
	console.log("response: ", res);

	return res.data;
};

export const getMovieDetail = async (movieId) => {
	const url = `/movie-api/movie/${movieId}`;
	const res = await serverClient.get(url);
	console.log("response: ", res);

	return res.data;
};

export const getMoviesOnCategory = async (category) => {
	const url = `/movie-api/movies/category/${category}`;
	const res = await serverClient.get(url);
	console.log("response: ", res);

	return res.data;
};

export const getLikedMovies = async () => {
	const url = "/movie-api/liked-movies";
	const res = await serverClient.get(url);
	console.log("likedMovies: ", res.data);

	return res.data;
};
export const checkIsLikedMovie = async (movieId) => {
	const url = `/movie-api/liked-movies/${movieId}`;
	const res = await serverClient.get(url);
	console.log("likedMovies: ", res.data);

	return res.data;
};
