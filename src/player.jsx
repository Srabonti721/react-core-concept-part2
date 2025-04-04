import { useState } from "react"

export default function Batman(){
    const [run,setRun] = useState(0);
    const [six,setSix] = useState(0);
    const [four,setFour] =useState(0);
const handleRun = () => {
    const newRun = run + 1;
    setRun (newRun)
}
const handleFour =()=>{
    const addFour = run + 4;
    const updatedFour = four + 1;
    setFour(updatedFour)
    setRun(addFour)
}
const handleSix = () =>{
    const addSix = run+6;
    const updatedSix = six + 1;
    setSix(updatedSix)
    setRun(addSix)
}
    return(
        <div className="btn">
            <h3>Bangladesh player</h3>
<h5> count six :{six}</h5>
<h5>count four : {four}</h5>
            <h4>score : {run}</h4>
            <button onClick={handleRun} className="btn">run</button>
            <button onClick={handleFour} className="btn">four</button>
            <button onClick={handleSix} className="btn">six</button>

        </div>
    )
}