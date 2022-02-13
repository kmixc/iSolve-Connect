import React from 'react'
import Logo from '../img/logo.svg'

export default function Footer() {
    return (
        <nav class="navbar justify-content-center mt-5">
            <img className='text-center' src={Logo} width="100" alt="" />
        </nav>
    )
}
