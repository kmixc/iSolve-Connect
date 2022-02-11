import React from 'react'
import HomeHeader from '../components/HomeHeader'

export default function Home() {
    return (
        <div className='home-page'>
            <HomeHeader></HomeHeader>

            <div className='info-bar'>
                <div className='info-box ml-5'>
                    <p className='info-text text-center'>About iSolve Connect</p>
                    <a className='info-link' href='/about'>About</a>
                </div>
                <div className='info-box img-2 mr-5'>
                    <p className='info-text text-center'>Examples that iSolve Connect has brought to Companys</p>
                    <a className='info-link' href="/examples">Examples</a>
                </div>
            </div>
        </div>
    )
}
