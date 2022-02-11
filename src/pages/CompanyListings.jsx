import React from 'react'
import HomeHeader from '../components/HomeHeader'
import CompanyTemplate from '../img/company-template.png'

export default function CompanyListings() {
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
                                        <option>Company</option>
                                        <option>Front-End</option>
                                        <option>Back-End</option>
                                        <option>Database</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
                <div>
                    <div class="card-columns  p-5">
                        <div class="card bg-iSolve text-light">
                            <img src={CompanyTemplate} class="card-img-top" alt="..." />
                            <div class="card-body d-flex justify-content-around align-items-center">
                                <h5 class="card-title">Company Name</h5>
                                <a className='btn btn-primary' href="#">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
