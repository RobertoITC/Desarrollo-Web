import {useEffect} from "react";
import {useState} from "react";

const UrlLocalhost = 'http://localhost:3000/users';

function App() {
    const [user, setUser] = useState('');
    const [allUsers, setAllUsers] = useState([]);

    const fetchUsers=async () =>{
        const response = await fetch(UrlLocalhost);
        const data = await response.json();
        setAllUsers(data);
        console.log(data);

    }


    useEffect(() => {
        fetchUsers();
    }, []);

  return (
    <>
      <h1>Usuarios</h1>
        <div className="container">
            <div className="row">{allUsers.map((user)=>(
                <div>
                    {user.name}
                </div>


            ))}</div>
        </div>
    </>
  )
}

export default App
