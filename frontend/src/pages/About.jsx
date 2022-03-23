import React from 'react'
import HomeHeader from '../components/HomeHeader'
import userIcon from '../img/UserIcon-white.png'
import Logo from '../img/logo.svg'

export default function About() {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <div className='bg-iSolve p-4 mx-5 text-light rounded'>
                <p className='text-center'><b>Founders of iSolve</b></p>
                <div className='d-flex'>
                    <div className='person p-2'>
                        <img className='person-icon' src={userIcon} alt="Founder-Icon" />
                        <p><b>Front-End Developer</b></p>
                        <p>John-Michael De Guzman</p>
                    </div>
                    <div className='person p-2'>
                        <img className='person-icon' src={userIcon} alt="Founder-Icon" />
                        <p><b>Back-End Developer</b></p>
                        <p>Mohamed Ahlip</p>
                    </div>
                    <div className='person p-2'>
                        <img className='person-icon' src={userIcon} alt="Founder-Icon" />
                        <p><b>Project Manager</b></p>
                        <p>Oliver Kmiec</p>
                    </div>
                    <div className='person p-2'>
                        <img className='person-icon' src={userIcon} alt="Founder-Icon" />
                        <p><b>Software Architect</b></p>
                        <p>Wissam Hamed</p>
                    </div>
                    <div className='person p-2'>
                        <img className='person-icon' src={userIcon} alt="Founder-Icon" />
                        <p><b>Market Analyst</b></p>
                        <p>Gabriel Silva</p>
                    </div>
                    <div className='person p-2'>
                        <img className='person-icon' src={userIcon} alt="Founder-Icon" />
                        <p><b>Fullstack Developer</b></p>
                        <p>Ruzzel Orejola</p>
                    </div>
                </div>
                <p className='text-center mt-5'><b>We Solve your problems!</b></p>
            </div>
            <div className='about-bar text-light'>
                <div className='about-box rounded mx-1 p-4 bg-iSolve'>
                    <h4 className='text-center'>Our Mission:</h4>
                    <p>
                        iSolve Connect is all about connecting
                        people together and providing a platform
                        for our customers to venture out with
                        existing companies to acquire positions of
                        employment
                    </p>
                    <img src={Logo} alt="company-logo" className='bottom-about-logo' />
                </div>
                <div className='about-box rounded mx-1 p-4 bg-iSolve'>
                    <h4 className='text-center'>The Future:</h4>
                    <p>
                        In the future at iSolve Connect we are
                        prospering to create a big community for
                        people to come and find jobs quickly and
                        efficiently. We will always be updating our
                        website and our listing and keeping a
                        keen eye on anything going on.
                    </p>
                    <img src={Logo} alt="company-logo" className='bottom-about-logo' />
                </div>
            </div>
        </div>
    )
}
