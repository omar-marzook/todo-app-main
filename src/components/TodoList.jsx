import TodoListItem from './TodoListItem';
import TodoListFooter from './TodoListFooter';

export default function TodoList() {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Todo Items */}
            <div className="divide-y divide-gray-100">
                {/* Completed Item */}
                <TodoListItem
                    name="Complete online JavaScript course"
                    completed
                />
                <TodoListItem name="Jog around the park 3x" />
                <TodoListItem name="10 minutes meditation" />
                <TodoListItem name="Read for 1 hour" />
                <TodoListItem name="Pick up groceries" />
                <TodoListItem name="Complete Todo App on Frontend Mentor" />
            </div>

            {/* Footer */}
            <TodoListFooter />
        </div>
    );
}
