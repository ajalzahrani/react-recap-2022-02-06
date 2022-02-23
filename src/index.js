// https://ibaslogic.com/react-tutorial-for-beginners/

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"

// components
import TodoContainer from './functionbased/components/TodoContainer'
import Navbar from "./functionbased/components/Navbar"

// pages
import About from './functionbased/pages/About'
import NotMatch from './functionbased/pages/NotMatch'
import SinglePage from "./functionbased/pages/SinglePage"

// my demos
// import App from './functionbased/demos/demo-useState'
// import App from './functionbased/demos/arrayUseState'
// import App from './functionbased/demos/objectUseState'
// import App from './functionbased/demos/objectUseState1'

//stylesheet
import "./functionbased/App.css"

const element = "<h1>Hello, react 2022</h1>"

ReactDOM.render(
    <React.StrictMode>
      <main />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<TodoContainer/>} />
          <Route exact path='/about' element={<About/>}>
            <Route index element={<p>Please select one.</p>}></Route>
            <Route path="/about/:slug" element={<SinglePage/>}></Route>
            <Route path="/about/:slug" element={<SinglePage/>}></Route>
          </Route>
          <Route exact path='*' element={<NotMatch/>} />
        </Routes>
      </Router>
    </React.StrictMode>
    ,
    document.getElementById("root")
  )