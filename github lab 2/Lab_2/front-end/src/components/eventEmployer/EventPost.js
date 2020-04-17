import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import logo from '../../images/handshake-logo-square.png'
import {Redirect} from 'react-router';

class EventPost extends React.Component {
  constructor() {
    super();
    this.state = {
      eventName: '',
      eventDescription: '',
      fromdate: '',
      toDate: '',
      eventLocation: '',
      eligibility: '',
      companyName: ''
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:3000/events', {
        eventName: this.state.eventName,
        eventDescription: this.state.eventDescription,
        fromDate: this.state.fromDate,
        toDate: this.state.toDate,
        eventLocation: this.state.eventLocation,
        eligibility: this.state.eligibility,
        companyName:this.state.companyName
      }, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
          this.setState({ redirect: <Redirect to='/company/post' /> });
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
          <div className="ui inverted blue stackable menu">
                <div className="item" style={{marginLeft: '2%'}}>
                    <Link className="item" to="/" >
                        <img src={logo}/>
                    </Link>
                </div>
          </div>
          <div style={{ float: 'left', width: '40%', marginLeft:'32%', marginTop: '20px' }}>
            <form className='ui form' onSubmit={this.onSubmitHandler}>
              <div className='field'>
                <label>Event Name</label>
                <input
                  type='text'
                  name='eventName'
                  value={this.state.eventName}
                  placeholder='Event Name'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Event Company</label>
                <input
                  type='text'
                  name='companyName'
                  value={this.state.companyName}
                  placeholder='Event Company'
                  onChange={this.onChangeHandler}
                  
                />
              </div>
              <div className='field'>
                <label>Description</label>
                <input
                  type='text'
                  name='eventDescription'
                  value={this.state.eventDescription}
                  placeholder='Description'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>From Date</label>
                <input
                  type='date'
                  name='fromDate'
                  value={this.state.fromDate}
                  placeholder='From Date'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>To Date</label>
                <input
                  type='date'
                  name='toDate'
                  value={this.state.toDate}
                  placeholder='To Date'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Event Location</label>
                <input
                  type='text'
                  name='eventLocation'
                  value={this.state.eventLocation}
                  placeholder='Event Loaction'
                  onChange={this.onChangeHandler}
                  required
                />
              </div>
              <div className='field'>
                <label>Eligibility Criteria</label>
                <input
                  type='text'
                  name='eligibility'
                  value={this.state.eligibility}
                  placeholder='Eligibility'
                  onChange={this.onChangeHandler}
                  
                />
              </div>
             
              <div style={{ marginBottom: '10px' }}>
                {this.state.error && (
                  <div className='ui red message'>{this.state.error}</div>
                )}
              </div>
              <button className='btn btn-primary' type='submit'>
                Create Event
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EventPost;
