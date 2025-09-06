import { useState } from 'react';

export default function TodoListFooter(props) {
    return (
        <div className="flex items-center justify-between p-4 text-sm text-gray-500 border-t border-gray-100">
            <span>{props.number} items left</span>

            <div className="flex space-x-4">
                <button
                    className={
                        'hover:text-blue-600 transition-colors ' +
                        (props.filter === 'all'
                            ? 'text-blue-500 font-medium'
                            : '')
                    }
                    onClick={() => {
                        props.showAll();
                        props.setFilter('all');
                    }}
                >
                    All
                </button>
                <button
                    className={
                        'hover:text-blue-600 transition-colors ' +
                        (props.filter === 'active'
                            ? 'text-blue-500 font-medium'
                            : '')
                    }
                    onClick={() => {
                        props.showActive();
                        props.setFilter('active');
                    }}
                >
                    Active
                </button>
                <button
                    className={
                        'hover:text-blue-600 transition-colors ' +
                        (props.filter === 'completed'
                            ? 'text-blue-500 font-medium'
                            : '')
                    }
                    onClick={() => {
                        props.showCompleted();
                        props.setFilter('completed');
                    }}
                >
                    Completed
                </button>
            </div>

            <button
                className="hover:text-gray-700 transition-colors"
                onClick={props.clearCompleted}
            >
                Clear Completed
            </button>
        </div>
    );
}
