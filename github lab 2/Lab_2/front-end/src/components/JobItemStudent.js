import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Button } from 'semantic-ui-react';
import alt from '../images/alt.png';

class JobItemStudent extends React.Component {
  constructor() {
    super();
    this.state = {company_name: ''};
  }

  componentDidMount() {
    // const id = this.props.job.company_id;
    // axios.get(`http://35.166.32.0:8080/api/employer/${id}`).then((res)=> {
    //         if(res.status === 200) {
    //             console.log(res.data.result);
    //             this.setState({company_name: res.data.result[0].company_name})
    //         }
    //     }).catch(err => {
    //         console.log(err);
    //     })
  }
  onClickHandler = () => {
      // const id = 16;
    
  };

  onSelectHandler = () => {
    this.props.onSelectJob(this.props.job, this.props.job.companyName);
  }

  render() {
    return (
      <div>
        {this.state.redirect}
        <div className='item container' onClick={this.onSelectHandler}>
        <div
          className='ui tiny image'
          style={{ float: 'left', marginRight: '10px', padding: '5px' }}
        >
          <img alt="" src={alt}/>
        </div>
        <div className='content'>
          <a className='header'><h4>{this.props.job.title} | {this.props.job.companyName}</h4></a>
          <div className='meta'>
            <div>
              <span className='cinema'>
                Description: {this.props.job.jobDescription}
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
          <div className='description'>
            <div>
              
            </div>
          </div>
          <div className='extra'>
            
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default JobItemStudent;


      // <div>
      //   {this.state.redirect}
      //   <div className='item'>
      //     <div className='ui tiny image'>
      //       <img src={alt} />
      //     </div>
      //     <button
      //       className='ui right floated basic primary button'
      //       onClick={this.onClickHandler}>
      //       Apply
      //     </button>
      //     <div className='middle aligned content'>
      //       <div className='header'>{this.props.job.job_title}</div>
      //       <div className='description'>
      //         <p></p>
      //       </div>
      //       <div className='extra'></div>
      //     </div>
      //   </div>
   