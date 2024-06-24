import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditTodoForm } from './EditTodoForm';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={`todo ${task.status === 'completed' ? 'completed' : ''}`}
			style={{
				backgroundColor: '#F7D4E0',
				border: '2px solid black',
				borderRadius: 8,
				padding: 8,
				margin: 8,
			}}
		>
			<div className='flex justify-between'>
				<h2>{task.name}</h2>
				<p>{task.description}</p>
				<div className='task-info'>
					<p>Due: {task.dueDate}</p>
					<p>Assigned to: {task.assignedTo}</p>
					<p>Status: {task.status}</p>
				</div>
				<br />
			</div>
			<FontAwesomeIcon
				icon={faPenToSquare}
				className='icon edit-icon'
				onClick={() => setIsOpen(true)}
				color='blue'
			/>
			<FontAwesomeIcon
				icon={faTrash}
				onClick={() => deleteTodo(task.id)}
				className='icon delete-icon'
				color='red'
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
