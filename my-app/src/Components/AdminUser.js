import React, { useState } from "react";

function AdminUser() {
	//TODO THATS THE ADMIN USER (2)
	const [todo_permission, setTodo_permission] = useState(false);
	const [contacts_permission, setContacts_permission] = useState(false);
	const [pros_cons_permission, setPros_cons_permission] = useState(false);

	fetch("http://localhost:8080/user", {
		method: "GET",
		headers: {
			Accept: "application/json",
			body: "mairagalvao01@gmail.com",
		},
	})
		.then((data) => {
			setTodo_permission(data.to_do);
			setContacts_permission(data.contacts);
			setPros_cons_permission(data.pros_cons);
		})
		.catch((error) => console.log(error));

	const requestOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email: "sidneyfie@gmail.com" }),
	};
	fetch("http://localhost:8080/user", requestOptions)
		.then((response) => response.json())
		.then((data) => console.log(data));

	return (
		<>
			<h1> Admin login</h1>

			{/* <button type="button" onClick={Handle}>
				Back
			</button> */}
		</>
	);
}

export default AdminUser;
