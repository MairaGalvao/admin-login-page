import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserPage from "./Components/UserAdmin";
import UserPage from "./Components/UserPage";
import UserLogin from "./Components/UserLogin";
import SignUp from "./SignUp";
import AdminUser from "./Components/AdminUser";
import SaveContacts from "./Components/SaveContacts";
import Permission from "./Components/Permission";
import ManageTodo from "./Components/ManageTodo";

import ManageProsCons from "./Components/ManageProsCons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<UserLogin />} />
				<Route exact path="/permission" element={<Permission />} />
				<Route exact path="/save-contacts" element={<SaveContacts />} />
				<Route exact path="/manage-pros-cons" element={<ManageProsCons />} />
				<Route exact path="/manage-to-do" element={<ManageTodo />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
