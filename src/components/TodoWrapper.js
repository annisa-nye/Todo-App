import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';

export const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (task) => {
		setTodos([
			...todos,
			{ id: uuidv4(), ...task, completed: false, isEditing: false },
		]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editTodo = (id, updatedTask) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, ...updatedTask, isEditing: false };
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
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					task={todo}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
				/>
			))}
		</div>
	);
};
