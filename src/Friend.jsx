export default function Friend({friend}){
    console.log(friend);
    const {name ,email , phone}= friend;
    
    return(
        <div className="card">
            <h2>name : {name}</h2>
            <p>address : {email}</p>
            <p>phone : {phone}</p>
        </div>
    )
}