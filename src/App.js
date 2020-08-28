import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import User from './components/User/User';

function App() {

  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);

useEffect(() => {

    fetch('https://randomuser.me/api?results=15')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])

  const addMember = (name) => {
    setTeam([...team, name])

  }

  return (
    <div>
      <h1>Friend List</h1>

      <ul>
        {
          team.map (m => <li>{m}</li>)
        }
      </ul>

      {
        users.map(user => <User user={user} addMember = {addMember} > </User>)
      }

    </div>

  );
}

export default App;
