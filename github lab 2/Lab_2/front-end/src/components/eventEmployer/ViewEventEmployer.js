import React from 'react';
import Navbar from '../companyNavbar';
import axios from 'axios';
import EventItemEmployer from './EventItemEmployer';

class ViewEventEmployer extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    const id = 'Oracle';
    axios
      .get(`http://localhost:3000/events`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ posts: res.data }, () => {
            console.log(this.state.posts);
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
          <Navbar />
        </div>
        
          {this.state.posts.map(post => {
            return (
            <div className='ui raised segment' style={{marginLeft: '20px', width: '70%'}} >
                <EventItemEmployer key={post} event={post} />
              </div>
            );
          })}   
      </div>
    );
  }
}

export default ViewEventEmployer;
