import React, { useState } from 'react'

const App = () => {
    const [click, setClick] = useState(1)

    return (
        <div>
            <p>You've clicked {click} times!</p>
            <p>The number of times you have clicked is {click%2 == 0 ? 'Even' : 'Odd'}</p>
        
            <button
                onClick={() => setClick( click + 1 )}
            >
                Clicks count = {click}
            </button>
        </div>
    )
}

export default App