import React,{useState, useEffect} from 'react'
import HomeHeader from '../components/HomeHeader'
import CompanyTemplate from '../img/company-template.png'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

export default function CompanyListings() {

    const [count, setCount] = React.useState(0);

    const [company, setCompany] = useState([{
        name:'',
        occupation:''
    }])

    const history = useHistory()


    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log(token)
        if(token){
            const user = jwt.decode(token)
            console.log(user)
            if(!user){
                localStorage.removeItem('token')
                history.replace('/login')
                console.log('user not logged')
            }
            else {
                console.log('user found')
            }
        }else{
            history.replace('/login')
            console.log('user not logged')
        }
        fetch("/company").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCompany(jsonRes));
        setCount(1);
    }, [])

    return (
        <div>
            <HomeHeader></HomeHeader>
            <div>
                <nav class="navbar navbar-expand-lg ">
                    <div class="collapse navbar-collapse justify-content-end">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            <div class="form-group">
                                <div className='px-2'>
                                    <select class="form-control mx-1" id="month">
                                        <option>Filter</option>
                                        <option>Company</option>
                                        <option>Front-End</option>
                                        <option>Back-End</option>
                                        <option>Database</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>



                <div>
                    <div class="card-columns p-5">
                        <div className='row row-cols-1 row-cols-md-1 g-4'>
                            {company.map( company => 
                            <div className='col'>
                                <div class="card bg-iSolve text-light">
                                    <img src={CompanyTemplate} class="card-img-top" alt="..." />
                                    <div class="card-body d-flex justify-content-around align-items-center">
                                        <h5 class="card-title">{company.name}</h5>
                                        <h5 class="card-title">{company.occupation}</h5>
                                        <button className='btn-lg btn-light' data-toggle="modal" data-target="#exampleModal">Details</button>
                                    </div>
                                </div>
                            </div>
                             )}
                            
                        <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Employee Details</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <div class="modal-body">
                                        <h2 className='position-absolute'>Company Name</h2>
                                        <div className='d-flex justify-content-around align-items-center'>
                                            <img src={CompanyTemplate} class="modal-img" alt="..." />
                                            <div className='px-5'>
                                                <div className='description'>
                                                    <h3>Description</h3>
                                                    <p className='ml-3 px-3'>ALLAVA is all about bringing people together and creating a
                                                        comunity for people to connect. We specilize in comunicating
                                                        with eachother</p>
                                                </div>
                                                <div className='contact'>
                                                    <h3>Requirements</h3>
                                                    <div className='d-flex justify-content-between ml-3'>
                                                        <ul className='ml-4'>
                                                            <li className='m-0'>4+ Years React JS</li>
                                                            <li className='m-0'>4+ Years of CSS</li>
                                                            <li className='m-0'>5+ Years of Django</li>
                                                            <li className='m-0'>6+ Years of Javascript</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='categories mx-5 pt-3'>
                                            <h5 className='text-center'><u>Categories</u></h5>
                                            <div className='d-flex justify-content-center'>
                                                <p className='cat-block rounded'>Company</p>
                                                <p className='cat-block rounded'>Website</p>
                                                <p className='cat-block rounded'>Advanced</p>
                                                <p className='cat-block rounded'>Back-End</p>
                                                <p className='cat-block rounded'>Front-End</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
