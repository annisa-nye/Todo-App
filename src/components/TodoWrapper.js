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

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const editTodoForm = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, isEditing: !todo.isEditing };
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
				<Todo
					task={todo}
					key={index}
					toggleComplete={toggleComplete}
					deleteTodo={deleteTodo}
					editTodoForm={editTodoForm} // Ensure this prop is passed correctly
				/>
			))}
		</div>
	);
};
