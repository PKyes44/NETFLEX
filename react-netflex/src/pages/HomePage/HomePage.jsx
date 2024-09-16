// import styles from "./HomePage.module.scss";
import MoviesList from "../../components/MovieList/MoviesList";
import Page from "../../components/Page/Page";

function HomePage() {
	const CATEGORY_NOWPLAYING = "now_playing";
	const CATEGORY_TOPRATED = "top_rated";
	const CATEGORY_POPULAR = "popular";
	const CATEGORY_UPCOMING = "upcoming";

	return (
		<Page>
			<MoviesList title="현재 상영작" category={CATEGORY_NOWPLAYING} />
			<MoviesList title="평점이 높은 영화" category={CATEGORY_TOPRATED} />
			<MoviesList title="인기 있는 영화" category={CATEGORY_POPULAR} />
			<MoviesList title="곧 다가올 영화" category={CATEGORY_UPCOMING} />
		</Page>
	);
}

export default HomePage;
