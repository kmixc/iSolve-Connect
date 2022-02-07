import React from 'react'
import Logo from '../logo.svg'
import HomeHeader from '../components/HomeHeader'

export default function Home() {
    return (
        <div className='home-page'>
            <HomeHeader></HomeHeader>

            <h4>Welcome to iSolve Conect</h4>

            <div className='info-bar'>
                <div className='info-box'>
                    <p className='info-text'>About</p>
                    <a className='info-link' href='/about'>About iSolve</a>
                </div>
                <div className='info-box'>
                    <p className='info-text'>Examples</p>
                    <a className='info-link' href="/examples">Examples</a>
                </div>
            </div>
        </div>
    )
}
