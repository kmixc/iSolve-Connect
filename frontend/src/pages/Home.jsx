import React from 'react'

export default function Home() {
    return (
        <div className='home-page'>

            <div class="p-5 jumbotron-fluid">
                <div class="container text-center">
                    <h1 class="display-4">Welcome to iSolve Connect</h1>
                    <p class="lead">Please create an account with us and start working today!</p>
                </div>
            </div>

            <div className='info-bar'>
                <div className='info-box mx-3 text-light ml-5'>
                    <h3 className='info-text text-center'>About iSolve-Connect</h3>
                    <p>See what we are doing.</p>
                    <a className='info-link' href='/about'>About</a>
                </div>
                <div className='info-box mx-3 text-light img-2 mr-5'>
                    <h3 className='info-text px-5 text-center'>Websites iSolve Connect has brought to Companys</h3>
                    <p>See what we have created.</p>
                    <a className='info-link' href="/examples">Examples</a>
                </div>
            </div>

            <div class="card-group mx-5 py-5">
                <div class="card bg-iSolve text-light m-3 p-3">
                    <div class="card-body">
                        <h5 class="card-title">1. Company</h5>
                        <p class="card-text">Sign up as a Company and create a listing for the job you need created. Our employees will then apply and the company can accept or deny on their behalf. </p>
                    </div>
                </div>
                <div class="card bg-iSolve text-light m-3 p-3">
                    <div class="card-body">
                        <h5 class="card-title">2. Employee</h5>
                        <p class="card-text">Sign up as a Employee to start accepting jobs and making money with iSolve today! When looking for a job you will submit your resume and then you will be able to personally message the company to see their needs.</p>
                    </div>
                </div>
                <div class="card bg-iSolve text-light m-3 p-3">
                    <div class="card-body">
                        <h5 class="card-title">3. Together</h5>
                        <p class="card-text">Together combining the companys and employees on our website we will strive to bring the best product.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
