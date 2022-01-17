import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Users from './components/github/Users';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from './components/Page2';
import Astronauts from './components/astronauts/Astronauts';


function App(props) {
  //declare component state

  const [users, setUsers] = useState({ users: [] })


  const fetchUsers = text => {
    fetch(`https://api.github.com/search/users?q=${text}`)
      .then(res => res.json())
      .then(data => setUsers({ users: data.items }))
  }




  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Users users={users.users} fetch={fetchUsers} />} />
        <Route path="/astronauts" element={<Astronauts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
