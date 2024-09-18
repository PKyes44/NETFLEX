import { createRoot } from "react-dom/client";
import Router from "./router";
import "./index.css";
import { TanstackQueryProvider } from "./tanstack-query/client";
import AuthProvider from "./contexts/auth.context";
import { MovieProvider } from "./contexts/movie.context";

createRoot(document.getElementById("root")).render(
	<TanstackQueryProvider>
		<AuthProvider>
			<MovieProvider>
				<Router />
			</MovieProvider>
		</AuthProvider>
	</TanstackQueryProvider>
);
