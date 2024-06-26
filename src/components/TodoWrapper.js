import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';

export const TodoWrapper = () => {
	const [todos, setTodos] = useState(() => {
		// Initialize state from local storage
		const savedTodos = localStorage.getItem('todos');
		return savedTodos ? JSON.parse(savedTodos) : [];
	});
	const [sortOrder, setSortOrder] = useState('all'); // Default sort order

	useEffect(() => {
		// Update local storage whenever todos state changes
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addTodo = (task) => {
		const newTodo = {
			id: uuidv4(),
			...task,
			completed: false,
			isEditing: false,
		};
		setTodos([...todos, newTodo]);
	};

	const deleteTodo = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
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

	const isGridLayout = sortOrder === 'all';

	return (
		<section className='TodoWrapper'>
			<header>
				<h1>✅ To Do Application ✅</h1>
			</header>
			<TodoForm addTodo={addTodo} />

			<nav className='sort-buttons'>
				<button
					onClick={() => sortTodos('all')}
					className={`todo-btn ${sortOrder === 'all' ? 'active' : ''}`}
				>
					All
				</button>
				<button
					onClick={() => sortTodos('in-progress')}
					className={`todo-btn ${sortOrder === 'in-progress' ? 'active' : ''}`}
				>
					In Progress
				</button>
				<button
					onClick={() => sortTodos('completed')}
					className={`todo-btn ${sortOrder === 'completed' ? 'active' : ''}`}
				>
					Completed
				</button>
				<button
					onClick={() => sortTodos('review')}
					className={`todo-btn ${sortOrder === 'review' ? 'active' : ''}`}
				>
					Review
				</button>
			</nav>

			<div className={`todos ${isGridLayout ? 'grid-4' : ''}`}>
				{getSortedTodos().map((todo) => (
					<Todo
						key={todo.id}
						task={todo}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				))}
			</div>
		</section>
	);
};
