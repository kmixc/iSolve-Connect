import React from 'react'

export default function SignUp() {
    return (
        <div>
            <div className='container p-5 mt-5 bg-secondary rounded'>
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="username" class="form-control" id="username" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" class="form-control" id="confirmPassword" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Date of Birth</label>
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

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Occupation</label>
                        <div className='d-flex'>
                            <select class="form-control mx-1" id="month">
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
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                        <a className='p-2 badge badge-pill badge-dark' href="/login">Already have an account Login here.</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
