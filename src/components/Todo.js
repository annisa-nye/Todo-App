import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodoForm }) => {
	return (
		<div className='Todo'>
			<p
				onClick={() => toggleComplete(task.id)}
				className={`${task.completed ? 'completed' : ''}`}
			>
				{task.task}
			</p>
			<div>
				<FontAwesomeIcon
					icon={faPenToSquare}
					onClick={() => editTodoForm(task.id)} // Ensure this function is referenced correctly
					className='icon edit-icon'
				/>
				<FontAwesomeIcon
					icon={faTrash}
					onClick={() => deleteTodo(task.id)}
					className='icon delete-icon'
				/>
			</div>
		</div>
	);
};
