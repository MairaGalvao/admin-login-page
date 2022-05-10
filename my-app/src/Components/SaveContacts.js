import * as React from "react";
import * as Mui from "@material-ui/core";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";

export default function SaveContacts() {
	const [value, setValue] = React.useState(0);

	const [myList, setMyList] = React.useState([
		"999XXXXXXX",
		"8575XXXXXX",
		"99XXXXXXXX",
	]);

	const handleChange = (event, newValue) => {
		if (newValue == 0) {
			setMyList(["999XXXXXXX", "8575XXXXXX", "99XXXXXXXX"]);
			setValue(0);
		} else {
			setMyList(["Contact One", "Contact Two", "Contact Three"]);
			setValue(1);
		}
	};
	return (
		<>
			<div
				style={{
					marginLeft: "40%",
				}}
			>
				<h2>Save Contacts</h2>
				<Mui.Paper
					square
					style={{
						flexGrow: 1,
						maxWidth: 500,
					}}
				>
					<Mui.Tabs
						value={value}
						onChange={handleChange}
						variant="fullWidth"
						indicatorColor="primary"
						textColor="primary"
						aria-label="icon tabs example"
					>
						<Mui.Tab icon={<PhonePausedIcon />} aria-label="phone" />
						<Mui.Tab icon={<PersonPinCircleIcon />} aria-label="person" />
					</Mui.Tabs>
					<ul>
						<li>{myList[0]}</li>
						<li>{myList[1]}</li>
						<li>{myList[2]}</li>
					</ul>
				</Mui.Paper>
			</div>
		</>
	);
}
