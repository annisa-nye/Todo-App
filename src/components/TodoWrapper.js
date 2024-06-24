import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';

export const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
	const [sortOrder, setSortOrder] = useState('all'); // Default sort order

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

	const sortTodos = (order) => {
		setSortOrder(order);
	};

	const getSortedTodos = () => {
		if (sortOrder === 'all') {
			return todos;
		} else {
			return todos.filter((todo) => todo.status === sortOrder);
		}
	};

	return (
		<div className='TodoWrapper'>
			<h1>✅ To Do Application ✅</h1>
			<TodoForm addTodo={addTodo} />

			<div className='sort-buttons'>
				<button onClick={() => sortTodos('all')} className='todo-btn'>All</button>
				<button onClick={() => sortTodos('in-progress')} className='todo-btn'>In Progress</button>
				<button onClick={() => sortTodos('completed')} className='todo-btn'>Completed</button>
				<button onClick={() => sortTodos('review')} className='todo-btn'>Review</button>
			</div>

			{getSortedTodos().map((todo) => (
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
