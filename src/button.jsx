import {useState} from 'react'
export default function Counter(){
    const [count,setCount] = useState(0);
    const handleAdd =()=>{
   let addNum = count + 1;
   setCount(addNum)
    }
    const countStyle = {
        border : '3px solid',
        backgroundColor : 'purple',
        color: 'white',
        margin : '10px',
        padding : '10px',
        borderRadius : '10px'
    }
    return(
        <div style={countStyle}>
            <h4>count : {count}</h4>
          <button className='btn' onClick={handleAdd}>add</button>
        </div>
    )
}