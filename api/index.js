import express from 'express'
const app = express();
import cors from 'cors'
import {Users} from './users.js'

app.use(cors());

app.get('/', (req, res) => {
    const {q} = req.query
    console.log(q)

    const keys = ['first_name', 'last_name', 'email'];

    const search = (users) => {
    //return users.filter((item) => item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query))
    return users.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q)))
  }

    res.json( search(Users).splice(0,5))

});

app.listen(5000, () => console.log('API is working'))