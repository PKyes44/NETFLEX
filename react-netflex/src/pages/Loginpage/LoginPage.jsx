import { useRef } from "react";
import { logIn } from "../../api/authApi";
import { useAuth } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const navigate = useNavigate();
	const { logInByMember } = useAuth();
	const idInputRef = useRef(null);
	const passwordInputRef = useRef(null);

	const handleClickLoginButton = async (event) => {
		event.preventDefault();

		const id = idInputRef.current.value;
		const password = idInputRef.current.value;

		if (id.length === 0 || password.length === 0) return;

		const responseMember = await logIn({ id, password });
		logInByMember(responseMember);
		navigate("/");
	};

	return (
		<section className="w-full mt-10 flex items-stretch justify-center">
			<form
				onSubmit={handleClickLoginButton}
				className=" flex flex-col justify-center items-center gap-y-6 text-white font-bold"
			>
				<h1 className=" text-white text-4xl font-bold">
					Log In to <span className="text-red-500">NETFLEX</span>
				</h1>
				<fieldset className=" flex flex-col gap-y-6 text-sm font-normal items-center">
					<legend className="-ml-[9999px]">로그인 양식 폼</legend>
					<div className="flex-col flex gap-y-2">
						<label htmlFor="id">아이디</label>
						<input
							id="id"
							className="w-[400px] py-2 px-3 text-black border rounded-md"
							type="text"
							ref={idInputRef}
						/>
					</div>
					<div className="flex-col flex gap-y-2">
						<label htmlFor="password">비밀번호</label>
						<input
							id="password"
							className="w-[400px] py-2 px-3 text-black border rounded-md"
							type="password"
							ref={passwordInputRef}
						/>
					</div>
					<div className="flex items-center justify-center mt-5">
						<button className="w-[400px] bg-red-500 border border-red-500 py-3 rounded-md text-base">
							로그인
						</button>
					</div>
				</fieldset>
			</form>
		</section>
	);
}

export default LoginPage;
