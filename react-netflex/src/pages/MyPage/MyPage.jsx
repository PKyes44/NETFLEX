import Page from "../../components/Page/Page";
import { MovieContext, useMovies } from "../../contexts/movie.context";

function MyPage() {
	const { toggleLikeMovie, likedMovieIds } = useMovies(MovieContext);
	return (
		<Page>
			<h1>MYPAGE</h1>
			<section>
				<h2>좋아요를 누른 영화 목록</h2>
				<ul>
					{likedMovieIds.map((movieId) => (
						<li key={movieId}>
							<span>영화 {movieId}</span>
							<button onClick={() => toggleLikeMovie(movieId)}>
								좋아요 취소하기
							</button>
						</li>
					))}
				</ul>
			</section>
		</Page>
	);
}

export default MyPage;
