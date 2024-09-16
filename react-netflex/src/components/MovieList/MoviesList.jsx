import { getMoviesOnCategory } from "../../api/movieApi";
import MovieCard from "../MovieCard/MovieCard";
import { useQuery } from "@tanstack/react-query";

function MoviesList({ title, category }) {
	const { data: moviesOnCategory } = useQuery({
		initialData: [],
		queryKey: ["movies", { category }],
		queryFn: () => getMoviesOnCategory(category),
	});

	return (
		<section className="w-full flex flex-col gap-y-5 text-white mb-20">
			<h2 className="text-2xl">{title}</h2>
			<ul className="w-screen overflow-x-auto flex flex-row gap-x-5 justify-start -ml-5 pl-5 scrollbar-hide">
				{moviesOnCategory.map((movie) => {
					return (
						<li key={movie.id}>
							<MovieCard movie={movie} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default MoviesList;
