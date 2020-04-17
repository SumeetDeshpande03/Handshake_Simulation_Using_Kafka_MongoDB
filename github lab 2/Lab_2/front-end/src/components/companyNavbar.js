import React from "react";
import { Link, withRouter } from "react-router-dom";
// import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/css/bootstrap.min.css";



const companyNavbar = () => {
    function logOut(e){
        //e.preventDefault();
        localStorage.removeItem("password");
        localStorage.removeItem("username");
        //this.props.history.push(`/`);   
      };
  return (
       
    <div
      className="ui inverted menu"
      
      style={{ paddingTop: "10px", paddingBottom: "10px" , marginTop:'0px',background:'#008B8B'}}
    >
      {/* <div className="ui pointing secondary menu" style={{paddingTop: '10px', paddingBottom: '10px'}}> */}
      <div className="item">
      <Link to="/company/job/view" className="item">
          Handshake
        </Link>
      </div>
      <div className="item">
        <div
          className="ui icon input"
          style={{ marginLeft: "10px", width: "350px" }}
        >
          <input type="text" placeholder="Search" />
          <i aria-hidden="true" className="search icon"></i>
        </div>
      </div>
      <div className="right menu">
        <Link to="/company/job/post" className="item">
          Add Job
        </Link>
        <Link to="/company/event" className="item">
         Add Events
        </Link>
        <Link  to="/company/job/view" className="item">
          View Job
        </Link>
        <Link to="/company/myevent" className="item">
          My Events
        </Link>
        {/* <Link to="/company/viewstudentapplication" className="item">
          Applied Students
        </Link> */}

        <a className="item">
          <div class="btn-group dropleft">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* <img class="ui avatar image"></img> */}
            </button>

            <div class="dropdown-menu">
              <a class="dropdown-item" href="/company/companyProfile">
                Profile
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/">
                Logout
              </a>
            </div>
          </div>
        </a>
      </div>
      {/* </div> */}
    </div>
  );
};

export default companyNavbar;
