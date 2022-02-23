import React, { useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"

const Navbar = () => {

    const [navbarOpen, setNavBarOpen] = useState(false)

    const Links = [
        {
            id: 1,
            path: '/',
            text: 'Home'
        },
        {
            id: 2,
            path: '/about',
            text: 'About us'
        },
        // {
        //     id: 3,
        //     path: '/notmatch',
        //     text: 'Not found'
        // }
    ]

    const handleToggle = () => {
        setNavBarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavBarOpen(false)
    }

    return (
        <nav className="navBar" 
            //  style={{
            //     paddingLeft: "1rem",
            //     paddingBottom: "1rem",
            //     borderBottom: "1px solid"
            //     }}
                >
                
                <button onClick={handleToggle}>
                    {navbarOpen ? (
                        <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                    ) : (
                        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                    )}
                </button>

            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}> {
                Links.map(link => {
                    {/* <Link to={link.path}>{link.text}</Link> */}
                    return (
                        <li key={link.id}>
                            <NavLink to={link.path} onClick={() => closeMenu()} className="active-link">
                                {link.text}
                            </NavLink>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}

export default Navbar