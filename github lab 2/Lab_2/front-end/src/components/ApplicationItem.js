import React from 'react';
import alt from '../images/alt.png';

class ApplicationItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      // <div>
      //   {this.state.redirect}
      //   <div className='item'>
      //     <div className='ui tiny image'>
      //       <img alt="" src={alt} />
      //     </div>
      //     <button
      //       className='ui right floated basic primary button'
      //       onClick={this.onClickHandler}
      //     >
      //       Withdraw
      //     </button>
      //     <div className='middle aligned content'>
      //       <div className='header'>{this.props.application.companyName}</div>
      //       <div className='description'>
      //         <p></p>
      //       </div>
      //       <div className='extra'></div>
      //     </div>
      //   </div>
      // </div>
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
      <button
            className='ui right floated basic primary button'
            onClick={this.onClickHandler}
          >
            Withdraw
          </button>
        <a className='header'><h4>{this.props.application.title} | {this.props.application.companyName}</h4></a>
        <div className='meta'>
          <div>
            <span className='cinema'>
              Description: {this.props.application.jobDescription}
            </span>
          </div>
          <div>
            <span className='cinema'>
              Job Category: {this.props.application.category}  
            </span>
          </div>
          <div>
            <span className='cinema'>
              Location: {this.props.application.location}
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

export default ApplicationItem;
