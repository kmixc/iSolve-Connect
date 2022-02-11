import React from 'react'
import HomeHeader from '../components/HomeHeader'


export default function About() {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <div className='bg-dark p-4 mx-5 text-light'>
                <p className='text-center'><b>Founders of iSolve</b></p>
                <div className='d-flex'>
                    <div className='person'>
                        <img src={userIcon} alt="" />
                        <h3>Front-End</h3>
                        <p>Name</p>
                    </div>
                </div>
            </div>
            <div>
                Our Mission:
            </div>
            <div>
                The Future:
            </div>
        </div>
    )
}
