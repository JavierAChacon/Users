import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  
  const [users, setUsers] = useState([])

  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios
    .get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }, [])

  const getUsers = () => {
    axios
    .get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))

  }

  const selectUser = (user) => {
    setUserSelected(user)
    
  }

  const deselectUser = () =>{
    setUserSelected(null)
     
  }


  
  console.log(users)
  return (
    <div className="App">
        
        <div className='form'>
          <UsersForm
          getUsers = {getUsers}
          userSelected = {userSelected}
          deselectUser = {deselectUser}
          />
        </div>

        <div className='list'>
          <UsersList
          users = {users}
          selectUser = {selectUser}
          getUsers = {getUsers}/>
        </div>
        
        
    </div>
  )
}

export default App
