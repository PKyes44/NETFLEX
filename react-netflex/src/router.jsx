import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import HomePage from "./pages/HomePage/HomePage";
import RootLayout from "./layouts/RootLayout";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/Loginpage/LoginPage";
import MyPage from "./pages/MyPage/MyPage";

const routes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/movies/:movieId",
				element: <MovieDetailPage />,
			},
			{
				path: "/log-in",
				element: <LoginPage />,
			},
			{
				path: "/sign-up",
				element: <SignUpPage />,
			},
			{
				path: "/my-page",
				element: <MyPage />,
			},
		],
	},
];
const router = createBrowserRouter(routes);

export function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
