import React,{useState, useEffect}  from 'react'
import User from '../img/UserIcon-white.png'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

export default function Profile() {

    const [count, setCount] = React.useState(0);


    const [user, setUser] = useState([{
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
            alert('User not logged in')
            console.log('user not logged')
        }
        fetch("/profile", {
            headers:{
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token')
        },}).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setUser(jsonRes));
        setCount(1);
    }, [])
    return (
        <div className='profile'>
            {user.map( user =>
            <div className='container bg-iSolve my-5 text-light'>
                <div className='container d-flex justify-content-between align-items-center'>
                
                    <div className='text-center'>
                    
                        <img width="200px" src={User} alt="" />
                        <p className='m-0'>{user.name}</p>
                        <small>{user.name}</small>
                    </div>
                    
                    <div className='d-flex flex-column justify-content-around border-left border-right border-secondary p-5'>
                        <h3>Profile Settings</h3>

                        <form className='d-flex flex-column justify-content-around'>
                            <div class="row">
                                <div class="col">
                                    <small>{user.name}</small>
                                </div>
                                <div class="col">
                                    <small>Last Name</small>
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <small>{user.email}</small>
                                    <input type="text" class="form-control" placeholder="Email" />
                                </div>
                                <div class="col">
                                    <small>{user.password}</small>
                                    <input type="text" class="form-control" placeholder="Password" />
                                </div>
                            </div>
                            <div>
                                <small>{user.password}</small>
                                <input type="text" class="form-control" placeholder="Address" />
                            </div>

                            <button type='submit' className='my-4 btn btn-success'>Save Profile</button>
                        </form>

                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <h3>Edit Experience</h3>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="resume" />
                            <label class="custom-file-label" for="resume">Add Resume</label>
                        </div>
                        
                    </div>
                   
                    
                </div>
            </div >
             )}
        </div >
    )
}
