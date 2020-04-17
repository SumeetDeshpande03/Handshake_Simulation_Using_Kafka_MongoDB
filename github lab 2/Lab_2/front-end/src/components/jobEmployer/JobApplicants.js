import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import JobItemApplicant from './JobItemApplicant';
import Navbar from '../companyNavbar';
import Jobs from '../Jobs';

class JobApplicants extends React.Component {
  constructor() {
    super();
   
    this.state = { applications: [], redirect: ''};
  }
  componentDidMount() {
    var students = this.props.location.state.job.students;
     this.setState({applications: students })
    // console.log(this.state.applications);
   

    // if(this.props.location.state == undefined) {
    //   this.setState({redirect: <Redirect to='/company/viewjob' />})
    // } else {
    //   const id = this.props.location.state.job.job_id;
    //   axios
    //   .get(`http://localhost:3000/applications`)
    //   .then(res => {
    //     if (res.status === 200) {
    //       this.setState({ applications: res.data }, () => {
    //         console.log(this.state.applications);
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // }
    
  }


  render() {
    return (
      <div>
        {this.state.redirect}
        <div>
          <Navbar />
        </div>
        <div className='ui segment' style={{ marginTop: '0px', paddingLeft: '40px' }} >
          <b>
          <h3>Applications for Job Name: {this.props.location.state.job.title}</h3>
          </b>
        </div>
        <div>
        {this.state.redirect== '' && this.state.applications.map(application => {
            return (
            <div className='ui raised segment' style={{marginLeft: '20px', width: '70%'}} >
                <JobItemApplicant  application={application} />
              </div>
            );
          })}  
        </div>
      </div>
    );
  }
}

export default JobApplicants;
