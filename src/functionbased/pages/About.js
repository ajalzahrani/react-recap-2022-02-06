import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Outlet,
    NavLink
  } from "react-router-dom";
import SinglePage from './SinglePage'

const About = (props) => {

    return (
        <div 
            // style={{ display: "flex"}}
            >
            <nav 
            // style={{
            //     borderRight: "solid 1px",
            //     padding: "1rem"
            // }}
            className="about__content"
            >
                <ul className="about__list">
                    <li>
                        <NavLink to={ `/about/about-app` } style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "white"
                            }
                        } } > About app </NavLink>
                    </li>
                    <li>
                        <NavLink to={ `/about/about-author` } style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "white"
                            }
                        } } > About author </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default About