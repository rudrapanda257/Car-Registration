import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./add.css";
import toast from 'react-hot-toast';

const Add = () => {

  const users = {
    fname:"",
    lname:"",
    email:"",
    password:"",
    color:""
   
  }

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) =>{
      const {name, value} = e.target;
      setUser({...user, [name]:value});
  }

  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("https://car-registration.onrender.com/api/create", user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
  }


  return (
    <div className='addUser'>
         <Link to={"/"}>Back to Home</Link>
        <h3>Add New Car  </h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">Car name</label>
                <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='Car name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Manufacturing Year</label>
                <input type="text" onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='Year of Manufacturing' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Price</label>
                <input type="text" onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Price' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Total Car Avalable</label>
                <input type="text" onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='Car Number' />
            </div>
            <div className="inputGroup">
                <label htmlFor="color">Color</label>
                <input type="text" onChange={inputHandler} id="color" name="color" autoComplete='off' placeholder='Car Color' />
            </div>
            
            <div className="inputGroup">
                <button type="submit">ADD A NEW CAR 🚘</button>
              
            </div>
        </form>
    </div>
  )
}

export default Add