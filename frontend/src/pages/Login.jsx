import React, { useState } from 'react'
import axios from "axios";
import Logo from '../img/logo.svg'

import {
    BrowserRouter as Router,
    useHistory,
} from "react-router-dom";

export default function Login() {

    const[input, setInput] = useState({
        email: '',
        password: ''
    })


function handleChange(event){
    const {name, value} = event.target;

    setInput(prevInput => {
        return {
            ...prevInput,
            [name]:value
        }
    })
}
const history = useHistory();

function handleClick(event){ 
    
    let path = `/about`
    
    event.preventDefault();
    const userCheck = {
        email: input.email,
        password: input.password,  
    }

   

    //calls the server.js http
    axios.post('http://localhost:8082/userLogin', userCheck)
    console.log('pressed!')

    history.push(path)
    
}
    return (
        <div className='d-flex align-items-center justify-content-center text-light my-5 login-cont'>
            <div className='logo-form'>
                <img className='logo' src={Logo} alt="iSolve Logo" />
                <p className='text-center text-dark'>We connect to Solve your problems.</p>
            </div>
            <div className='container login-form my-5 bg-iSolve p-5 m-5 rounded'>
                <form className='form-login'>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input onChange={handleChange} type="email" name="email" value={input.email} class="form-control" id="email" />
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input onChange={handleChange} type="password" name="password" value={input.password}  class="form-control" id="password" />
                    </div>

                    <button onClick={handleClick} type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}
