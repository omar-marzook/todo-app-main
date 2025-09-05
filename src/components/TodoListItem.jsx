export default function TodoListItem(props) {
    return (
        <div className="flex items-center p-4 group hover:bg-gray-50 transition-colors">
            <button
                className={
                    'flex-shrink-0 w-6 h-6 rounded-full border-2  transition-colors mr-4 ' +
                    (props.completed
                        ? 'border-purple-500 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center'
                        : 'border-gray-300 hover:border-purple-500')
                }
                onClick={() => props.toggleTodoCompletion(props.id)}
            >
                {props.completed && (
                    <svg
                        className="w-3 h-3 text-purple-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                )}
            </button>
            <span
                className={
                    'flex-1 text-gray-700' +
                    (props.completed ? ' line-through' : '')
                }
            >
                {props.name}
            </span>
        </div>
    );
}
