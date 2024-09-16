import { createContext, useContext, useState } from "react";

const initAuthValue = {
	isLoggedIn: false,
	currentMember: null,
	processOnSignUp: () => {},
	processOnLogIn: () => {},
};
export const AuthContext = createContext(initAuthValue);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
	const [members, setMembers] = useState([]);
	const [currentMember, setCurrentMember] = useState(null);
	const isLoggedIn = !!currentMember;

	const processOnSignUp = (signUpMemberData) => {
		setMembers((prevMembers) => [...prevMembers, signUpMemberData]);
	};
	const processOnLogIn = (logInMemberData) => {
		const duplicateMember = members.filter((member) => {
			// true일 때 반환 존재하면 반환 같으면 true 반환
			return (
				member.id === logInMemberData.password &&
				member.password === logInMemberData.password
			);
		});
		// 겹치는 유저 데이터가 없을 경우 로그인 실패
		if (duplicateMember.length === 0) {
			return "로그인 실패";
		}
		alert("로그인 성공");
		setCurrentMember(duplicateMember[0]);
		console.log(duplicateMember[0]);
		return "로그인 성공";
	};

	const value = {
		isLoggedIn,
		currentMember,
		processOnLogIn,
		processOnSignUp,
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
}
