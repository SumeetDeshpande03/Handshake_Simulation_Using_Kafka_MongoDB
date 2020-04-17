import React from 'react';
import {Redirect} from 'react-router';
import alt from '../../images/alt.png';
import {Button} from 'semantic-ui-react';
import "../../CSS/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css'

class EventItemEmployer extends React.Component {
    constructor() {
        super();
        this.state ={redirect:''};
    }
  onClickHandler = () => {
  this.setState({redirect: <Redirect to={{pathname: '/company/myevent', state: {post: this.props.event }}} />})
  };

  render() {
    return (
      <div>
      {this.state.redirect}
      <div className='item container'>
      <div
        className='ui tiny image'
        style={{ float: 'left', marginRight: '10px', padding: '5px' }}
      >
        <img src={alt}/>
      </div>
      <div className='content'> 
        <Button color='blue' className='ui right floated button' onClick={this.onClickHandler}>
          View Applicants
        </Button>
            <a className='header'><h4>{this.props.event.eventName} |  (Event ID: {this.props.event.companyName})</h4></a>
            <div className='middle aligned content'>
              <div>
              <span className='cinema'>
               </span>
               </div>
              <div className='description'>
              {this.props.event.eventDescription}
              </div>
              <div className='extra'></div>
            </div>
          </div>
        </div>
        </div>
      );
  }
  
};

export default EventItemEmployer;
