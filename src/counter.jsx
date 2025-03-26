import { useState } from "react"

export default function Counter() {
    const [count , setCount] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
    }
    const counterStyle = {
        border : '2px solid rgba(255, 255, 255,',
        padding: '10px',
        margin: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        cursor: 'pointer',
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}