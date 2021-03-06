import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import logo from '../../images/handshake-logo-square.png'
import homeScreenLogo from '../../images/handshake-share.png'
import {Link} from 'react-router-dom'

class StudentSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      student_name: '', 
      student_email_id: '', 
      student_password: '',  
      major: '', 
      redirect: '', 
      error: undefined
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:3000/student/signUp', {
      name: this.state.student_name,
      email: this.state.student_email_id,
      password: this.state.student_password,
      major: this.state.major
      }, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
          console.log(res)
          sessionStorage.setItem("studentId", res.data._id)
          this.setState({ redirect: <Redirect to='/student/studentLogin' /> });          
        } else if(res.status===201){
          console.log(res);
          this.setState({ error: 'User with this email id already exists' });
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
          <h1 style={{ textDecoration:'underline'}}>Student Sign-Up:</h1>
          <br/>
          <form className='ui form' onSubmit={this.onSubmitHandler}>
            <div className='field'>
              <label>Student Name</label>
              <input
                type='text'
                name='student_name'
                value={this.state.student_name}
                placeholder='Student Name'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <br/>
            <div className='field'>
              <label>Student Email Id</label>
              <input
                type='text'
                name='student_email_id'
                value={this.state.student_email_id}
                placeholder='Student Email Id'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <br/>
            <div className='field'>
              <label>Student Password</label>
              <input
                type='password'
                name='student_password'
                value={this.state.student_password}
                placeholder='Student Password'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <br/>
            <div className='field'>
              <label>Major</label>
              <input
                type='text'
                name='major'
                value={this.state.major}
                placeholder='Major'
                onChange={this.onChangeHandler}
                required
              />
            </div>
            <br/>
            <div style={{marginBottom: '10px'}}>    
              {this.state.error && <div className='ui red message'>{this.state.error}</div>}
            </div>
            <br/>
            <button className='ui button' type='submit'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default StudentSignUp;
