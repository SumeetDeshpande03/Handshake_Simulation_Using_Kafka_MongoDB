import React from 'react';
import Header from '../Header';
import Bio from './Bio';
import axios from 'axios';
import Education from './Education';
import Experience from './Experience';
import AddForm from './AddForm';
import AddExperienceForm from './AddExperienceForm'
import Skills from './Skills';
import {Form, TextArea} from 'semantic-ui-react';


class StudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      basicDetail: [],
      skills: [],
      educationDetails: [],
      experienceDetails: [],
      showAddForm: false,
      showAddExperienceForm: false,
      showTextFrom: false,
      tempCareerObjective: '',
      error: ''
    };
  }
  componentDidMount() {
    //const id = this.props.location.state.id;
    const id = sessionStorage.getItem("studentId");
    axios.get(`http://localhost:3000/student/studentProfile/${id}`).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        this.setState({ 
          data: res.data,
          basicDetail : [{student_name: res.data.name, 
            city_name: res.data.city, 
            state_name: res.data.state,
            skills: res.data.skillSet,
            career_objective: res.data.careerObjective}],
          tempCareerObjective: res.data.careerObjective,
          educationDetails: res.data.education,
          experienceDetails: res.data.experience    
        });
      } else if (res.status === 201){
        console.log(res);
        this.setState({ error: 'Student Not found' });
        console.log(this.state.error)
      }
    });
  }

  onAddSchoolClick = () => {
    this.setState({showAddForm: !this.state.showAddForm});
  }

  onAddSchool = (education) => {
    // console.log('new', school);
    // this.state.educationDetails = education;
    // console.log(list);
    console.log(education)
    this.setState({educationDetails: education});
    this.setState({showAddForm: !this.state.showAddForm});
  }

  onAddExperienceClick = () => {
    this.setState({showAddExperienceForm: !this.state.showAddExperienceForm});
  }

  onAddExperience = (experience) => {
    // console.log('new', experience);
    // const list = [...this.state.experienceDetails, experience];
    // console.log(list);
    console.log(experience)
    this.setState({experienceDetails: experience});
    this.setState({showAddExperienceForm: !this.state.showAddExperienceForm});
  }


  onAddJourney = () => {
      this.setState({showTextFrom: !this.state.showTextFrom});
  }

  onCancelTextArea = () => {
    this.setState({showTextFrom: !this.state.showTextFrom});
  }
  
  onSaveTextArea = () => {
    const data = {careerObjective : this.state.tempCareerObjective}
    const id = sessionStorage.getItem("studentId");
    console.log('new', data);
    axios
      .put(`http://localhost:3000/student/studentProfile/${id}`, data, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        if (res.status === 200) {
          const basicDetailData = [...this.state.basicDetail];
          basicDetailData[0].career_objective = data.careerObjective;
          this.setState({basicDetail: basicDetailData})
          
        } else {
            console.log(res);
        }
      })
      .catch(err => {
        console.log(err);
      });  
    this.setState({showTextFrom: !this.state.showTextFrom});
  }

  onChangeCareerObjective = (e) => {
    this.setState({tempCareerObjective: e.target.value})
  }

  onUpdateEducation = (education) => {
    console.log(education)
    this.setState({educationDetails: education})

  }

  onUpdateExperience = (experience) => {
    console.log(experience)
    this.setState({experienceDetails: experience});
  }


  renderTextForm = () => {
      return (
          <div>
              <Form>
                  <div style={{marginBottom: '10px'}}>
                    <p><text>What are you passionate about? What are you looking for on Handshake? What are your experiences or skills?</text></p>
                    <TextArea rows={2} placeholder='' value={this.state.tempCareerObjective} onChange={this.onChangeCareerObjective} />
                  </div>
                <div>
                    <button class='ui primary button' onClick={this.onSaveTextArea}>Save</button>
                    <button class='ui button' onClick={this.onCancelTextArea}>Cancel</button>
                </div>
            </Form>
          </div>
      )
  }
  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        <div style={{float: 'left', width: '25%', marginTop: '3%', marginLeft: '15%'}}>
            <div style={{marginBottom: '5%'}}>
              {this.state.basicDetail.map(bio => {
              return <Bio bio={bio} />;
            })}
            </div>
            <div>
              {this.state.basicDetail.map(skill => {
                return <Skills skill={skill} />
              })}
            </div>
        </div>
        <div style={{float: 'left', width: '50%', marginTop: '3%'}} >
            <div style={{marginBottom: '20px'}}>
                <div className='ui segment'>
                <b>Career Objective</b>
                <i className='pencil icon' style={{ float: 'right' }} onClick={this.onAddJourney}></i>
                <div style={{ marginTop: '10px' }}>
                    {!this.state.showTextFrom && this.state.basicDetail.map(item => {
                     return ( <p style={{ fontSize: '20px' }}>{item.career_objective}</p>);
                    })}
                    {this.state.showTextFrom && this.renderTextForm()}
                </div>
                </div>
            </div>
          <div style={{marginBottom: '20px'}}>
            <div className='ui segment'>
                <b>Education</b>
                <div className='ui items'>
                {this.state.educationDetails.map(education => {
                  return <Education key={education._id} onUpdateEducation={this.onUpdateEducation} education={education} />;
                })}
                </div>
                <div>
                    {!this.state.showAddForm && <button class="fluid ui button" onClick={this.onAddSchoolClick}>Add School</button>}
                    {this.state.showAddForm && <AddForm onAddSchool={this.onAddSchool} toggle={this.onAddSchoolClick} educationDetails={this.state.educationDetails}/>}
                </div>
            </div>
          </div>
          <div style={{marginBottom: '20px'}}>
            <div className='ui segment'>
                <b>Work Experience</b>
              <div className='ui items'>
              {this.state.experienceDetails.map(experience => {
                return <Experience key={experience._id} onUpdateExperience={this.onUpdateExperience} experience={experience} />;
              })}
              </div>
              <div>
                {!this.state.showAddExperienceForm && <button class="fluid ui button" onClick={this.onAddExperienceClick}>Add Work Experience</button>}
                {this.state.showAddExperienceForm && <AddExperienceForm onAddExperience={this.onAddExperience} toggle={this.onAddExperienceClick} experienceDetails={this.state.experienceDetails} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentProfile;
