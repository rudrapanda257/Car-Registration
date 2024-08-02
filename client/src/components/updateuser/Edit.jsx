import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";
import toast from 'react-hot-toast';

const Edit = () => {

 const users = {
    fname: "",
    lname: "",
    email: "",
    password:""
 }

 const {id} = useParams();
 const navigate = useNavigate();
 const [user, setUser] = useState(users);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value});
    console.log(user);
 }

 useEffect(()=>{
    axios.get(`https://car-registration.onrender.com/api/getone/${id}`)
    .then((response)=>{
        setUser(response.data)
    })
    .catch((error)=>{
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.error('Response error:', error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error', error.message);
          }
          console.error('Config error:', error.config);
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`https://car-registration.onrender.com/api/update/${id}`, user)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
 }

  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update Car Model</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">Car Name</label>
                <input type="text" value={user.fname} onChange={inputChangeHandler} id="fname" name="fname" autoComplete='off' placeholder='Car Name<' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Manufacturing Year</label>
                <input type="text" value={user.lname} onChange={inputChangeHandler} id="lname" name="lname" autoComplete='off' placeholder='Manufacturing Year' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Price</label>
                <input type="text" value={user.email} onChange={inputChangeHandler} id="email" name="email" autoComplete='off' placeholder='Price' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Total Car Avalable</label>
                <input type="text" value={user.password} onChange={inputChangeHandler} id="password" name="password" autoComplete='off' placeholder='Price' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE CAR</button>
            </div>
        </form>
    </div>
  )
}

export default Edit