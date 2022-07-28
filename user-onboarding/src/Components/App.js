import React, {useState} from 'react';
import axios from "axios";
import './App.css';
import Form from './Form'

import antipasti from "../Images/antipasti.png";
const initialFormValues = {
  "first_name": "",
  "last_name": "",
  email: "",
  password: "",
  tos: false,
}
const initialFormErrors = {
  "first_name": "",
  "last_name": "",
  email: "",
  password: "",
  tos: "",
}
const initialUsers = [];
const initialDisable = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disable, setDisable] = useState(initialDisable);

const getUsers = () =>{
  axios.get("https://reqres.in/api/users")
  .then(
    res => console.log(res)
  ).catch(err => console.error(err))
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={antipasti} className="App-logo" alt="logo" />
        <p>
          I'm so much older now,<br/>give me peace,<br/>give me peace<br/><br/>
        </p>
        < Form />
      </header>
    </div>
  );
}

export default App;
