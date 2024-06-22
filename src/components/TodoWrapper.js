import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';

export const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (task) => {
		setTodos([
			...todos,
			{ id: uuidv4(), task, completed: false, isEditing: false },
		]);
		console.log(todos);
	};
	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				} else {
					return todo;
				}
			})
		);
	};

	return (
		<div className='TodoWrapper'>
			<h1>✅ To Do Application ✅</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo, index) => (
				<Todo task={todo} key={index} toggleComplete={toggleComplete} />
			))}
		</div>
	);
};
