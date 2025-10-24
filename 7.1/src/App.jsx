import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
    async function getUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    }
    getUsers()


  return (
    <div className="container">
      <h1 className="title">List of Users</h1>
      <div className="card-grid">
        {users.map(user => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App