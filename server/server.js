import pkg from "pg";
const { Client } = pkg;
import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/user", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Content-Type", "application/json");

	// creating a new row with password and email, and as default I am giving all the permission as TRUE
	insertRowUserPermission(client, req.body.email, req.body.password);
	res.status(200);

	// return the user's permissions
	res.send({
		to_do: true,
		contacts: true,
		pros_cons: true,
	});
});

app.get("/user", (req, res) => {
	// this endpoint returns the user's permissions

	// todo: call this endpoint as the admin that browse the user's page.

	// todo: before returning the data, verify somehow that the admin is indeed an admin
	ans = getRowUserPermission(client, req.body.email, req.body.password);
	res.send({
		to_do: ans.to_do,
		contacts: ans.contacts,
		pros_cons: ans.pros_cons,
	});
});

app.put("/user", (req, res) => {
	// change user permission

	// todo: call this endpoint as the admin when he wants to change a user's permissions / reset password
	updateUserPermission(
		client,
		req.body.email,
		req.body.to_do,
		req.body.contacts,
		req.body.pros_cons
	);
	res.send({});
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`I am connected to ${PORT}`));

// connecting to the DB client:
const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "testdb",
	password: "1234",
	port: 5432,
});
client.connect();

createUserPermissionTable(client);

function createUserPermissionTable(client) {
	const query = `
	CREATE TABLE IF NOT EXISTS userPermission (
		email varchar UNIQUE,
		password varchar,
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
	VALUES ('${email}', '${password}', true, true, true)
	`;

	client.query(queryInsert, (err, res) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(
			`Data insert successful: email=${email}, password=${password}, todo=true, contacts=true, prosCons=true`
		);
	});
}

function getRowUserPermission(client, email, password) {
	const query = `
	SELECT FROM userPermission WHERE email='${email}' AND password='${password}'`;

	client
		.query(query, (err, res) => {
			if (err) {
				console.error(err);
				return;
			}
		})
		.then((res) => console.log(res.rows[0]));
}

function updateUserPermission(client, email, todo, contacts, prosCons) {
	const query = `
	UPDATE userPermission
	SET todo=${todo}, contacts=${contacts}, prosCons=${prosCons}
	WHERE email=${email}
	
	`;

	client.query(query, (err, res) => {
		if (err) {
			console.error(err);
			return;
		}
	});
}
