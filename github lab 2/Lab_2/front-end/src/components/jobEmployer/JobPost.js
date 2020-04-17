import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import logo from '../../images/handshake-logo-square.png'
import { Redirect } from 'react-router';
import Navbar from '../companyNavbar';

class JobPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '',
       title: '',
       postingDate: '',
       deadline: '',
      location: '',
       salary: '',
      jobDescription: '',
      jobRequirements: '',
      category: '',
      companyName:''
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    // const id = 1;
    axios.post(`http://localhost:3000/jobs/`,
        {
          title: this.state.title,
          companyName: this.state.companyName,
          postingDate: this.state.postingDate,
          deadline: this.state.deadline,
          location: this.state.location,
          salary: this.state.salary,
          jobDescription: this.state.jobDescription,
          jobRequirements: this.state.jobRequirements,
          category: this.state.category
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(res => {
        if (res.status === 200) {
          this.setState({ redirect: <Redirect to='/company/job/view' /> });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.redirect}
          <div>
            <Navbar/>
          </div>
          {/* <div className="ui inverted blue stackable menu">
                <div className="item" style={{marginLeft: '2%'}}>
                    <Link className="item" to="/" >
                        <img src={logo}/>
                    </Link>
                </div>
          </div> */}
          <div style={{ float: 'left', width: '40%', marginLeft:'32%', marginTop: '20px' }}>
            <form className='ui form' onSubmit={this.onSubmitHandler}>
              <div className='field'>
                <label>Job Title</label>
                <input
                  type='text'
                  name='title'
                  value={this.state.title}
                  placeholder='Job Title'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Company Name</label>
                <input
                  type='text'
                  name='companyName'
                  value={this.state.companyName}
                  placeholder='Company Name'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Job Posting Date</label>
                <input
                  type='text'
                  name='postingDate'
                  value={this.state.postingDate}
                  placeholder='Job Posting Date'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Application Deadline</label>
                <input
                  type='text'
                  name='deadline'
                  value={this.state.deadline}
                  placeholder='Application Deadline'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Location</label>
                <input
                  type='text'
                  name='location'
                  value={this.state.location}
                  placeholder='Location'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Job Salary</label>
                <input
                  type='text'
                  name='salary'
                  value={this.state.salary}
                  placeholder='Job Salary'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Description</label>
                <input
                  type='text'
                  name='jobDescription'
                  value={this.state.jobDescription}
                  placeholder='Description'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Requirements</label>
                <input
                  type='text'
                  name='jobRequirements'
                  value={this.state.jobRequirements}
                  placeholder='Requirements'
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className='field'>
                <label>Job Category</label>
                <input
                  type='text'
                  name='category'
                  value={this.state.category}
                  placeholder='Job Category'
                  onChange={this.onChangeHandler}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                {this.state.error && (
                  <div className='ui red message'>{this.state.error}</div>
                )}
              </div>
              <button className='btn' type='submit'>
                Create Job Post
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default JobPost;
