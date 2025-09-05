export default function TodoInput() {
    return (
        <div className="bg-white rounded-lg shadow-sm mb-6">
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full p-4 text-gray-700 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-lg"
            />
        </div>
    );
}