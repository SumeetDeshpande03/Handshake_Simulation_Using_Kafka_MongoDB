import React from "react";
import Navbar from "../companyNavbar";
import { Button } from "semantic-ui-react";
import { Label, Icon } from 'semantic-ui-react';
import axios from 'axios';
import Resume from '../../images/Sumeet_Deshpande_Resume.pdf'

class ViewStudentApplication extends React.Component {
  constructor() {
    super();
    this.state = {
      currstudentId: [],
      current_skill: ''
    };
  }

  componentDidMount() {
    // console.log(this.props.location.state.student);
    // const id = this.props.location.state.student._id;
    // console.log(id);
    const ids = this.props.location.state.student.skillSet;
    this.setState({ currstudentId: ids });

  }
  renderSkills = (skill) => {
    return (
            <Label as='a' style={{marginBottom:'5px'}}>
                {skill}
                {/* <Icon name='delete' id={skill} /> */}
            </Label>
    )
}
onChangeHandler = (e) => {
    this.setState({current_skill: e.target.value});
    
}

onAdd = (e) => {
    e.preventDefault();
  //  const id = this.props.location.state.student._id;
    const list = [...this.state.currstudentId, this.state.current_skill];
    const data = {skillSet: list};
  
    // axios.put('http://localhost:3000/student/studentProfile/${id}', data, {headers: {'Content-Type': 'application/json'}})
    // .then(res => {
    //     if (res.status === 200) {
    //         console.log(res.data);
      
    //     } else {
    //         console.log(res);
    //     }
    // })
    // .catch(err => {
    //     console.log(err);
    // });
    this.setState({currstudentId: list})
    this.setState({current_skill: ''});

}
  render() {
    console.log(this.state.currstudentId);
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div
          style={{
            width: "50%",
            float: "left",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <iframe
            src= {Resume}
            height="700"
            width="100%"
          ></iframe>
        </div>
        <div
          className="ui segment"
          style={{
            width: "45%",
            float: "left",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          <div>
            <h3>{this.props.location.state.student.name}</h3>
          </div>
          <div>Email: {this.props.location.state.student.email}</div>
          <div>Major: {this.props.location.state.student.major}</div>
          <div></div>
          <div style={{ marginTop: "50px" }}>
            <div>
              <Button primary onClick={this.onAccept}>
                Accept
              </Button>
              <Button color="red" onClick={this.onReject}>
                Reject
              </Button>

<div>
                <div className='ui raised card' style={{padding: '10px'}}>
                    <div style={{marginBottom: '30px'}}>
                        <h3>Messages</h3>
                    </div>
                    <div style={{marginBottom: '20px'}}>
                      
                        {this.state.currstudentId.map((skill) => {
                            return this.renderSkills(skill)
                        })}
                    </div>
                    <div>
                        <form className='ui form'>
                            <input type='text' placeholder='Add more Messages' value={this.state.current_skill} onChange={this.onChangeHandler} />
                            <div style={{marginTop: '10px'}}>
                                <button class='ui positive button' onClick={this.onAdd}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


             {/* <div> 
               < Messages message={this.props.location.state.student.skillSet} />
             
            </div>   */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStudentApplication;
