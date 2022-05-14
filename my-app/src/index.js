import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SaveContacts from "./Components/SaveContacts";
import ManageTodo from "./Components/ManageTodo";
import ManageProsCons from "./Components/ManageProsCons";
import Welcome from "./Components/Welcome";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isToDoOpen, setIsToDoOpen] = useState(true);
	const [isContactsOpen, setIsContactsOpen] = useState(true);
	const [isProsConsOpen, setIsProsConsOpen] = useState(true);

	return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Welcome
								isAuthenticated={isAuthenticated}
								setIsToDoOpen={setIsToDoOpen}
								setIsContactsOpen={setIsContactsOpen}
								setIsProsConsOpen={setIsProsConsOpen}
								setIsAuthenticated={setIsAuthenticated}
								isToDoOpen={isToDoOpen}
								isContactsOpen={isContactsOpen}
								isProsConsOpen={isProsConsOpen}
							/>
						}
					/>
					<Route exact path="/contacts" element={<SaveContacts />} />
					<Route exact path="/pros-cons" element={<ManageProsCons />} />
					<Route exact path="/to-do" element={<ManageTodo />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

root.render(<App />);
