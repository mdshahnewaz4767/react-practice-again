import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([])
  const [singleUser, setSingleUser] = useState({})
  const [randomUser, setRandomUser] = useState({})

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      // console.log(data);
    })

    //Single users
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => {
      setSingleUser(data)
      // console.log(data);
    })

    //Random users
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      setRandomUser(data.results[0])
      console.log(data.results[0]);
    })
  }, [])
  return (
    <div className="App">
      <h1>{singleUser.name}</h1>
      <h1>Random Gender: {randomUser.gender}</h1>
      <h1>Random Name: {randomUser.name && randomUser.name.first}</h1>
      <h2>Random Name: {randomUser.name?.first}</h2>
      {
        users.map(user => 
          <li key={user.id}>{user.name}</li>)
      }
    
    </div>
  );
}

export default App;
