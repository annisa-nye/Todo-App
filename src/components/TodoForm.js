import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

export const TodoForm = ({ addTodo }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [assignedTo, setAssignedTo] = useState('');
	const [status, setStatus] = useState('in-progress');
	const [errors, setErrors] = useState({});
	const [dialogStyle, setDialogStyle] = useState(
		getDialogStyle(window.innerWidth)
	);

	const validate = () => {
		const newErrors = {};
		if (!name.trim()) newErrors.name = 'Name is required';
		if (!description.trim()) newErrors.description = 'Description is required';
		if (!dueDate) newErrors.dueDate = 'Due date is required';
		if (!assignedTo.trim()) newErrors.assignedTo = 'Assigned to is required';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;

		addTodo({
			name,
			description,
			dueDate,
			assignedTo,
			status,
		});
		setName('');
		setDescription('');
		setDueDate('');
		setAssignedTo('');
		setStatus('in-progress');
		setErrors({});
		setIsOpen(false); // Close the dialog
	};

	useEffect(() => {
		const handleResize = () => {
			setDialogStyle(getDialogStyle(window.innerWidth));
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

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
		<section>
			<button onClick={() => setIsOpen(true)} className='newtask-btn'>
				Add New Task
			</button>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className='relative z-50'
			>
				<div style={dialogStyle}>
					<DialogPanel className='w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
						<DialogTitle className='font-bold text-xl'>
							<h2>Add New Task</h2>
						</DialogTitle>
						<br />
						<form className='space-y-4' onSubmit={handleSubmit}>
							<div>
								<input
									type='text'
									placeholder='Task Name'
									value={name}
									onChange={(e) => setName(e.target.value)}
									className='w-full p-2 border rounded'
								/>
								{errors.name && <p className='error'>{errors.name}</p>}
							</div>
							<br />
							<div>
								<textarea
									placeholder='Description'
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									className='w-full p-2 border rounded'
								/>
								{errors.description && (
									<p className='error'>{errors.description}</p>
								)}
							</div>
							<br />
							<div>
								<input
									type='date'
									value={dueDate}
									onChange={(e) => setDueDate(e.target.value)}
									className='w-full p-2 border rounded'
								/>
								{errors.dueDate && <p className='error'>{errors.dueDate}</p>}
							</div>
							<br />
							<div>
								<input
									type='text'
									placeholder='Assigned To'
									value={assignedTo}
									onChange={(e) => setAssignedTo(e.target.value)}
									className='w-full p-2 border rounded'
								/>
								{errors.assignedTo && (
									<p className='error'>{errors.assignedTo}</p>
								)}
							</div>
							<br />
							<div>
								<select
									value={status}
									onChange={(e) => setStatus(e.target.value)}
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
									className='small-newtask-btn'
								>
									Cancel
								</button>
								<button type='submit' className='small-newtask-btn'>
									Add Task
								</button>
							</div>
						</form>
					</DialogPanel>
				</div>
			</Dialog>
		</section>
	);
};
