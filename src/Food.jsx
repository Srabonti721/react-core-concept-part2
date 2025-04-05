import { useEffect, useState } from "react"

export default function Foods() {
    const [food, setfood] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setfood(data))
    }, [])
    return (
        <div className="css">
            <h4>more food</h4>
            <p>food name:{food.length} </p>
            <ol className="btn">
                {
                    food.map(food => <li>{food.name}</li>)
                }
            </ol>


        </div>
    )
}