import React from 'react';
import axios from 'axios';


const UsersList = ({ users, selectUser, getUsers }) => {

    const deleteUser = (id) => {
        axios
            .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers())
            .catch(error => console.log(error.response))
    }



    return (
        <div>
            <h2 className='title'>Users</h2>
            <div className='totalList'>
                {
                    users.map(user => (
                        <div className='listItem' key={user.id}>
                            
                            <div className='listInfo'>
                                <h3>{user.first_name} {user.last_name}</h3>
                                <p>{user.email}</p>
                                <div>{user.birthday}</div>
                            </div>


                            <div className='listButtons'>
                                <button onClick={() => selectUser(user)}><i className="edit fi fi-sr-pencil"></i></button>
                                <button onClick={() => deleteUser(user.id)}><i className="trash fi fi-sr-trash"></i></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default UsersList;