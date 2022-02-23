import react from "react";
import TodoItem from "./TodoItem"

class TodosList extends react.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo}
                            handleChangeProps={this.props.handleChangeProps}
                            handleDeleteProps={this.props.handleDeleteProps}
                            setUpdateProps={this.props.setUpdateProps}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodosList