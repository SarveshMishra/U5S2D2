import React from "react";

const ShowTodoItem = ({ list }) => {
	return (
		<>
			<h1>Todo Items</h1>
			{list.map((list) => {
				return (
					<div key={list.id}>
						<div>{list.title}</div>
					</div>
				);
			})}
		</>
	);
};

export default ShowTodoItem;
