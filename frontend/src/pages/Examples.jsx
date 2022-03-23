import React from 'react'
import HomeHeader from '../components/HomeHeader'
import exampleTemplate from '../img/example-template.png'

export default function Examples() {
    return (
        <div>
            <HomeHeader />
            <div className='container'>
                <div className='card-deck mb-5'>
                    <div class="card">
                        <a href="#"><img src={exampleTemplate} class="card-img-top" alt="template" /></a>
                    </div>
                    <div class="card">
                        <a href="#"><img src={exampleTemplate} class="card-img-top" alt="template" /></a>
                    </div>
                    <div class="card">
                        <a href="#"><img src={exampleTemplate} class="card-img-top" alt="template" /></a>
                    </div>
                </div>

                <div className='card-deck'>
                    <div class="card">
                        <a href="#"><img src={exampleTemplate} class="card-img-top" alt="template" /></a>
                    </div>
                    <div class="card">
                        <a href="#"><img src={exampleTemplate} class="card-img-top" alt="template" /></a>
                    </div>
                    <div class="card">
                        <a href="#"><img src={exampleTemplate} class="card-img-top" alt="template" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
