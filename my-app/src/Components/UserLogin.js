import React from "react";
import "../styles.css";
import * as Mui from "@material-ui/core";

function UserLogin({
	setIsToDoOpen,
	setIsContactsOpen,
	setIsProsConsOpen,
	setIsAuthenticated,
}) {
	const handleSignin = (event) => {
		//Prevent page reload
		event.preventDefault();
		// todo login via the server
		alert("sign in is not supported yet, try signing up");
	};

	const handleSignup = (event) => {
		//Prevent page reload
		event.preventDefault();
		let { uname, pass } = document.forms[0];
		uname = uname.value;
		pass = pass.value;

		// send a POST request to the server to create a new user
		fetch("http://localhost:8080/user", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: uname,
				password: pass,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				// update App's state with permissions
				setIsToDoOpen(data.to_do);
				setIsContactsOpen(data.contacts);
				setIsProsConsOpen(data.pros_cons);
				setIsAuthenticated(true);
			});
	};

	return (
		<div className="app">
			<div className="login-form">
				<div className="title"> </div>
				<Mui.Box className="form">
					<form>
						<Mui.Box className="input-container">
							<label>Username </label>
							<input type="text" name="uname" required />
						</Mui.Box>
						<Mui.Box className="input-container">
							<label>Password </label>
							<input type="password" name="pass" required />
						</Mui.Box>
						<Mui.Box className="button-container">
							<input type="submit" value={"Sign In"} onClick={handleSignin} />
							<input type="submit" value={"Sign Up"} onClick={handleSignup} />
						</Mui.Box>
					</form>
				</Mui.Box>
			</div>
		</div>
	);
}
export default UserLogin;
