import React,  { useState, useEffect }  from 'react'
import axios from 'axios';

export default function UsersFunc() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/?results=50")
                .then(response => {
                    setUsers(response.data.results  );
                }, )
                .catch(e => console.error(e))
        return () => {
        };
    }, [])
    return (
        <div>
            <ul>
                {users ?  users.map((data, ind) => {
                    return <li key={ind}>
                        {data.name.first}
                    </li>;
                }
                ):null}
            </ul>
        </div>
    );
}
