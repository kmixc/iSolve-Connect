import React from 'react'
import Logo from '../img/logo.svg'

export default function Login() {
    return (
        <div className='d-flex center align-items-center text-light my-5'>
            <div className='logo-form'>
                <img className='logo' src={Logo} alt="iSolve Logo" />
                <p className='text-center'>We connect to Solve your problems.</p>
            </div>
            <div className='container login-form my-5 bg-iSolve p-5 rounded'>
                <form className='form-login'>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" />
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
