import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('in-progress');

    const addTodo = (task) => {
        setTodos([
            ...todos,
            { id: uuidv4(), ...task, completed: false, isEditing: false },
        ]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
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

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
    };

    const filteredTasks = todos.filter(todo => todo.status === status);

    return (
        <div className='TodoWrapper'>
            <h1>✅ To Do Application ✅</h1>
            <div className="status-buttons">
                <button className="status-btn" onClick={() => handleStatusChange('in-progress')}>In Progress</button>
                <button className="status-btn" onClick={() => handleStatusChange('completed')}>Completed</button>
                <button className="status-btn" onClick={() => handleStatusChange('review')}>Review</button>
            </div>
            <TodoForm addTodo={addTodo} />
            {filteredTasks.map((todo) => (
                <Todo
                    key={todo.id}
                    task={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            ))}
        </div>
    );
};

export default TodoWrapper;


