import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditTodoForm } from './EditTodoForm';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`todo ${task.status === 'completed' ? 'completed' : ''}`}
		style={{
			border: '1px solid #ccc',
			borderRadius: 8,
			padding: 8,
			margin: 8,
			
		}}>
			<div
				className='flex justify-between'
			>
				<h2>{task.name}</h2>
				<p>{task.description}</p>
				<p>Due: {task.dueDate}</p>
				<p>Assigned to: {task.assignedTo}</p>
				<p>Status: {task.status}</p>
			</div>
			<FontAwesomeIcon
				icon={faPenToSquare}
				className='icon edit-icon'
				onClick={() => setIsOpen(true)}
			/>
			<FontAwesomeIcon
				icon={faTrash}
				onClick={() => deleteTodo(task.id)}
				className='icon delete-icon'
			/>
			<EditTodoForm
				task={task}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				editTodo={editTodo}
			/>
		</div>
	);
};
