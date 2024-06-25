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
	const [dialogStyle, setDialogStyle] = useState(
		getDialogStyle(window.innerWidth)
	);

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

		const handleResize = () => {
			setDialogStyle(getDialogStyle(window.innerWidth));
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
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

	function getDialogStyle(width) {
		if (width <= 576) {
			return {
				backgroundColor: 'white',
				position: 'fixed',
				top: '5%',
				left: '2.5%',
				width: '95%',
				padding: '8px',
				borderRadius: '12px',
				height: 'auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			};
		} else if (width <= 768) {
			return {
				backgroundColor: 'white',
				position: 'fixed',
				top: '10%',
				left: '10%',
				width: '80%',
				padding: '16px',
				borderRadius: '12px',
				height: 'auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			};
		} else {
			return {
				backgroundColor: 'white',
				position: 'fixed',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: '50%',
				padding: '64px',
				borderRadius: '12px',
				height: 'auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			};
		}
	}

	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(false)}
			className='relative z-50'
		>
			<div style={dialogStyle}>
				<DialogPanel className='w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
					<DialogTitle className='font-bold text-xl'>
						<h2>Edit Task</h2>
					</DialogTitle>
					<br />
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

export default EditTodoForm;
