import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import todosData from './components/data';

function App() {
  const [todos, setTodos] = useState(todosData);
    
    function addListItem(formData) {
        const newItem = formData.get('todo');
        setTodos([...todos, { id: todos.length + 1, name: newItem, completed: false }]);
    }

    // change the todo item list to be completed or not on click
    function toggleTodoCompletion(id) {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-[linear-gradient(135deg,_#8B5CF6_0%,_#A855F7_25%,_#C084FC_50%,_#E879F9_75%,_#60A5FA_100%)]">
            <div className="w-full max-w-md">
                {/* Header */}
                <Header />

                {/* Create Todo Input */}
                <TodoInput addListItem={addListItem} />

                {/* Todo List */}
                <TodoList
                    todos={todos}
                    toggleTodoCompletion={toggleTodoCompletion}
                />

                {/* Drag and drop hint */}
                <p className="text-center text-white/60 text-sm mt-6">
                    Drag and drop to reorder list
                </p>
            </div>
        </main>
    );
}

export default App;
