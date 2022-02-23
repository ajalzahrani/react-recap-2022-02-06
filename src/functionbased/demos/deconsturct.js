import React , {useState} from 'react'

const decon = () => {
    const [person, setPerson] = useState({
        id: 1,
        name: 'ali',
        admin: true,
    })

    return (
        <div>
            <form>
                <input type="text" onChange={useState}></input>
            </form>
        </div>
    )
}
