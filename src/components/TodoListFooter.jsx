export default function TodoListFooter(props) {
    return (
        <div className="flex items-center justify-between p-4 text-sm text-gray-500 border-t border-gray-100">
            <span>{props.number} items left</span>

            <div className="flex space-x-4">
                <button
                    className="text-blue-500 hover:text-blue-600 font-medium"
                    onClick={props.showAll}
                >
                    All
                </button>
                <button
                    className="hover:text-gray-700 transition-colors"
                    onClick={props.showActive}
                >
                    Active
                </button>
                <button
                    className="hover:text-gray-700 transition-colors"
                    onClick={props.showCompleted}
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
