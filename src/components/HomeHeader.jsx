import React from 'react'
import Logo from '../img/logo.svg'

export default function HomeHeader() {
    return (
        <div className='home-header'>
            <img className='nav-logo' src={Logo} alt="logo" />
            <p>We Connect to Solve your problems.</p>
        </div>
    )
}
