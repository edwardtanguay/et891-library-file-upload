import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageProfile = () => {
	const { currentUser } = useContext(AppContext);

	return (
		<>
			<h2 className="text-2xl">{currentUser.fullName}</h2>
		</>
	);
};
