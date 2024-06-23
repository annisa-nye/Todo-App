import React from "react"

export const editTodoForm = ({ addTodo }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value.trim()) return; // Prevent submitting empty values
		addTodo(value);
		setValue(''); // Reset input field
	};

	return (
		<form className='TodoForm' onSubmit={handleSubmit}>
			<input
				type='text'
				className='todo-input'
				placeholder='What is the task today?'
				onChange={(e) => setValue(e.target.value)}
				value={value}
			/>
			<button type='submit' className='todo-btn'>
				Add Task
			</button>
		</form>
	);
};

