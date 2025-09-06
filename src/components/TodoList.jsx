import TodoListItem from './TodoListItem';
import TodoListFooter from './TodoListFooter';

export default function TodoList(props) {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Todo Items */}
            <div className="divide-y divide-gray-100">
                {props.todos.map(
                    (todo) =>
                        todo.visible && (
                            <TodoListItem
                                key={todo.id}
                                name={todo.name}
                                completed={todo.completed}
                                active={todo.active}
                                id={todo.id}
                                toggleTodoCompletion={
                                    props.toggleTodoCompletion
                                }
                                handleActive={props.handleActive}
                            />
                        )
                )}
            </div>

            <TodoListFooter
                number={props.todos.length}
                showAll={props.showAll}
                showActive={props.showActive}
                showCompleted={props.showCompleted}
                clearCompleted={props.clearCompleted}
                filter={props.filter}
                setFilter={props.setFilter}
            />
        </div>
    );
}
