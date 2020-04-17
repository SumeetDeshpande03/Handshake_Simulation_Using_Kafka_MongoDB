import React from 'react';
import axios from 'axios';
import Header from '../Header';
import Navbar from '../companyNavbar';

class SingleEvent extends React.Component {
  constructor() {
    super();
    this.state = { registeredStudents: [] };
  }
  componentDidMount() {
    const id = 1;
    axios
      .get(`http://35.166.32.0:8080/api/event/company/${id}`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ registeredStudents: res.data.result }, () => {
            console.log(this.state.registeredStudents);
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
      </div>
    );
  }
}

export default SingleEvent;
