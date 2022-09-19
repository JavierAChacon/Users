import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, userSelected, deselectUser}) => {
    
    const {register, handleSubmit, reset} = useForm()

    const submit = data => {
        if(userSelected){
           axios
           .put(`https://users-crud1.herokuapp.com/users/${data.id}/`, data)
           .catch(error => console.log(error.response)) 
        } else{
            axios
            .post('https://users-crud1.herokuapp.com/users/', data)
            .then(() => getUsers())
            .catch(error => console.log(error.response)) 
        }
        clear()
    }

    const clear = () => {
        
        reset({
            first_name: "",
            last_name: "",
            email: "",
            birthday: "",
            password: ""
        })
        deselectUser()
    }
    
    useEffect(() =>{
        if(userSelected){
            reset(userSelected)
        }
    }, [userSelected])
    
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>New User</h2>

            <div className="complete-name">

                <label htmlFor="name"><i className="icon fi fi-sr-user"></i></label>
        
                <div className="full-name">

                    <input 
                    type="text" 
                    id='name'
                    placeholder='Name'
                    {...register('first_name', { required: true })}
                    />


                    <label htmlFor="last-name"></label>
                    <input type="text"
                    id='last-name'
                    placeholder='Last Name'
                    {...register('last_name', { required: true })}
                    />

                    
                </div>

            </div>


            <div className="input-container">

                <label htmlFor="email"><i className="fi fi-sr-envelope"></i></label>
                <input 
                type="text" 
                id='email'
                placeholder='Email'
                minLength={1}
                maxLength={150}
                {...register('email', { required: true })}
                />

            </div>

            <div className="input-container">

                <label htmlFor="password"><i className="fi fi-sr-lock"></i></label>
                <input 
                type="password" 
                id='password'
                placeholder='Password' 
                {...register('password', { required: true })}/>

            </div>

            <div className="input-container">

                <label htmlFor="birthday"><i className="fi fi-sr-cake-birthday"></i></label>
                <input type="date" id='birthday' 
                {...register('birthday', { required: true })}/>

            </div>

            <div className='formButtons'>


                <button>Upload</button>
                <button onClick={clear} type="button">Clear</button>

            </div>

        </form>
    );
}

export default UsersForm;