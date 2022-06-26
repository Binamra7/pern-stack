const express = require("express");
const cors = require("cors");
const app = require("express")();
const dbPool = require("./db");
const bodyParser = require("body-parser");

//middleware

require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); //req.body

//add a todo
app.post("/todos", async (req, res) => {
	try {
		const { title, descriptions } = req.body;
		const newTodo = await dbPool.query(
			"INSERT INTO todo (title, descriptions) VALUES ($1, $2)",
			[title, descriptions]
		);
		console.log(req.body);
		// res.json(newTodo);  //this didn't work .. idk why
		res.json("Todo added");
	} catch (error) {
		console.error(error);
	}
});

//get all todos
app.get("/todos", async (req, res) => {
	try {
		const todos = await dbPool.query("SELECT * FROM todo");
		res.json(todos.rows);
	} catch (error) {
		console.error(error);
	}
});

//get a single todo
app.get("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await dbPool.query("SELECT * FROM todo WHERE id = $1", [id]);

		res.json(todo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//update a todo
app.put("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { title, descriptions } = req.body;
		const updateTodo = await dbPool.query(
			"UPDATE todo SET title = $1, descriptions = $2 WHERE id = $3",
			[title, descriptions, id]
		);
		res.json("Todo Updated");
	} catch (error) {
		console.error(error);
	}
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await dbPool.query("DELETE FROM todo WHERE id = $1", [id]);
		res.json("Todo deleted");
	} catch (error) {
		console.error(error);
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
