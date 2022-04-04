import React from 'react'
import './navComp.css';
import { Link, useLocation } from 'react-router-dom';
import Trooper from './RateTrooperLogo.png'

const NavComp = () => {

    const location = useLocation()

  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'><img className='trooper-logo' src={Trooper} alt="trooper" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <a href='#how-it-works-container' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>How It Works</a>
                            </li>
                            <li className="nav-item">
                                <a href='#about-us' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default NavComp