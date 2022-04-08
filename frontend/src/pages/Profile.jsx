import React, { useState, useEffect } from 'react'
import User from '../img/UserIcon-white.png'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

export default function Profile() {

    const [count, setCount] = React.useState(0);


    const [user, setUser] = useState([{
        name: '',
        occupation: ''
    }])

    const history = useHistory()


    useEffect(() => {


        const token = localStorage.getItem('token')
        console.log(token)
        if (token) {
            const user = jwt.decode(token)
            console.log(user)
            if (!user) {
                localStorage.removeItem('token')
                history.replace('/login')
                console.log('user not logged')
            }
            else {

                console.log('user found')
            }
        } else {
            history.replace('/login')
            alert('User not logged in')
            console.log('user not logged')
        }
        fetch("/profile", {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUser(jsonRes));
        setCount(1);
    }, [])
    return (
        <div className='profile'>
            {user.map(user =>
                <div className='container bg-iSolve my-5 text-light'>
                    <div className='container d-flex justify-content-between align-items-center'>

                        <div className='text-center'>

                            <img width="200px" src={User} alt="" />
                            <p className='m-0'>{user.name}</p>
                            <small>{user.name}</small>
                        </div>

                        <div className='d-flex flex-column justify-content-around border-left border-right border-secondary p-5'>
                            <h3>Profile Settings</h3>

                            <form className='d-flex flex-column justify-content-around'>
                                <div class="row">
                                    <div class="col">
                                        <small>Update Name</small>
                                        <input type="text" class="form-control" placeholder={user.name} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <small>Update Address</small>
                                        <input type="text" class="form-control" placeholder={user.address} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <small>Previous Password</small>
                                        <input type="text" class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="col">
                                        <small>Update Password</small>
                                        <input type="text" class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="col">
                                        <small>Confirm Password</small>
                                        <input type="text" class="form-control" placeholder="Password" />
                                    </div>
                                </div>

                                <button type='submit' className='my-4 btn btn-success'>Save Profile</button>
                            </form>

                        </div>
                        <div className='d-flex p-3 flex-column justify-content-center'>
                            <h3 className='text-center'>Edit Experience</h3>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="resume" />
                                <label class="custom-file-label" for="resume">Add Resume</label>
                            </div>
                            <div class="mt-2">
                                <p className='text-center'>Description & Contact information.</p>
                                <div class="row">
                                    <div class="col">
                                        <textarea type="text" rows="6" class="form-control" placeholder="Description" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <small>Update Email</small>
                                        <input type="text" class="form-control" placeholder={user.email} />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <small>Add/Update Phone Number</small>
                                        <input type="text" class="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div >
            )}
        </div >
    )
}
