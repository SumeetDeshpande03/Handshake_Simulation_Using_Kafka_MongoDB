import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/handshake-logo-square.png'

const Menu = () => {
    return (
        <div className="ui blue inverted menu" style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <div className="item" style={{marginLeft: '2%'}}>
                <Link className="item" to="/jobs" >
                    <img alt="" src={logo}/>
                </Link>
            </div>
            {/* <div className="ui pointing secondary menu" style={{paddingTop: '10px', paddingBottom: '10px'}}> */}
            <div className="item">
                <div className="ui icon input" style={{marginLeft: '70px', width: '350px'}} > 
                    <input type="text" placeholder="Search" />
                    <i aria-hidden="true" className="search icon"></i>
                </div>
            </div>
            <div className="right menu">
                <Link className="item" to="/jobs">Jobs</Link>
                <Link className="item" to="/event">Events</Link>
                <Link className="item" to="/students">Students</Link>
                <Link className="item" to='/myProfile'>Profile</Link>
                <Link className="item" to='/'> Logout</Link>
            </div>
        </div>
    );
}

export default Menu;