import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Users from './components/Users';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from './components/Page2';


function App(props) {
  //declare component state

  const [users, setUsers] = useState({ users: [] })


  const fetchUsers = () => {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => setUsers({ users: data }))
  }


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="github-users" element={<Users users={users.users} fetch={fetchUsers} />} />
        <Route path="page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
