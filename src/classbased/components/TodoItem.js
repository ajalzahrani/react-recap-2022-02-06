import react from "react"

import styles from "./TodoItem.module.css"

class TodoItem extends react.Component {

    state = {
        editing: false,
    }

    handleEditing = () => {
        this.setState({
            editing: true
        })
    }

    handleEditingDone = event => {
        if(event.key === "Enter")
        this.setState({
            editing: false
        })
    }

    componentWillUnmount() {
        console.log("Cleaning up ...")
    }

    render () {

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        const {id, completed, title} = this.props.todo

        let editMode = {}
        let viewMode = {}

        if(this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input 
                        type="checkbox"
                        className={styles.checkbox}
                        checked={completed}
                        onChange={() => this.props.handleChangeProps(id)}
                    >
                    </input>
                    {/* {this.props.todo.title} */}

                    <button
                        type="button"
                        onClick={() => this.props.handleDeleteProps(id)}>
                    Delete
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
                        this.props.setUpdateProps(e.target.value, id)
                    }}
                    onKeyDown={this.handleEditingDone}
                />
            </li>
        )
    }
}

export default TodoItem 