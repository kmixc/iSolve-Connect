import React from 'react'
import Logo from '../logo.svg'

export default function Login() {
    return (
        <div className='d-flex center align-items-center mt-5'>
            <div className='logo-form'>
                <img className='logo' src={Logo} alt="iSolve Logo" />
                <p className='text-center'>We connect to Solve your problems.</p>
            </div>
            <div className='container login-form p-5 bg-secondary rounded'>
                <form className='form-login'>
                    <div class="form-group">
                        <label for="email username">Email address / Username</label>
                        <input type="email username" class="form-control" id="email username" />
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" />
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}
