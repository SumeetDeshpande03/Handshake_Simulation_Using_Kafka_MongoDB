import React from 'react';
import Home from './Home';
import StudentLogin from './studentSignUpAndLoginPage/StudentLogin';
import StudentSignUp from './studentSignUpAndLoginPage/StudentSignUp';
import CompanySignUp from './companySignUpAndLoginPage/CompanySignUp';
import CompanyLogin from './companySignUpAndLoginPage/CompanyLogin';
import CompanyProfile from './CompanyProfile'
import Event from './Event';
import Students from './Students'
import Jobs from './Jobs';
import EventPost from './eventEmployer/EventPost';
import ViewEventEmployer from './eventEmployer/ViewEventEmployer';
import ViewStudentProfile from './viewStudentProfile/ViewStudentProfile';
import SingleEvent from './eventEmployer/SingleEvent';
import EventPageStudent from './EventPageStudent';
import JobPost from './jobEmployer/JobPost';
import ViewJobs from './jobEmployer/ViewJobs';
import JobApplicants from './jobEmployer/JobApplicants';
import Application from './Application';
import RegisteredEvents from './RegisteredEvents';
import StudentProfile from './editStudentProfile/StudentProfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ViewStudentApplication from './jobEmployer/ViewStudentApplication';

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/student/studentLogin' component={StudentLogin} />
        <Route path='/student/studentSignUp' component={StudentSignUp} />
        <Route path='/company/companySignUp' component={CompanySignUp} />
        <Route path='/company/companyLogin' component={CompanyLogin} />
        <Route path='/myProfile' component={StudentProfile} />
        <Route path='/jobs' component={Jobs} />
        <Route path='/applications' component={Application} />
        <Route path='/event' component={Event} />
        <Route path='/student/event' component={EventPageStudent} />
        <Route path='/registeredEvents' component={RegisteredEvents} />
        <Route path='/company/event' component={EventPost} />
        <Route path='/company/post' component={ViewEventEmployer} />
        <Route path='/company/profile' component={CompanyProfile} />
        <Route path='/company/job/post' component={JobPost} />
        <Route path='/company/job/view' component={ViewJobs} />
        <Route path='/company/job/applicants' component={JobApplicants} />
        
        <Route path='/company/myevent' component={SingleEvent} /> 
        <Route path='/student/profile' component={ViewStudentProfile} />
        <Route path='/students' component={Students} />
        <Route path='/company/viewstudentapplication' component={ViewStudentApplication} />
      </div>
    </Router>
  )
}

export default App;
