import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/handshake-logo-square.png'
import homeScreenLogo from '../images/handshake-share.png'

const Home = () => {
    return (
        <div>

            <div className="ui inverted blue stackable menu">
                <div className="item" style={{marginLeft: '2%'}}>
                    <Link className="item" to="/" >
                        <img alt="" src={logo}/>
                    </Link>
                </div>
                <div className="item">
                    <Link className="item" to="/" >
                        <h1>Handshake</h1>
                    </Link>
                </div>
                <div className="right menu">
                        <Link className="item" to="/student/studentSignUp" >Student Sign-Up</Link>
                        <Link className="item" to="/student/studentLogin">Student Login</Link>
                        <Link className="item" to="/company/companySignUp">Company Sign-Up</Link>
                        <Link className="item" to="/company/companyLogin">Company Login</Link>
                </div>
            </div>

            <div style={{float: 'left', width: '35%', marginLeft: '5%', marginTop: '5%'}}>
                <img alt="" className="ui middle aligned rounded image" src={homeScreenLogo}/>
            </div>
            
            <div style={{float: 'left', width: '50%', marginLeft: '5%', marginTop: '10%'}}>
                <div>
                    <h1>Join the Handshake Community!</h1>
                    <h2>Discover jobs and internships based on your interests.</h2>
                    <h3>Check the Navigation Bar Above for Login and Sign-Up Options</h3>
                </div>
            </div>
        </div>
    )
}

export default Home;