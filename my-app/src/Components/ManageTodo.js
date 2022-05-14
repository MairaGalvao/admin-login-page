import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Mui from "@material-ui/core";

const ManageTodo = () => {
	//TODO USERS PAGE (3)
	// const navigate = useNavigate();

	// navigate("/user-admin");
	const [isUserIn, setIsUserIn] = useState(false);
	const [task, setTask] = useState();
	const [value, setValue] = useState([]);

	function UserIn() {
		setIsUserIn(true);
	}
	setTimeout(UserIn, 3000);

	const AddTasks = (e) => {
		console.log(value);
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
							onClick={AddTasks}
						>
							Add
						</Mui.Button>
					</form>
					{value && <h1> {value}</h1>}
				</div>
			)}
		</>
	);
};

export default ManageTodo;
