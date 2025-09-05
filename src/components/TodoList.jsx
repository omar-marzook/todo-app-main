import TodoListItem from './TodoListItem';
import TodoListFooter from './TodoListFooter';

export default function TodoList(props) {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Todo Items */}
            <div className="divide-y divide-gray-100">
                {props.todos.map((todo) => (
                    <TodoListItem
                        key={todo.id}
                        name={todo.name}
                        completed={todo.completed}
                        id={todo.id}
                        toggleTodoCompletion={props.toggleTodoCompletion}
                    />
                ))}
            </div>

            <TodoListFooter number={props.todos.length} />
        </div>
    );
}
