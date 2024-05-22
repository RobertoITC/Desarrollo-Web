

import Card from './components/Card';
import {useEffect, useState} from "react";
import NavigationBar from "../../shared/NavigationBar.jsx";


const Dashboard = () => {
    const UrlLocalhost = 'http://localhost:3000/users';

    const [searchTerm, setSearchTerm] = useState('');

    const [users, setUsers] = useState([]);

    const fetchUsers=async () =>{
        const response = await fetch(UrlLocalhost);
        const data = await response.json();
        setUsers(data);
        console.log(data);

    }


    useEffect(() => {
        fetchUsers();
    }, []);

    const filteredNames = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <NavigationBar>
            <div className={"mt-3 h-screen bg-[#399c7f]/20"}>
            <input onChange={(e) => setSearchTerm(e.target.value)} className={'border-[2px] rounded-[15px] pl-2 ml-2 mt-4'}
                   type={'text'} placeholder={'Filtrar por nombre'}/>

            <div className={'grid grid-cols-4'} >

                {filteredNames.map((user) => (
                    <div key={user.id} style={{padding: '.5%'}}>
                        <Card user={user}/>
                    </div>
                ))}


            </div>
            </div>
        </NavigationBar>
    )
};

export default Dashboard;