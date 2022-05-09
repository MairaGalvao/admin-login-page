import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Mui from "@material-ui/core";
import Permission from "./Permission";

const ManageTodo = () => {
	//TODO USERS PAGE (3)
	// const navigate = useNavigate();

	// navigate("/user-admin");
	const [isUserIn, setIsUserIn] = useState(false);
	const [task, setTask] = useState();
	const [value, setValue] = useState();

	function UserIn() {
		setIsUserIn(true);
	}
	setTimeout(UserIn, 3000);

	const handleSubmit = (e) => {
		console.log(e.target.value);
	};

	return (
		<>
			{isUserIn && (
				<div>
					{" "}
					<form style={{ display: "flex" }}>
						<Mui.Input
							onChange={(e) => setValue(e.target.value)}
							placeholder="Todo"
							inputProps={{
								"aria-label": "Description",
							}}
							style={{ width: "90%" }}
						/>

						<Mui.Button
							variant="contained"
							color="primary"
							style={{ width: "10%" }}
							onClick={handleSubmit}
						>
							Add
						</Mui.Button>
					</form>
				</div>
			)}
		</>
	);
};

export default ManageTodo;
