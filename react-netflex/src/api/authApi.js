import axios from "axios";

const baseURL = "http://localhost:8080";

const serverClient = axios.create({ baseURL });

export const signUp = async (member) => {
	try {
		const url = "/auth-api/sign-up";
		const res = await serverClient.post(url, member);

		return res.data;
	} catch (e) {
		console.log(e.response.data);
		alert(e.response.data);
	}
};

export const logIn = async (member) => {
	try {
		const url = `/auth-api/log-in/${member.id}/${member.password}`;
		const res = await serverClient.get(url);

		return res.data;
	} catch (e) {
		console.log(e.response.data);
		alert(e.response.data);
	}
};
