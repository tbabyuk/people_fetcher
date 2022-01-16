import './App.css';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import Spinner from './components/Spinner';

function App(props) {

  //include state data here

  const [users, setUsers] = useState({
                            users: [],
                            loading: false
                          })

  const searchUsers = async text => {
    const res = await fetch(`https://api.github.com/search/users?q=${text}`)
                          .then(res => res.json())
                          .then(data => setUsers({users: data.items, loading: false}))
  };


  
  // useEffect(() => {
  //   setUsers({...users, loading: true})
  //     fetch("https://api.github.com/users")
  //     .then(res => res.json())
  //     .then(data => setUsers({users: data}))
  //     setUsers({...users, loading: false})
  //   }, [])



  return (
    <div className="App">
      <Navbar />
      <Search searchUsers={searchUsers}/>
      {users.loading ? <Spinner /> : <div />}

      <Users users={users}/>
    </div>
  );
}

export default App;
