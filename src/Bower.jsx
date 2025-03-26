import { useState } from "react";

export default function Bowler() {
    const [Wecket, setWicket] = useState (0);
    const [Wide, setWide] = useState (0);
    const [noBall, setNoBall] = useState (0);
    const Wides = () => {
        setWide(Wide + 1);
    }
    
    // const mainWecket = (10 -WecketHandelar)
    return (
        <div style={{border : '2px solid rgba(255, 255, 255, 0.8)', padding: '10px', margin: '10px', backgroundColor: 'perple', color: 'white', cursor: 'pointer',}}>
            <h3>Player: Micel Strac</h3>
            <p>Collect-Wecket: {Wecket}</p>
            <h4>Wide: {Wide}</h4>
            <h4>No-Ball: {noBall}</h4>
            <button onClick={() => setWicket(Wecket + 1)}>Wicket</button>
            <button onClick={Wides}>wide</button>
            <button onClick={() => setNoBall(noBall + 1)}>No-Ball</button>
        </div>
    )
}