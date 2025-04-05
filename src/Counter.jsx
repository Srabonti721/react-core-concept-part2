import { useState } from "react"

export default function Counters() {
    const [counter, setCounter] = useState(0);
    const handleCouuntAdd = () => {
        const addCounter = counter + 1;
        setCounter(addCounter)
    }
    const handleCounterDiff = () => {
        const diffCounter = counter - 1;
        setCounter(diffCounter)
    }
    return (
        <div className="btn">
            <h2> React task Counter</h2>
            <h4>counter : {counter} </h4>
            <button onClick={handleCouuntAdd} className="btn"> count +</button>
            <button onClick={handleCounterDiff} className="btn"> count -</button>
            <button className="btn">reset</button>
        </div>
    )
}