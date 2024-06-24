import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

export const EditTodoForm = ({ task, isOpen, setIsOpen, editTodo }) => {
	const [editTask, setEditTask] = useState({
		name: '',
		description: '',
		dueDate: '',
		assignedTo: '',
		status: 'in-progress',
	});

	useEffect(() => {
		if (isOpen) {
			setEditTask({
				name: task.name,
				description: task.description,
				dueDate: task.dueDate,
				assignedTo: task.assignedTo,
				status: task.status,
			});
		}
	}, [isOpen, task]);

	const handleEditChange = (e) => {
		const { name, value } = e.target;
		setEditTask({ ...editTask, [name]: value });
	};

	const handleEditSubmit = (e) => {
		e.preventDefault();
		editTodo(task.id, editTask);
		setIsOpen(false); // Close the dialog
	};

	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='dialogpanel relative z-50'
		>
			<div
				className='fixed inset-0 flex items-center justify-center p-4'
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
				<DialogPanel className='w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
					<DialogTitle className='font-bold text-xl'>Edit Task</DialogTitle>
					<form onSubmit={handleEditSubmit} className='space-y-4'>
						<div>
							<input
								type='text'
								name='name'
								placeholder='Task Name'
								value={editTask.name}
								onChange={handleEditChange}
								className='w-full p-2 border rounded'
							/>
						</div>
						<br />
						<div>
							<textarea
								name='description'
								placeholder='Description'
								value={editTask.description}
								onChange={handleEditChange}
								className='w-full p-2 border rounded'
							/>
						</div>
						<br />
						<div>
							<input
								type='date'
								name='dueDate'
								value={editTask.dueDate}
								onChange={handleEditChange}
								className='w-full p-2 border rounded'
							/>
						</div>
						<br />
						<div>
							<input
								type='text'
								name='assignedTo'
								placeholder='Assigned To'
								value={editTask.assignedTo}
								onChange={handleEditChange}
								className='w-full p-2 border rounded'
							/>
						</div>
						<br />
						<div>
							<select
								name='status'
								value={editTask.status}
								onChange={handleEditChange}
								className='w-full p-2 border rounded'
							>
								<option value='in-progress'>In Progress</option>
								<option value='completed'>Completed</option>
								<option value='review'>Review</option>
							</select>
						</div>
						<br />
						<div className='flex justify-end space-x-4'>
							<button
								type='button'
								onClick={() => setIsOpen(false)}
								className='todo-btn'
							>
								Cancel
							</button>
							<button type='submit' className='todo-btn'>
								Save
							</button>
						</div>
					</form>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
