import React from 'react';
import axios from 'axios';
// import {Dropdown} from 'semantic-ui-react';

// const companyName = [{text: 'Google', value: 'Google'}, {text: 'Tesla', value: 'Tesla'}, {text: 'Facebook', value: 'Facebook'}]
// const designation = [{text: 'Application Developer', value: 'Application Developer'}, {text: 'Performance Engineer', value: 'Performance Engineer'}, {text: 'Software Engineer', value: 'Software Engineer'}]
// const fromDate = [{text: '2015', value: '2015'}, {text: '2016', value: '2016'}, {text: '2017', value: '2017'}]
// const toDate = [{text: '2018', value: '2018'}, {text: '2019', value: '2019'}, {text: '2020', value: '2020'}]
// const location = [{text: 'Mumbai', value: 'Mumbai'}, {text: 'San Jose', value: 'San Jose'}, {text: 'San Andreas', value: 'San Andreas'}]

class EditExperienceForm extends React.Component {
  constructor() {
    super();
    this.state = {
      companyName: '', 
      jobTitle: '', 
      startDate: '', 
      endDate: '', 
      location: '' , 
      workDescription: ''};
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
        const list = res.data.experience.filter(item=>{
          if(item._id!==this.props.data._id){
            return item
          }
        })
        const data = {experience: [...list, 
          {companyName: this.state.companyName === ''?this.props.data.companyName: this.state.companyName,
          jobTitle: this.state.jobTitle === ''?this.props.data.jobTitle: this.state.jobTitle,
          startDate: this.state.startDate === ''?this.props.data.startDate: this.state.startDate,
          endDate: this.state.endDate === ''? this.props.data.endDate: this.state.endDate,
          location: this.state.location === ''? this.props.data.location: this.state.location,
          workDescription: this.state.workDescription===''?this.props.data.workDescription: this.state.workDescription}]}
          axios
          .put(`http://localhost:3000/student/studentProfile/${student_id}`, data, {headers: {'Content-Type': 'application/json'}})
          .then(res => {
          if (res.status === 200) {
            this.props.onUpdateExperience(res.data.experience)          
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
        const list = res.data.experience.filter(item=>{
          if(item._id!==this.props.data._id){
            return item
          }
        })
        const data = {experience: list} 
          axios
          .put(`http://localhost:3000/student/studentProfile/${student_id}`, data, {headers: {'Content-Type': 'application/json'}})
          .then(res => {
          if (res.status === 200) {
            this.props.onUpdateExperience(res.data.experience)          
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

  onChangeHandlerCompanyName = (e) => {
    this.setState({companyName: e.target.value}, () => {
      console.log("Dropdown", this.state.companyName);
    })
  }

  onChangeHandlerDesignation = (e) => {
    this.setState({jobTitle: e.target.value}, () => {
      console.log("Dropdown", this.state.jobTitle);
    })
  }

  onChangeHandlerFromDate = (e) => {
    this.setState({startDate: e.target.value}, () => {
      console.log("Dropdown", this.state.startDate);
    })
  }
  
  onChangeHandlerToDate = (e) => {
    this.setState({endDate: e.target.value}, () => {
      console.log("Dropdown", this.state.endDate);
    })
  }

  onChangeHandlerCompanyLocation = (e) => {
    this.setState({location: e.target.value}, () => {
      console.log("Dropdown", this.state.location);
    })
  }

  onChangeHandlerWorkSummary = (e) => {
    this.setState({workDescription: e.target.value}, () => {
      console.log("input", this.state.workDescription);
    })
  }

  render() {
    return (
      <div>
        <div>
          <form className='ui equal width form'>
          <div class='field'>
                <label>Company Name</label>
                <input type="text"
              placeholder='Company Name'
              value={this.state.companyName === ''? this.props.data.companyName: this.state.companyName} 
              onChange={this.onChangeHandlerCompanyName} />
            </div>
            <div class='field'>
                <label>Designation</label>
              <input type="text" 
              placeholder='Designation'
              value={this.state.jobTitle === ''? this.props.data.jobTitle: this.state.jobTitle}
              onChange={this.onChangeHandlerDesignation} />
            </div>
            <div class='field'>
                <label>From</label>
                <input type="text"
              placeholder='Starting Date'
              value={this.state.startDate === ''? this.props.data.startDate: this.state.startDate}
              onChange={this.onChangeHandlerFromDate} />
            </div>
            <div class='fields'>
                <div class='field'>
                    <label>To</label>
                    <input type="text"
                    placeholder='End Date'
                    value={this.state.endDate === ''? this.props.data.endDate: this.state.endDate}
                    onChange={this.onChangeHandlerToDate}/>
                </div>
            </div>
            <div class='field'>
                    <label>Company Location</label>
                    <input type="text"
                    placeholder='Location'
                    value={this.state.location === ''? this.props.data.location: this.state.location}
                    onChange={this.onChangeHandlerCompanyLocation}/>
             </div>
            <div class='field'>
                <label>Work Summary</label>
                <input type="text" value={this.state.workDescription === ''? this.props.data.workDescription: this.state.workDescription} placeholder="Work Summary" onChange={this.onChangeHandlerWorkSummary} />
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

export default EditExperienceForm;
