import React from 'react';
import axios from 'axios';
// import {Dropdown} from 'semantic-ui-react';

// const university = [{text: 'San Jose State University', value: 'San Jose State University'}, {text: 'University of Southern California', value: 'University of Southern California'}, {text: 'Mumbai University', value: 'Mumbai University'}]
// const degree = [{text: 'Masters', value: 'masters'}, {text: 'Bachelors', value: 'bachelors'}, {text: 'BE', value: 'BE'}]
// const major = [{text: 'computer science', value: 'computer science'}, {text: 'Computer Engineering', value: 'Computer Engineering'}, {text: 'Software engineering', value: 'Software engineering'}]
// const year = [{text: '2021', value: '2021'}, {text: '2020', value: '2020'}, {text: '2016', value: '2016'}]

class EditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      collegeName: '', 
      degree: '', major: '', 
      yearOfPassing: '', 
      cgpa: '', 
      location:'' };
  }
  
  onCancel = () => {
    this.props.toggle();
  };

  onSave = (e) => {
    e.preventDefault();
    const student_id = sessionStorage.getItem("studentId");
    axios.get(`http://localhost:3000/student/studentProfile/${student_id}`).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        const list = res.data.education.filter(item=>{
          if(item._id!==this.props.data._id){
            return item
          }
        })
        const data = {education: [...list, 
          {collegeName: this.state.collegeName === ''?this.props.data.collegeName: this.state.collegeName,
          location: this.state.location === ''?this.props.data.location: this.state.location,
          degree: this.state.degree === ''?this.props.data.degree: this.state.degree,
          major: this.state.major === ''?this.props.data.major: this.state.major,
          yearOfPassing: this.state.yearOfPassing === ''? this.props.data.yearOfPassing: this.state.yearOfPassing,
          cgpa: this.state.cgpa === ''? this.props.data.cgpa: this.state.cgpa}]}
          axios
          .put(`http://localhost:3000/student/studentProfile/${student_id}`, data, {headers: {'Content-Type': 'application/json'}})
          .then(res => {
          if (res.status === 200) {
            this.props.onUpdateEducation(res.data.education)          
          } else {
              console.log(res);
          }
          })
          .catch(err => {
          console.log(err);
          });
          this.props.toggle();
      } else if (res.status === 201){
        console.log(res);
        this.setState({ error: 'Student Not found' });
        console.log(this.state.error)
      }
    });
  };

  onDelete = (e) => {
    e.preventDefault();
    const student_id = sessionStorage.getItem("studentId");
    axios.get(`http://localhost:3000/student/studentProfile/${student_id}`).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        const list = res.data.education.filter(item=>{
          if(item._id!==this.props.data._id){
            return item
          }
        })
        const data = {education: list} 
          axios
          .put(`http://localhost:3000/student/studentProfile/${student_id}`, data, {headers: {'Content-Type': 'application/json'}})
          .then(res => {
          if (res.status === 200) {
            this.props.onUpdateEducation(res.data.education)          
          } else {
              console.log(res);
          }
          })
          .catch(err => {
          console.log(err);
          });
          this.props.toggle();
      } else if (res.status === 201){
        console.log(res);
        this.setState({ error: 'Student Not found' });
        console.log(this.state.error)
      }
    });    
  };

  onChangeHandlerCollege = (e) => {
    this.setState({collegeName: e.target.value}, () => {
      console.log("Input", this.state.collegeName);
    })
  }

  onChangeHandlerLocation = (e) => {
    this.setState({location: e.target.value}, () => {
      console.log("Input", this.state.location);
    })
  }

  onChangeHandlerDegree = (e) => {
    this.setState({degree: e.target.value}, () => {
      console.log("Input", this.state.degree);
    })
  }

  onChangeHandlerMajor = (e) => {
    this.setState({major: e.target.value}, () => {
      console.log("Input", this.state.major);
    })
  }
  
  onChangeHandlerYear = (e) => {
    this.setState({yearOfPassing: e.target.value}, () => {
      console.log("Input", this.state.yearOfPassing);
    })
  }

  onChangeHandlerGPA = (e) => {
    this.setState({cgpa: e.target.value}, () => {
      console.log("input", this.state.cgpa);
    })
  }

  render() {
    return (
      <div>
        <div>
          <form className='ui equal width form'>
            <div class='field'>
                <label>School Name</label>
              <input 
              type="text"
              placeholder='School'
              value={this.state.collegeName === ''?this.props.data.collegeName: this.state.collegeName}
              onChange={this.onChangeHandlerCollege} />
            </div>
            <div class='field'>
                <label>Location</label>
                <input type="text"  
                placeholder='Location'
                value={this.state.location === ''?this.props.data.location: this.state.location} 
                onChange={this.onChangeHandlerLocation} />
            </div>
            <div class='field'>
                <label>Degree</label>
                <input 
                  type="text"
                  placeholder='Degree'
                  value={this.state.degree === ''?this.props.data.degree: this.state.degree}
                  onChange={this.onChangeHandlerDegree} />
            </div>
            <div class='field'>
                <label>Major</label>
                <input 
                  type="text"
                  placeholder='Major'
                  value={this.state.major === ''?this.props.data.major: this.state.major}
                  onChange={this.onChangeHandlerMajor} />
            </div>
            <div class='fields'>
                <div class='field'>
                    <label>Passing Year</label>
                    <input 
                    type="text"
                    placeholder='Passing Year'
                    value={this.state.yearOfPassing === ''? this.props.data.yearOfPassing: this.state.yearOfPassing}
                    onChange={this.onChangeHandlerYear} />
                </div>
                <div class='field'>
                <label>GPA</label>
                <input 
                type="text" 
                value={ this.state.cgpa === ''? this.props.data.cgpa: this.state.cgpa } 
                placeholder="GPA" 
                onChange={this.onChangeHandlerGPA} />
                </div>
            </div>
            <div>
                <button class='ui primary button' onClick={this.onSave}>Save</button>
                <button class='ui button' onClick={this.onDelete}>Delete</button>
                <button class='ui button' onClick={this.onCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditForm;
