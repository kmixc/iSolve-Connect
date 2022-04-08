import React, { useState, useEffect } from 'react'
import HomeHeader from '../components/HomeHeader'
import EmployeeTemplate from '../img/employee-template.png'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

export default function EmployeeListings() {

    const [count, setCount] = React.useState(0);

    const [users, setUsers] = useState([{
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
        fetch("/users").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUsers(jsonRes));

        setCount(1);
    }, [])

    return (
        <div>
            <HomeHeader></HomeHeader>
            <div>
                <nav class="navbar navbar-expand-lg ">
                    <div class="collapse navbar-collapse justify-content-end">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            <div class="form-group">
                                <div className='px-2'>
                                    <select class="form-control mx-1" id="month">
                                        <option>Filter</option>
                                        <option>Advanced</option>
                                        <option>Intermediate</option>
                                        <option>Beginner</option>
                                        <option>Front-end</option>
                                        <option>Back-end</option>
                                        <option>Database</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>




                <div>
                    <div class="card-columns p-5">
                        <div className='row row-cols-1 row-cols-md-2 g-4'>
                            {users.map(user =>
                                <div>
                                    <div className='col'>
                                        <div class="card bg-iSolve text-light">
                                            <h5 class="card-header text-center">PROGRAMMER EXPERIENCE</h5>
                                            <img src={EmployeeTemplate} class="card-img card-image" alt="..." />
                                            <div class="card-body d-flex flex-column justify-content-around align-items-center">
                                                <h5>{user.name}</h5>
                                                <h5>{user.occupation}</h5>
                                                <button className='btn-lg btn-light' data-toggle="modal" data-target="#exampleModal">Details</button>
                                            </div>
                                        </div>
                                    </div>





                                    <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg" role="document">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Employee Details</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>

                                                <div>
                                                    <div class="modal-body">
                                                        <h3 className='text-center'>{user.name}</h3>
                                                        <div className='d-flex justify-content-around align-items-center'>
                                                            <img src={EmployeeTemplate} class="modal-img rounded-circle" alt="..." />
                                                            <div className='p-5'>
                                                                <div className='description'>
                                                                    <h3>Description</h3>
                                                                    <ul className='ml-5'>
                                                                        <li className='m-0'>4+ Years React JS</li>
                                                                        <li className='m-0'>4+ Years of CSS</li>
                                                                        <li className='m-0'>5+ Years of Django</li>
                                                                        <li className='m-0'>6+ Years of Javascript</li>
                                                                    </ul>
                                                                </div>
                                                                <div className='contact'>
                                                                    <h3>Contact</h3>
                                                                    <div className='d-flex justify-content-between ml-3'>
                                                                        <p className='m-0'>(Phone Number) -</p>
                                                                        <p className='m-0'>- {user.email}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='categories mx-5 pt-2'>
                                                            <h5 className='text-center'><u>Categories</u></h5>
                                                            <div className='d-flex justify-content-center'>
                                                                <p className='cat-block rounded'>Employee</p>
                                                                <p className='cat-block rounded'>Advanced</p>
                                                                <p className='cat-block rounded'>Back-End</p>
                                                                <p className='cat-block rounded'>Front-End</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <a href={"mailto:" + user.email} class="btn btn-primary">Contact Employee</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}
