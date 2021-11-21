import React from 'react'
import {useNavigate} from 'react-router-dom';
import { navbarRoutes } from '../utils/constants';

// navbar component
const Navbar = () => {
    const history = useNavigate()

    //routing to different routes
    const onLinkClick=(routeName) =>{
        history(navbarRoutes[routeName])
    }
    return (
        <div className="navbar-container center-container">
            <h3 style={{fontSize:"2rem"}}>Hiring <span style={{color:"grey"}}>portal</span></h3>
            <div>
                <ul className="navbar-links center-container ">
                    <li className="scale-container" onClick={()=>onLinkClick("home")}>Home</li>
                    <li className="scale-container" onClick={()=>onLinkClick("shortlisted")}>Shortlisted</li>
                    <li className="scale-container" onClick={()=>onLinkClick("rejected")}>Rejected</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
