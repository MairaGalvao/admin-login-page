const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post("/user", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Content-Type", "application/json");
	res.status(200);

	console.log(req.body);
	res.send({
		to_do: true,
		contacts: true,
		pros_cons: true,
	});
});

app.get("/user", (req, res) => {
	console.log(req.body);
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
