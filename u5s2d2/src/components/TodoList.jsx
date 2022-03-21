import React from "react";
const TodoList = ({ addTodo }) => {
	const [todo, setTodo] = React.useState("");

	const addTodoItem = (e) => {
		setTodo([e.target.value]);
	};
	return (
		<>
			<h1>Todo List</h1>
			<input
				type="text"
				name=""
				id="todoInput"
				value={todo}
				onChange={addTodoItem}
			/>
			<button
				onClick={() => {
					addTodo(todo);
				}}
			>
				Add
			</button>
		</>
	);
};

export default TodoList;
