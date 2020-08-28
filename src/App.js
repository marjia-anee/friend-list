import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import User from './components/User/User';

function App() {

 const [users, setUsers] = useState([]);

 

 useEffect(() => {

  fetch ('https://randomuser.me/api/?results=15&fbclid=IwAR2Jb_myklf-xFoP10n9hVzF-xWuKZOWEMXFd5u0x-pM4LpbhD4BIGqJBmM')
  .then (res => res.json ())
  .then (data =>{ 
    setUsers(data.results);
   console.log(data.results);
   const names = data.map (user => user.name)
   console.log(names);
  
  } )
  .catch (error => console.log(error))

 }, [])
  
  return (
    <div>
      <h1>user loaded: {users.length}</h1>
      <ul>
      {
        users.map(user => <User user={user}> </User>)
      }
      </ul>
    </div>
    
  );
}

export default App;
