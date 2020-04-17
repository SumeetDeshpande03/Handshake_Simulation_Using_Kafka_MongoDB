import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import logo from '../../images/handshake-logo-square.png'
import homeScreenLogo from '../../images/handshake-share.png'
import {Link} from 'react-router-dom'

class CompanyLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      company_email_id: '', 
      company_password: ''
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:3000/company/login', {
      email: this.state.company_email_id,
      password: this.state.company_password,
      }, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
          sessionStorage.setItem("companyId", res.data._id)
          sessionStorage.setItem("companyName", res.data.name)
          this.setState({ redirect: <Redirect to='/company/job/view' /> }); 
        } else if(res.status===201){
            console.log(res);
            this.setState({ error: 'Invalid Credentials' });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.redirect}
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
        </div>
        <div style={{ float: 'left', width: '35%', marginTop: '20px', marginLeft:'5%', marginRight:'5%'}}>
          <img alt="" className="ui middle aligned rounded image" src={homeScreenLogo}/>
        </div>

        <div style={{ float: 'left', width: '40%', marginTop: '5px' }}>
          <h1 style={{ textDecoration:'underline'}}>Company Login:</h1>
          <br/>
          <form className='ui form' onSubmit={this.onSubmitHandler}>
            <div className='field'>
              <label>Company Email Id</label>
              <input
                type='text'
                name='company_email_id'
                value={this.state.company_email_id}
                placeholder='Company Email Id'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <br/>
            <div className='field'>
              <label>Company Password</label>
              <input
                type='password'
                name='company_password'
                value={this.state.company_password}
                placeholder='Company Password'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <br/>
            <div style={{marginBottom: '10px'}}>    
              {this.state.error && <div className='ui red message'>{this.state.error}</div>}
            </div>
            <button className='ui button' type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CompanyLogin;
