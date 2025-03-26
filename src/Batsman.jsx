import { useState } from "react"

export default function Batsman() {
        const [Run, setRuns] = useState (0);
        const [Six , setSixes] = useState (0);
        const singleHandler = () => {
            setRuns(Run + 1);
        }
        const fourHandler = () =>{
            setRuns(Run + 4);
        }
        const sixHandler = () => {
            const updateSixes = Six + 1;
            setSixes(updateSixes);
            setRuns(Run + 6)
        }
    return (
        <div style={{border : '2px solid rgba(255, 255, 255, 0.8)', padding: '10px', margin: '10px', backgroundColor: 'yellow', color: 'black', cursor: 'pointer',}}>
            <h3>Player: Bangla Batsman</h3>
            <p>SIX: {Six}</p>
            {
                Run > 100 && <h1>Congratulations! You have reached the target.</h1>
            }
            
            <h1>Score: {Run}</h1>
            <button onClick={singleHandler}>Single</button>
            <button onClick={fourHandler}>Four</button>
            <button onClick={sixHandler}>Six</button>
        </div>
    )
}