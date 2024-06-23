import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {
	Dialog,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodoForm }) => {
	let [isOpen, setIsOpen] = useState(false);

	let [editedText, setEditedText] = useState(task.task);

	const handleSave = () => {
		editTodoForm(task.id, editedText);
		setIsOpen(false);
	};

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
					className='icon edit-icon'
					onClick={() => setIsOpen(true)} // Ensure this function is referenced correctly
					// onClick={() => editTodoForm(task.id)} // Ensure this function is referenced correctly
				/>
				<FontAwesomeIcon
					icon={faTrash}
					onClick={() => deleteTodo(task.id)}
					className='icon delete-icon'
				/>
			</div>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className='relative z-50'
			>
				<div
					className='fixed inset-0 flex w-screen items-center justify-center p-4'
					//  turn to inline style js\
					style={{
						backgroundColor: 'white',
						position: 'fixed',
						height: '50%',
						top: '25%',
						left: '25%',
						right: 0,
						bottom: 0,
						display: 'flex',
						width: '50%',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						padding: 64,
						borderRadius: 12,
					}}
				>
					<DialogPanel className='max-w-lg space-y-4 border bg-white p-12'>
						<DialogTitle className='font-bold'>Edit Task</DialogTitle>
						<input
							value={editedText}
							onChange={(e) => setEditedText(e.target.value)}
						/>

						<div className='flex gap-4'>
							<button onClick={() => setIsOpen(false)}>Cancel</button>
							<button onClick={handleSave}>Save</button>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</div>
	);
};
