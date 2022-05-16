import UserLogin from "./UserLogin";
import AppGallery from "./AppGallery";

function Welcome({
	isAuthenticated,
	setIsToDoOpen,
	setIsContactsOpen,
	setIsProsConsOpen,
	setIsAuthenticated,
	isToDoOpen,
	isContactsOpen,
	isProsConsOpen,
}) {
	return (
		<>
			{!isAuthenticated ? (
				<UserLogin
					setIsToDoOpen={setIsToDoOpen}
					setIsContactsOpen={setIsContactsOpen}
					setIsProsConsOpen={setIsProsConsOpen}
					setIsAuthenticated={setIsAuthenticated}
				/>
			) : (
				<AppGallery
					isToDoOpen={isToDoOpen}
					isContactsOpen={isContactsOpen}
					isProsConsOpen={isProsConsOpen}
				/>
			)}
		</>
	);
}

export default Welcome;
