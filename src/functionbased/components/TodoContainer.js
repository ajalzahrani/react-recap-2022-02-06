import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom"

// my components
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";

function getInitalTodos() {
  const temp = JSON.parse(localStorage.getItem('todos'))
  return temp || []
}

const TodoContainer = () => {

  const [todos, setTodos] = useState(getInitalTodos)

  const handleChange = id => {
    setTodos(prevState => {
        return prevState.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo
        })
    })
  }

  const handleDelete = id => {
    setTodos([
        ...todos.filter(todo => {
          return todo.id !== id
        }),
      ]
    )
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (title, id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id == id) {
          todo.title = title
        }
        return todo
      })
    )
  }

  // useEffect(() => {
  //   console.log('Use Effect')

  //   const storedTodos = JSON.parse(localStorage.getItem('todos'))

  //   if(storedTodos) {
  //     setTodos(storedTodos)
  //   }
  // }, [setTodos])

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem('todos', temp)
  }, [todos])

  // const componentDidMount = () => {
  //   const storedTodos = JSON.parse(localStorage.getItem('todos'))
  //   if(storedTodos) {
  //     setTodos({todos: storedTodos})
  //   }
  // }

  // const componentDidUpdate = (prevProps, prevState) => {
  //   if(prevState !== todos) {
  //     const temp = todos
  //     localStorage.setItem('todos', JSON.stringify(temp))
  //   }
  // }

  return (
    <div className="container">
      <div className="inner">
          <Header/>
          <InputTodo addTodoItemProps={addTodoItem} />
          <TodosList 
            todos={todos}
            handleChangeProps={handleChange}
            handleDeleteProps={handleDelete}
            setUpdateProps={setUpdate} />
      </div>
    </div>
  )
}
  
export default TodoContainer