import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import ShowTodoItem from "./ShowTodoItem";
const Todo = () => {
	const [todoItem, setTodoItem] = useState([]);
	const [lastPage, setLastPage] = useState(1);
	const [page, setPage] = useState(1);
	useEffect(() => {
		getTodoItem();
	}, [page]);

	const getTodoItem = () => {
		fetch(`http://localhost:3000/posts?_page=${page}&_limit=3`)
			.then((response) => {
				setLastPage(Math.ceil(response.headers.get("X-Total-Count") / 3));
				// console.log(lastPage);
				return response.json();
			})
			.then((result) => setTodoItem(result))
			.catch((error) => console.log("error", error));
	};
	// Add Todo Item to the database
	const addTodo = (todo) => {
		const data = {
			title: todo,
			completed: false,
		};
		fetch("http://localhost:3000/posts", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		}).then(() => getTodoItem());
	};

	return (
		<>
			<TodoList addTodo={addTodo} />
			<ShowTodoItem list={todoItem} />
			<button
				onClick={() => {
					setPage(page - 1);
				}}
				disabled={page === 1}
			>
				Previous
			</button>
			<button
				onClick={() => {
					setPage(page + 1);
				}}
				disabled={page === lastPage}
			>
				Next
			</button>
		</>
	);
};

export default Todo;
