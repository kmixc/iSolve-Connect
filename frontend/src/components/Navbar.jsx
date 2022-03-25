import React from 'react'
import Logo from '../img/logo.svg'

//IMPORTS PAGES
import Home from '../pages/Home'
import EmployeeListings from '../pages/EmployeeListings'
import CompanyListings from '../pages/CompanyListings'
import Profile from "../pages/Profile";
import About from '../pages/About'
import Examples from '../pages/Examples'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom";


export default function Navbar() {
    return (
        <Router>
            <nav className='navbar'>
                <div className='nav-left'>
                    <NavLink className="link" activeClassName="active-link" to='/home'>Home</NavLink>
                    <img className='nav-logo' src={Logo} alt="logo"></img>
                </div>
                <div className='nav-right'>
                    <NavLink className="link" activeClassName="active-link" to='/employeelist'>Employee Listings</NavLink>
                    <NavLink className="link" activeClassName="active-link" to='/companylist'>Company Listings</NavLink>
                    <NavLink className="link" activeClassName="active-link" to='/profile'>Profile</NavLink>
                    <NavLink className="link signup" activeClassName="active-link" to='/signup'>Sign-Up</NavLink>
                    <NavLink className="link login" activeClassName="active-link" to='/login'>Login</NavLink>
                </div>
            </nav>

            <Switch>
                <Redirect exact from="/" to="home" />
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/examples">
                    <Examples />
                </Route>
                <Route path="/employeelist">
                    <EmployeeListings />
                </Route>
                <Route path="/companylist">
                    <CompanyListings />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}
