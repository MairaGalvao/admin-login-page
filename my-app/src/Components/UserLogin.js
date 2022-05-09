import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import * as Mui from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import UserPage from "./UserPage";
import { Link } from "react-router-dom";
import Permission from "./Permission";

//todo THATS THE LOGIN PAGE

function UserLogin() {
	const [errorMessages, setErrorMessages] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [name, setName] = React.useState();
	const [pass, setPass] = React.useState();

	// useEffect(() => {
	// 	setTimeout(() => <Permission />, 4000);
	// }, []);

	const database = [
		{
			username: "user1",
			password: "pass1",
		},
		{
			username: "user2",
			password: "pass2",
		},
	];

	const errors = {
		uname: "invalid username",
		pass: "invalid password",
	};

	const handleSubmit = (event) => {
		//Prevent page reload
		event.preventDefault();
		var { uname, pass } = document.forms[0];
		const userData = database.find((user) => user.username === uname.value);
		if (userData) {
			if (userData.password !== pass.value) {
				// Invalid password
				setErrorMessages({ name: "pass", message: errors.pass });
			} else {
				setIsSubmitted(true);
			}
		} else {
			setErrorMessages({ name: "uname", message: errors.uname });
		}
	};

	const renderErrorMessage = (name) =>
		name === errorMessages.name && (
			<div className="error">{errorMessages.message}</div>
		);

	const Reset = (event) => {
		setName("");
		setPass("");
	};

	// JSX code for login form
	const renderForm = (
		<Mui.Box className="form">
			<form onSubmit={handleSubmit}>
				<Mui.Box className="input-container">
					<label>Username </label>
					<input type="text" name="uname" required value={name} />
					{renderErrorMessage("uname")}
				</Mui.Box>
				<Mui.Box className="input-container">
					<label>Password </label>
					<input type="password" name="pass" required value={pass} />
					{renderErrorMessage("pass")}
				</Mui.Box>
				<Mui.Box className="button-container">
					<Link to="/permission" component={Link}>
						{" "}
						<input type="submit" value={"Sign Up"} />
						<input type="submit" value={"Sign In"} />
					</Link>
				</Mui.Box>
			</form>
		</Mui.Box>
	);

	return (
		<div className="app">
			<div className="login-form">
				<div className="title"> </div>
				{isSubmitted ? <div>{<Permission />}</div> : renderForm}
			</div>
		</div>
	);
}
export default UserLogin;
