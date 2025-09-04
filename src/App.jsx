import { useState } from 'react';
import bannerBg from './assets/images/bg-desktop-light.jpg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <main
            className={`min-h-screen flex items-center justify-center p-4 bg-[url(${bannerBg})] bg-[linear-gradient(135deg,_#8B5CF6_0%,_#A855F7_25%,_#C084FC_50%,_#E879F9_75%,_#60A5FA_100%)]`}
        >
            <div className="w-full max-w-md">
                {/* <!-- Header --> */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-white text-3xl font-light tracking-[0.3em]">
                            TODO
                        </h1>
                        <button className="text-white/80 hover:text-white transition-colors ml-4">
                            {/* <!-- Moon icon placeholder --> */}
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* <!-- Create Todo Input --> */}
                <div className="bg-white rounded-lg shadow-sm mb-6">
                    <input
                        type="text"
                        placeholder="Create a new todo..."
                        className="w-full p-4 text-gray-700 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-lg"
                    />
                </div>

                {/* <!-- Todo List --> */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* <!-- Todo Items --> */}
                    <div className="divide-y divide-gray-100">
                        {/* <!-- Completed Item --> */}
                        <div className="flex items-center p-4 group hover:bg-gray-50 transition-colors">
                            <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-purple-500 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mr-4">
                                {/* <!-- Check icon --> */}
                                <svg
                                    className="w-3 h-3 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                            <span className="flex-1 text-gray-400 line-through">
                                Complete online JavaScript course
                            </span>
                        </div>

                        {/* <!-- Active Items --> */}
                        <div className="flex items-center p-4 group hover:bg-gray-50 transition-colors">
                            <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 hover:border-purple-500 transition-colors mr-4"></button>
                            <span className="flex-1 text-gray-700">
                                Jog around the park 3x
                            </span>
                        </div>

                        <div className="flex items-center p-4 group hover:bg-gray-50 transition-colors">
                            <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 hover:border-purple-500 transition-colors mr-4"></button>
                            <span className="flex-1 text-gray-700">
                                10 minutes meditation
                            </span>
                        </div>

                        <div className="flex items-center p-4 group hover:bg-gray-50 transition-colors">
                            <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 hover:border-purple-500 transition-colors mr-4"></button>
                            <span className="flex-1 text-gray-700">
                                Read for 1 hour
                            </span>
                        </div>

                        <div className="flex items-center p-4 group hover:bg-gray-50 transition-colors">
                            <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 hover:border-purple-500 transition-colors mr-4"></button>
                            <span className="flex-1 text-gray-700">
                                Pick up groceries
                            </span>
                        </div>

                        <div className="flex items-center p-4 group hover:bg-gray-50 transition-colors">
                            <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 hover:border-purple-500 transition-colors mr-4"></button>
                            <span className="flex-1 text-gray-700">
                                Complete Todo App on Frontend Mentor
                            </span>
                        </div>
                    </div>

                    {/* <!-- Footer --> */}
                    <div className="flex items-center justify-between p-4 text-sm text-gray-500 border-t border-gray-100">
                        <span>5 items left</span>

                        <div className="flex space-x-4">
                            <button className="text-blue-500 hover:text-blue-600 font-medium">
                                All
                            </button>
                            <button className="hover:text-gray-700 transition-colors">
                                Active
                            </button>
                            <button className="hover:text-gray-700 transition-colors">
                                Completed
                            </button>
                        </div>

                        <button className="hover:text-gray-700 transition-colors">
                            Clear Completed
                        </button>
                    </div>
                </div>

                {/* <!-- Drag and drop hint --> */}
                <p className="text-center text-white/60 text-sm mt-6">
                    Drag and drop to reorder list
                </p>
            </div>
        </main>
    );
}

export default App;
