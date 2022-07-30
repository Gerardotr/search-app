import { useEffect, useState } from 'react';
import './App.css';
import { Table } from './Table';
import { Users } from './users'

import axios from 'axios'

function App() {
  const [query, setQuery] = useState('');
  const [data, setdata] = useState([])
  //console.log(Users.filter(user => user.first_name.toLocaleLowerCase().includes('ra')))

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`)
      setdata(res.data)
    }
    if (query.length === 0 || query.length > 2) fetchUsers()
  }, [query])


  // const keys = ['first_name', 'last_name', 'email'];

  // const search = (users) => {
  //   //return users.filter((item) => item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query))
  //   return users.filter((item) => keys.some((key) => item[key].toLowerCase().includes(query)))
  // }


  return (
    <div className='app'>
      <input type="text" placeholder='Search..' className='search' onChange={(e) => setQuery(e.target.value)} />


      {/* <ul className='list'>
        {
          Users.filter(user => user.first_name.toLocaleLowerCase().includes(query)).map((user) => (<li key={user.id}  className='list-item'>{user.first_name}</li>))
        }
      </ul> */}

      <Table users={data} />
    </div>
  );
}

export default App;
