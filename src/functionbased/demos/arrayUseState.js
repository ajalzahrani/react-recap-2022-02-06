// Program to demonstrate the use of arrays as a state variable (using useState())
import React, {useState} from "react";

const App = () => {
    const [click, setClick] = useState([])

    const addNumber = () => {
        setClick([...click, {id: click.length, value: Math.random() * 2}])
    }

    return (
        <div>
            <ul>
                {click.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Add item</button>
        </div>
    )
}

export default App