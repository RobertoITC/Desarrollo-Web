import {useEffect} from "react";
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard.jsx";
import Register from "./views/register/Register.jsx";
import Users from "./views/users/Users.jsx";

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
    <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="users/:id" element={<Users />}></Route>
    </Routes>
  )
}

export default App


