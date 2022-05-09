function SignUp() {
	fetch("http://localhost:8080/user", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: "mairaga@",
			password: "1234",
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data.to_do);
			console.log(data.contacts);
			console.log(data.pros_cons);
		});

	return (
		<>
			<h1> SignUp </h1>
		</>
	);
}

export default SignUp;
