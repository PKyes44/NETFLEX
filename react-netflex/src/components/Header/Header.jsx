import { Link } from "react-router-dom";
import { AuthContext, useAuth } from "../../contexts/auth.context";

function Header() {
	const { isLoggedIn, currentMember } = useAuth(AuthContext);

	return (
		<header className="z-10 px-10 pt-8 pb-8 flex flex-row justify-between text-white">
			<Link className="text-red-500 font-bold text-5xl" to="/">
				NETFLEX
			</Link>
			<div className="flex flex-row gap-x-5">
				{isLoggedIn ? (
					<>
						<Link className="text-xl" to="/my-page">
							MY PAGE
						</Link>
						<Link className="text-xl" to="/log-in">
							{currentMember.nickname}
						</Link>
					</>
				) : (
					<>
						<Link className="text-xl" to="/log-in">
							LOG IN
						</Link>
						<Link className="text-xl" to="/sign-up">
							SIGN UP
						</Link>
					</>
				)}
			</div>
		</header>
	);
}

export default Header;
