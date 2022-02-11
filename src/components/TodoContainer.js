import react from "react";
import { v4 as uuidv4 } from "uuid";

// my components
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends react.Component {

  state = {
    todos: [],
  }

  handleChange = id => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo
        }),
      }
    })
  }

  handleDelete = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id
        })
      ]
    })
  }

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  setUpdate = (title, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id == id) {
          todo.title = title
        }
        return todo
      })
    })
  }

  componentDidMount() {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if(storedTodos) {
      this.setState({todos: storedTodos})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = this.state.todos
      localStorage.setItem('todos', JSON.stringify(temp))
    }
  }

  render() {
      return (
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo 
              addTodoItemProps={this.addTodoItem}
            />
            <TodosList 
              todos={this.state.todos}
              handleChangeProps={this.handleChange}
              handleDeleteProps={this.handleDelete}
              setUpdateProps={this.setUpdate}
            />
          </div>
        </div>
      )
  }
}
  
export default TodoContainer