import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import Header from './Header';
import alt from '../images/alt.png';

class EventPageStudent extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      redirect: '', 
    };
  }

  onClickHandler = () => {
        const student_id = sessionStorage.getItem("studentId");
        axios.get(`http://localhost:3000/student/studentProfile/${student_id}`).then(res => {
          if (res.status === 200) {
            console.log(res.data);
            const data = {
              event_id: this.props.location.state._id,
              student: {
                name: res.data.name,
                studentId: res.data._id,
                major: res.data.major,
                collegeName: "SJSU"
              }
            }
            axios
          .post(`http://localhost:3000/events/registered/${student_id}`, data, {headers: {'Content-Type': 'application/json'}})
          .then(res => {
            if (res.status === 200) {
                console.log(res.data.result);
                this.setState({ redirect: <Redirect to='/registeredEvents' /> });
            }
          })
          .catch(err => {
            console.log(err);
          });
          } else if (res.status === 201){
            console.log(res);
            this.setState({ error: 'Student Not found' });
            console.log(this.state.error)
          }
        });
    }
    
    render() {
      return (
        <div>
          {this.state.redirect}
            <div>
                <Header />
            </div>
            <div className='ui container segment' style={{height:'300px'}} >
            <div style={{float:'left', width:'20%'}}>
            <div className='ui small image' style={{ float: 'left', marginRight: '3%' }}>
              <img src={alt}/>
              
            </div>
            </div>
            <div style={{float:'left', width:'40%'}}>
              <h3>Event Name: {this.props.location.state.eventName}</h3>
              <p>Event Description: {this.props.location.state.eventDescription}</p>
              <p>Event From Date: {this.props.location.state.fromDate}</p>
              <p>Event To Date: {this.props.location.state.toDate}</p>
              <p>Event Location: {this.props.location.state.eventLocation}</p>
              <p>Event Eligibility Criteria: {this.props.location.state.eligibility}</p>
              <p>Event Company Name: {this.props.location.state.companyName}</p>
            {/* <EventItem key={event.event_id} event={event} /> */}
            </div>
            <button className='ui basic primary button' style={{float: 'right'}} onClick={this.onClickHandler}>Register</button>
            </div>
            <div>

            </div>
        </div>
      );
    }
    
}

export default EventPageStudent;