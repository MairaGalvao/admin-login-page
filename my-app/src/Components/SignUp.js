function SignUp(email, password) {
	fetch("http://localhost:8080/user", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data.to_do);
			console.log(data.contacts);
			console.log(data.pros_cons);
			console.log(email);
		});

	return (
		<>
			<h1> SignUp </h1>
		</>
	);
}

export default SignUp;
