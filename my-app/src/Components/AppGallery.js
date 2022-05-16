import * as React from "react";
import * as Mui from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function AppGallery({
	isToDoOpen,
	isContactsOpen,
	isProsConsOpen,
}) {
	let navigate = useNavigate();

	return (
		<>
			<Mui.Typography variant="h1">Welcome!</Mui.Typography>
			<Mui.Typography variant="h4">
				Pick an app from the app gallery
			</Mui.Typography>
			<Mui.Typography variant="h6">
				Note: If an app is disabled, you don't have the permissions to use it
			</Mui.Typography>
			<Mui.Box>
				<Mui.Button
					disabled={!isToDoOpen}
					onClick={() => navigate("/to-do")}
					color={"primary"}
				>
					To Do
				</Mui.Button>
			</Mui.Box>
			<Mui.Box>
				<Mui.Button
					disabled={!isContactsOpen}
					onClick={() => navigate("/contacts")}
					color={"primary"}
				>
					Contacts
				</Mui.Button>
			</Mui.Box>
			<Mui.Box>
				<Mui.Button
					disabled={!isProsConsOpen}
					onClick={() => navigate("/pros-cons")}
					color={"primary"}
				>
					Pros And Cons
				</Mui.Button>
			</Mui.Box>
		</>
	);
}
