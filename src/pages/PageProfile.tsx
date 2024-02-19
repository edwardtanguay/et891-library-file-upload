import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageProfile = () => {
	const { currentUser } = useContext(AppContext);

	return (
		<div className="flex gap-2">
			<img className="w-[6rem] rounded" src="images/users/noProfilePic.jpg" />
			<div>
				<h2 className="text-2xl">{currentUser.fullName}</h2>
				<p>Login: {currentUser.login}</p>
				<p>Email: {currentUser.email}</p>
			</div>
		</div>
	);
};
