import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import todosData from './components/data';

function App() {
    const [todos, setTodos] = useState(todosData);
    //  Add Todo Item from The Input
    function addListItem(formData) {
        const newItem = formData.get('todo');
        setTodos([
            ...todos,
            { id: todos.length + 1, name: newItem, completed: false },
        ]);
    }

    // Toggle the todo item completion status on click
    function toggleTodoCompletion(id) {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed, active: false }
                    : todo
            )
        );
    }

    // Handle Active Todo List Item
    function handleActive(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id && !todo.completed) {
                    return { ...todo, active: !todo.active };
                } else {
                    return todo;
                }
            })
        );
    }

    // Show Active Todo List Item
    function showActive() {
        setTodos(
            todos.map((todo) => {
                if (todo.active) {
                    return { ...todo, visible: true };
                } else {
                    return { ...todo, visible: false };
                }
            })
        );
    }

    // Show Completed Todo List Item
    function showCompleted() {
        setTodos(
            todos.map((todo) => {
                if (todo.completed) {
                    return { ...todo, visible: true };
                } else {
                    return { ...todo, visible: false };
                }
            })
        );
    }

    // Clear Completed Todo Items
    function clearCompleted() {
        setTodos(todos.filter((todo) => !todo.completed));
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-[linear-gradient(135deg,_#8B5CF6_0%,_#A855F7_25%,_#C084FC_50%,_#E879F9_75%,_#60A5FA_100%)]">
            <div className="w-full max-w-md">
                <Header />

                <TodoInput addListItem={addListItem} />

                <TodoList
                    todos={todos}
                    toggleTodoCompletion={toggleTodoCompletion}
                    handleActive={handleActive}
                    showActive={showActive}
                    showCompleted={showCompleted}
                    clearCompleted={clearCompleted}
                />

                <p className="text-center text-white/60 text-sm mt-6">
                    Drag and drop to reorder list
                </p>
            </div>
        </main>
    );
}

export default App;
