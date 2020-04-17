import React from 'react';
import {Redirect} from 'react-router';
import {Button} from 'semantic-ui-react';
import alt from '../../images/sjsu.png';

class JobItemEmployer extends React.Component {
    constructor() {
        super();
        this.state ={ redirect:''};
    }
  onClickHandler = () => {
  this.setState({redirect: <Redirect to={{pathname: '/company/job/applicants', state: {job: this.props.job }}} />})
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
        <a className='header'><h4>{this.props.job.title} | (Job ID: {this.props.job._id})</h4></a>
        <div className='meta'>
          <div>
            <span className='cinema'>
              Descriptions: {this.props.job.jobDescription}
            </span>
          </div>
          <div>
            <span className='cinema'>
              Job Category: {this.props.job.category}  
            </span>
          </div>
            <div>
            <span className='cinema'>
              Location: {this.props.job.location}
            </span>
          </div>
          
        </div>
       
      </div>
    </div>
    </div>
      );
  }
  
};
export default JobItemEmployer;
