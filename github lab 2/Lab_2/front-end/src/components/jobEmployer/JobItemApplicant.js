import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import alt from '../../images/alt.png';

class JobItemApplicant extends React.Component {
  constructor() {
    super();
    this.state = {student_name: '', college_name: '', major: '', student: ''}
  }

  componentDidMount() {
   
    // const id = this.props.application.student_id;
    // axios
    //   .get(`http://localhost:3000/api/student/${id}`)
    //   .then(res => {
    //     if (res.status === 200) {
    //       this.setState({student: res.data.result[0], student_name: res.data.result[0].student_name, college_name: res.data.result[0].student_college_name, major: res.data.result[0].major });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  //  var stud = this.props.application;
  //  console.log(stud);
  }
  render() {
    return (
      
      <div className='item container'>
          <div
            className='ui tiny image'
            style={{ float: 'left', marginRight: '10px' }}
          >
            <img src={alt} style={{ borderRadius: '50%'}}/>
          </div>
          <div className='content'>
            <Link to={{pathname: '/company/viewstudentapplication', state: {student: this.props.application}}}>
            <button  className='ui right floated basic primary button'>
              View Details
            </button>
            </Link>
           
            <a className='header'><h4>{this.props.application.name} | Application ID: {this.props.application._id}</h4></a>
            <div className='meta'>
              <span className='cinema'>
                {this.props.application.major}
                </span>
            </div>
            <div className='description'>
              <div>
              {this.props.application.email}
              </div>
            
            <div className='extra'>
            {this.props.application.careerObjective}
            </div>
          </div>
          </div>
       </div>
       
    );
  }
  
};

export default JobItemApplicant;

