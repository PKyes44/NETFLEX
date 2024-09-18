import { createContext, useContext, useState } from "react";

const initAuthValue = {
	isLoggedIn: false,
	currentMember: null,
	logInByMember: () => {},
	logOut: () => {},
};
export const AuthContext = createContext(initAuthValue);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
	const [currentMember, setCurrentMember] = useState(null);
	const isLoggedIn = !!currentMember;

	console.log("currentMember:", currentMember);

	const logInByMember = (member) => {
		setCurrentMember(member);
	};
	const logOut = () => {
		setCurrentMember(null);
	};

	const value = {
		isLoggedIn,
		currentMember,
		logInByMember,
		logOut,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}
