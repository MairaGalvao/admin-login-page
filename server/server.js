import pkg from "pg";
const { Client } = pkg;

import express from "express";

const app = express();
import cors from "cors";
//todo: do I need the line below
// import { password } from "pg/lib/defaults.js";

// import { email } from "pg/lib/defaults.js";
// import pkg from "pg/lib/defaults.js";
const { email, password } = pkg;
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post("/user", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Content-Type", "application/json");
	res.status(200);
	insertRowUserPermission(client, email, password);
	// todo: create a row in the DB with the info given
	console.log(req.body);
	res.send({
		to_do: true,
		contacts: true,
		pros_cons: true,
	});
});

app.get("/user", (req, res) => {
	console.log(req.body, "thats what I am getting from the get request");
	// todo: query the DB for the given email and return the boolean permissions
	insertRowUserPermission(client, email, password);
	res.send({
		to_do: true,
		contacts: true,
		pros_cons: true,
	});
});

app.put("/user", (req, res) => {
	console.log(req.body);
	res.send(req.statusCode);
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`now I am also connected to ${PORT}`));

// connecting to the DB client:
const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "testdb",
	password: "1234",
	port: 5432,
});
client.connect();

createUserPermissionTable(client, email, password);
insertRowUserPermission(client, email, password);

//todo do I need email and password as parameters for this function below and also when I call it
function createUserPermissionTable(client, email, password) {
	const query = `
	CREATE TABLE IF NOT EXISTS userPermission (
		${email} varchar UNIQUE,
		${password} varchar,
		todo bool,
		contacts bool,
		prosCons bool
	);
	`;

	client
		.query(query)
		.then((res) => {
			console.log("Table userPermission is successfully created");
		})
		.catch((err) => {
			console.error(err);
		});
}

function insertRowUserPermission(client, email, password) {
	const queryInsert = `
	INSERT INTO userPermission (email, password, todo, contacts, prosCons)
	VALUES (${email}, ${password}, true, true, true)
	`;

	client.query(queryInsert, (err, res) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log("Data insert successful");
		client.end();
	});
}
