import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function RootLayout() {
	return (
		<div className="relative bg-black h-screen overflow-x-hidden scrollbar-hide">
			<Header />
			<Outlet />
		</div>
	);
}

export default RootLayout;
