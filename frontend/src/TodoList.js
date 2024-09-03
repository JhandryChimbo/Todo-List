// TodoList.js
import './styles.css';
import React, { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo, toggleCompleteTodo } from './api';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ title: '', description: '' });

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await getTodos();
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleAddTodo = async () => {
        try {
            const response = await addTodo({
                ...newTodo,
                completed: false,
            });
            setTodos([...todos, response.data]);
            setNewTodo({ title: '', description: '' });
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleUpdateTodo = async (id, updatedTodo) => {
        try {
            const response = await updateTodo(id, updatedTodo);
            setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleDeleteTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleToggleComplete = async (id, completed) => {
        try {
            const response = await toggleCompleteTodo(id, completed);
            setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
        } catch (error) {
            console.error('Error toggling complete:', error);
        }
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <div className="add-todo">
                <input
                    type="text"
                    placeholder="Title"
                    value={newTodo.title}
                    onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newTodo.description}
                    onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="todo-item">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(todo.id, !todo.completed)}
                        />
                        <input
                            type="text"
                            value={todo.title}
                            onChange={(e) => handleUpdateTodo(todo.id, { ...todo, title: e.target.value })}
                        />
                        <input
                            type="text"
                            value={todo.description}
                            onChange={(e) => handleUpdateTodo(todo.id, { ...todo, description: e.target.value })}
                        />
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
