import * as React from "react";
import * as Mui from "@material-ui/core";
import AdminUser from "./AdminUser";
import SaveContacts from "./SaveContacts";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Permission() {
	const [contact, setContact] = React.useState(false);
	function saveContacts() {
		setContact(true);
	}

	return (
		<>
			<Mui.FormControl>
				<Mui.FormLabel id="demo-row-radio-buttons-group-label">
					Acess Permission
				</Mui.FormLabel>
				<Mui.RadioGroup
					row
					aria-labelledby="demo-row-radio-buttons-group-label"
					name="row-radio-buttons-group"
				>
					<Link to="/manage-todo">
						<Mui.FormControlLabel
							value="female"
							control={<Mui.Radio />}
							label="Manage todo"
							component={Link}
						/>
					</Link>

					<Link to="/save-contacts">
						{" "}
						<Mui.FormControlLabel
							value="male"
							control={<Mui.Radio />}
							label="Save contacts"
							component={Link}
						/>
					</Link>
					<Link to="/manage-pros-cons">
						<Mui.FormControlLabel
							// value="disabled"
							// disabled
							control={<Mui.Radio />}
							label="Manage pros and cons"
							component={Link}
						/>
					</Link>
				</Mui.RadioGroup>
			</Mui.FormControl>

			{contact && <SaveContacts />}
		</>
	);
}
