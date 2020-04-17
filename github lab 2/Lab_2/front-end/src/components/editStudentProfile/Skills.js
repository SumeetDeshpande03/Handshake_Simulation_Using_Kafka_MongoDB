import React from 'react';
import axios from 'axios';
import { Label, Icon } from 'semantic-ui-react';


class Skills extends React.Component {
    constructor() {
        super();
        this.state = {skills: [], current_skill: ''}
    }

    componentDidMount() {
        console.log(this.props.skill.skills);
        if(this.props.skill != null) {
            this.setState({skills: this.props.skill.skills})
        }
    }

    onAdd = (e) => {
        e.preventDefault();
        const id = sessionStorage.getItem("studentId");
        const list = [...this.state.skills, this.state.current_skill];
        // const str = list.join();
        const data = {skillSet: list}
        // console.log(data.skillSet)
        axios
        .put(`http://localhost:3000/student/studentProfile/${id}`, data, {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            if (res.status === 200) {
                console.log(res.data);
          
            } else {
                console.log(res);
            }
        })
        .catch(err => {
            console.log(err);
        });
        this.setState({skills: list})
        this.setState({current_skill: ''});

    }

    onChangeHandler = (e) => {
        this.setState({current_skill: e.target.value});
        
    }
    onDeleteSkill = (e) => {
        console.log(e.target.id)
        const id = sessionStorage.getItem("studentId");
        const list = this.state.skills.filter(item => {
            if (e.target.id !== item) {
                return item;
            }
        })
        console.log(list)
        const data = {skillSet: list}
        axios
        .put(`http://localhost:3000/student/studentProfile/${id}`, data, {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            if (res.status === 200) {
                console.log(res.data);
          
            } else {
                console.log(res);
            }
        })
        .catch(err => {
            console.log(err);
        });
        this.setState({skills: list})
    }

    renderSkills = (skill) => {
        return (
                <Label as='a' style={{marginBottom:'5px'}}>
                    {skill}
                    <Icon name='delete' id={skill} onClick={this.onDeleteSkill}/>
                </Label>
        )
    }
    render() {
        return (
            <div>
                <div className='ui card' style={{padding: '10px'}}>
                    <div style={{marginBottom: '30px'}}>
                        <h3>Skills</h3>
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        {this.state.skills.map((skill) => {
                            return this.renderSkills(skill)
                        })}
                    </div>
                    <div>
                        <form className='ui form'>
                            <input type='text' placeholder='Add more skills' value={this.state.current_skill} onChange={this.onChangeHandler} />
                            <div style={{marginTop: '10px'}}>
                                <button class='ui primary button' onClick={this.onAdd}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;