import React from 'react'
import HomeHeader from '../components/HomeHeader'
import EmployeeTemplate from '../img/employee-template.png'

export default function EmployeeListings() {
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

                        <div class="card bg-iSolve text-light">
                            <h5 class="card-header text-center">PROGRAMMER EXPERIENCE</h5>
                            <img src={EmployeeTemplate} class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column justify-content-around align-items-center">
                                <h5>NAME</h5>
                                <h5>JOB EXPERIENCE</h5>
                                <a className='btn-lg btn-light' href="#">Contact</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
