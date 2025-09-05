import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 bg-[linear-gradient(135deg,_#8B5CF6_0%,_#A855F7_25%,_#C084FC_50%,_#E879F9_75%,_#60A5FA_100%)]">
            <div className="w-full max-w-md">
                {/* Header */}
                <Header />

                {/* Create Todo Input */}
                <TodoInput />

                {/* Todo List */}
                <TodoList />

                {/* Drag and drop hint */}
                <p className="text-center text-white/60 text-sm mt-6">
                    Drag and drop to reorder list
                </p>
            </div>
        </main>
    );
}

export default App;
