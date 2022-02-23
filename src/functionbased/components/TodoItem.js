import react, {useState, useEffect} from "react"
import { FaTrash } from "react-icons/fa"

import styles from "./TodoItem.module.css"

const TodoItem = (props) => {

    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        setEditing(true)
    }

    const handleEditingDone = event => {
        if(event.key === "Enter")
            setEditing(false)
    }

    useEffect(() => {
        return () => {
            console.log("Cleaning up...")
        }
    }, [])

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const {id, completed, title} = props.todo

    let editMode = {}
    let viewMode = {}

    if(editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input 
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                >
                </input>
                {/* {this.props.todo.title} */}

                <button onClick={() => props.deleteTodoProps(id)} 
                    style={{ color: "orangered", fontSize: "16px" }}>
                    <FaTrash />
                </button>
                <span style={completed ? completedStyle : null}> 
                    {title}
                </span>
            </div>
            <input 
                type="text" 
                className={styles.textInput} 
                style={editMode}
                value={title}
                onChange={e => {
                    props.setUpdateProps(e.target.value, id)
                }}
                onKeyDown={handleEditingDone}
            />
        </li>
    )
}

export default TodoItem 