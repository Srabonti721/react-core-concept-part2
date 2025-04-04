import { use} from "react"

export default function Users({fetchUsers}) {

    const users = use(fetchUsers);
    console.log(users);
    
    return (
        <div className="card">
            <h3>user data : {users.length}</h3>
        </div>
    )
}