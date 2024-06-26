import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { EditTodoForm } from './EditTodoForm';

export const Todo = ({ task, deleteTodo, editTodo }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<article
			className={`todo ${task.status === 'completed' ? 'completed' : ''}`}
		>
			<div className='todo-header'>
				<h2>{task.name}</h2>
				<p>{task.description}</p>
			</div>
			<section className='task-info'>
				<p>
					<strong>Due:</strong> {task.dueDate}
				</p>
				<p>
					<strong>Assigned to:</strong> {task.assignedTo}
				</p>
				<p>
					<strong>Status:</strong> {task.status}
				</p>
			</section>
			<div className='todo-actions'>
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
			</div>
			<EditTodoForm
				task={task}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				editTodo={editTodo}
			/>
		</article>
	);
};
