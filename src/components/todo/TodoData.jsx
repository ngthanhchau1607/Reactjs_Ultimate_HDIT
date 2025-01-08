const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    const onDelete = (id) => {
        deleteTodo(id);
    };

    return (
        <div>
            {todoList.map((item) => {
                return (
                    <div key={item.id} className="todo-item">
                        <span>{item.name}</span>
                        <button
                            className="delete-btn"
                            onClick={() => onDelete(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoData;
