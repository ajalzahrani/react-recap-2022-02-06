import React from "react"
import ReactDom from "react-dom"
import TodoContainer from './components/TodoContainer'

//stylesheet
import "./App.css"

const element = "<h1>Hello, react 2022</h1>"

ReactDom.render(


    <TodoContainer />


, document.getElementById('root'));