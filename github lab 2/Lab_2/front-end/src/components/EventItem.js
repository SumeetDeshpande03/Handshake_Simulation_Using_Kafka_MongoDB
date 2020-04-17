import React from 'react';
import {Link} from 'react-router-dom';
import alt from '../images/alt.png';

class EventItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
  return (
    <div className='item container'>
    <div className='ui tiny image' style={{marginRight: '10px', float: 'left' }}>
      <img alt="" src={alt} />
    </div>
    <div className='content' >
        <Link to={{pathname: '/student/event', state: this.props.event}}>
          <button class='ui right floated basic primary button' >View Event</button>
        </Link>
      <a className='header'><h4>{this.props.event.eventName}</h4></a>
      <div className='meta'>
        <span className='cinema'>
          {this.props.event.fromDate} - {this.props.event.toDate}
          </span>
      </div>
      <div className='description'>
        <div>
          Location: {this.props.event.eventLocation}
        </div>
      </div>
      <div className='extra'>
        
      </div>
    </div>
  </div>
  );
};}

export default EventItem;

// {/* <div class='item'>
//         <div class='ui tiny image' >
//           <img src={alt} />
//         </div>
//         <Link to={{pathname: '/student/event', state: {event : props.event}}}>
//         <button class='ui right floated basic primary button' >View Event</button>
//         </Link>
//         <div class='middle aligned content'>
//           <div class='header'>Content B</div>
//           <div class='description'>
//             <p></p>
//           </div>
//           <div class='extra'></div>
//         </div>
//       </div> */}