import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      // console.log(data);
    })
  })
  return (
    <div className="App">
      {
        users.map(user => 
          <li key={user.id}>{user.name}</li>)
      }
    
    </div>
  );
}

export default App;
