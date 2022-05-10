import "../styles.css";
import * as Mui from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Permission from "./Permission";

export default function UserLoginPres({
	onClick,
	name,
	renderErrorMessage,
	pass,
	isSubmitted,
}) {
	const renderForm = (
		<Mui.Box className="form">
			<form onClick={() => onClick()}>
				<Mui.Box className="input-container">
					<label>Username </label>
					<input type="text" name="uname" required value={name} />
					{(renderErrorMessage = renderErrorMessage)}
				</Mui.Box>
				<Mui.Box className="input-container">
					<label>Password </label>
					<input type="password" name="pass" required value={pass} />
					{/* {renderErrorMessage({"pass"})} */}
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
