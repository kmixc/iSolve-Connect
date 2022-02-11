import React from 'react'
import User from '../img/UserIcon-white.png'

export default function Profile() {
    return (
        <div className='profile'>
            <div className='container bg-iSolve my-5 text-light'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div className='text-center'>
                        <img width="200px" src={User} alt="" />
                        <p className='m-0'>John Doe</p>
                        <small>johndoe@gmail.com</small>
                    </div>
                    <div className='d-flex flex-column justify-content-around border-left border-right border-secondary p-5'>
                        <h3>Profile Settings</h3>

                        <form className='d-flex flex-column justify-content-around'>
                            <div class="row">
                                <div class="col">
                                    <small>First Name</small>
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col">
                                    <small>Last Name</small>
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <small>Email</small>
                                    <input type="text" class="form-control" placeholder="Email" />
                                </div>
                                <div class="col">
                                    <small>Password</small>
                                    <input type="text" class="form-control" placeholder="Password" />
                                </div>
                            </div>
                            <div>
                                <small>Address</small>
                                <input type="text" class="form-control" placeholder="Address" />
                            </div>

                            <button type='submit' className='my-4 btn btn-success'>Save Profile</button>
                        </form>

                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <h3>Edit Experience</h3>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="resume" />
                            <label class="custom-file-label" for="resume">Add Resume</label>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
