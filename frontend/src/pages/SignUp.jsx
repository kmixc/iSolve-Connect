import React, { useState } from 'react'
import axios from "axios";
import Login from '../pages/Login'

import {
    BrowserRouter as Router,
    useHistory,
} from "react-router-dom";

export default function SignUp() {

  
        const[input, setInput] = useState({
            email: '',
            password: '',
            address: '',
            birth: '',
            occupation: ''
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
        
        let path = `/login`
        
        event.preventDefault();
        const newComp = {
            email: input.email,
            name: input.name,
            password: input.password,
            address: input.address,
            occupation: input.occupation
        }

        //calls the server.js http
        axios.post('http://localhost:8082/create', newComp)
        console.log('pressed!')

        history.push(path)
        
    }
    
    return (
       
        <div>
            <div className='container p-5 mt-5 bg-iSolve text-light rounded'>
                <form>

                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input  type="email" onChange={handleChange} class="form-control" name="email" value={input.email} id="email" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="name">Name</label>
                        <input  type="name" onChange={handleChange} class="form-control" name="name" value={input.name} id="name" aria-describedby="name" />
                        <small id="emailHelp" class="form-text">If you're a company, please input your companies name.</small>
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" onChange={handleChange} name="password" value={input.password} class="form-control" id="password" />
                    </div>

                    <div class="form-group">
                        <label for="adress">Address</label>
                        <input type="address" onChange={handleChange} name="address" value={input.address} class="form-control" id="adress" />
                    </div>

                    {/*
                    <div class="form-group">
                        <label for="DOB">Date of Birth</label>
                        <div className='d-flex'>
                            <select class="form-control mx-1" id="month">
                                <option>Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            <input type="email" class="form-control mx-1" placeholder='Day' id="day" />
                            <input type="email" class="form-control mx-1" placeholder='Year' id="year" />
                        </div>
                    </div>
                        */}

                    <div class="form-group">
                        <label for="occupation">Occupation</label>
                        <div className='d-flex'>
                            <select onChange={handleChange} name="occupation" value={input.occupation} class="form-control mx-1" id="occupation">
                                <option>What is your profession?</option>
                                <option>I am Programmer</option>
                                <option>I am Company</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group form-check">
                        <p className='text-center'>By clicking Sign Up, you are indicating that you have read and acknowledge the <b>Terms of Service</b> and <b>Privacy Notice</b>.</p>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <button onClick={handleClick}  type="submit" class="btn btn-primary">Sign Up</button>
                        <a className='p-2 btn btn-secondary' href="/login">Already have an account Login here.</a>
                    </div>
                </form>
            </div>
        </div>
    
        
    )
    
}
