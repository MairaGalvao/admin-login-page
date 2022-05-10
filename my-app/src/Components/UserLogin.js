import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Permission from "./Permission";
import UserLoginPres from "./UserLoginPres";
import "../styles.css";

function UserLogin() {
	const [errorMessages, setErrorMessages] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [name, setName] = React.useState();
	const [pass, setPass] = React.useState();

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
	//todo fix the code below, when passing this function to the dummy component it doesnt accept the parameters
	// const renderErrorMessage = (name) =>
	// 	name === errorMessages.name && (
	// 		<div className="error">{errorMessages.message}</div>
	// 	);

	const Reset = (event) => {
		setName("");
		setPass("");
	};

	// JSX code for login form

	return (
		<>
			<UserLoginPres
				onClick={handleSubmit}
				name={name}
				pass={pass}
				isSubmitted={isSubmitted}
				passText={"pass"}
			/>
			;
		</>
	);
}
export default UserLogin;
