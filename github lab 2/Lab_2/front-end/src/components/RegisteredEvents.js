import React from 'react';
import axios from 'axios';
import Header from './Header';
import EventItem from './EventItem';
import EventsMenu from './EventMenu';
import StudentSideList from './StudentSideList'

class RegisteredEvents extends React.Component {
  constructor() {
    super();
    this.state = {registeredEvents: []};
  }
  componentDidMount() {
    const id = sessionStorage.getItem("studentId");
      axios.get(`http://localhost:3000/student/studentProfile/${id}`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ registeredEvents: res.data.registeredEvents }, () => {
            console.log(this.state.registeredEvents);
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <EventsMenu />
        </div>
        <div>
        <div style={{ float: 'left', width:'25%', marginLeft: '6%' , marginTop: '2%'}}>
            <StudentSideList /> 
          </div>
        <div style={{ float: 'left', width:'65%', marginTop: '2%'}}>
        {this.state.registeredEvents.map(event => {
            return (
              <div
                className='ui segment'
                style={{ marginLeft: '20px', width: '70%' }}
              >
                <EventItem key={event._id} event={event} />
              </div>
            );
          })}
        </div>
      </div>
      </div>
    );
  }
}

export default RegisteredEvents;