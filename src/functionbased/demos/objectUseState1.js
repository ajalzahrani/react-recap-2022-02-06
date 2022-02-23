import React, {useState} from 'react'

const App = () => {
    const [inputText, setInputText] = useState({
        fname: '',
        lname: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Information submited")
    }

    const handleChange = (e) => {
        setInputText({
            // ...inputText,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Firstname:
                    <input
                        name="fname"
                        type='text'
                        value={inputText.fname}
                        onChange={handleChange}
                    ></input>
                </label>
                <br />
                <label>
                    Lastname:
                    <input
                        name="lname"
                        type='text'
                        value={inputText.lname}
                        onChange={handleChange}
                    ></input>
                </label>
                <br />
                <button>Submit</button>
            </form>

            <h1>{inputText.fname}</h1>
            <h1>{inputText.lname}</h1>
        </div>
    )
}

export default App