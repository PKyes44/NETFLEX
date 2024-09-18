import Page from "../../components/Page/Page";
import { useMovies } from "../../contexts/movie.context";
import LikedMovieCard from "../../components/LikedMovieCard/LikedMovieCard";

function MyPage() {
	const { likedMovieIds } = useMovies();

	return (
		<Page>
			<section className="flex flex-col gap-y-5">
				<h2>좋아요를 누른 영화 목록</h2>
				<ul className="flex gap-x-10 overflow-y-auto">
					{likedMovieIds.map((movieId) => {
						return (
							<li key={movieId} className="flex flex-col gap-y-4">
								<LikedMovieCard movieId={movieId} />
							</li>
						);
					})}
				</ul>
			</section>
		</Page>
	);
}

export default MyPage;
