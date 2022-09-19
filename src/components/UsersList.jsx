import React from 'react';
import axios from 'axios';

const UsersList = ({users, selectUser, getUsers}) => {
    
    const deleteUser = (id) => {
        axios
        .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers())
        .catch(error => console.log(error.response))
    }
    
    
    
    return (
        <div>
            <h2 className='title'>Users</h2>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            <div>{user.first_name}</div>
                            <div>{user.last_name}</div>
                            <div>{user.birthday}</div>
                            <button onClick={() => selectUser(user)}>Edit</button>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default UsersList;