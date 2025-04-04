import { use } from "react"
import Friend from "./friend";

export default function Friends({friendPromice}){
    const abc = use(friendPromice);
    console.log(abc);
    
    return(
        <div className="btn">
            <h3>friends : {abc.length}</h3>
            {
                abc.map(friend => <Friend key = {friend.id} friend = {friend}></Friend>)
            }
        </div>
    )
}