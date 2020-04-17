import React,{useState,useEffect} from 'react';
import axios from 'axios';
import JobItemEmployer from './JobItemEmployer';
import Navbar from '../companyNavbar';
import Pagination  from '../pagination';

// class ViewJobs extends React.Component {
  // constructor() {
  //   super();
 
    // this.state = { jobs: [] };
  // }


 
  // componentDidMount() {
   
  //   axios.get(`http://localhost:3000/jobs`)
  //     .then(res => {
  //       if (res.status === 200) {
  //        this.setState({ jobs: res.data}, () => {
  //         //  console.log(res.data);
  //           console.log(this.state.jobs);
  //         });
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  const ViewJobs = () => {
     const [jobs, setJobs] = useState([]);
     const [loading, setLoading] = useState(false);
     const [currentPage, setCurrentPage] = useState(1);
     const [jobsPerPage] = useState(5);

     useEffect(() =>{
         const fetchJobs = async () =>{
                 setLoading(true);
                 const id = sessionStorage.getItem("companyName")
                const res = await axios.get(`http://localhost:3000/jobs/company/${id}`);
              setJobs(res.data);
              setLoading(false);
       }
       fetchJobs();
     }, []);

const indexOfLastJob = currentPage * jobsPerPage;
const indexOfFirstJob = indexOfLastJob-jobsPerPage;
const currentJobs =  jobs.slice(indexOfFirstJob,indexOfLastJob);


// change page
   const paginate =  (PageNumber) => setCurrentPage(PageNumber);
 
    return (
      <div>
        <div>
          <Navbar />
        </div>
       
        <div
          className='ui teal inverted segment'
          style={{ marginTop: '0px', paddingLeft: '40px',background:'#1569e0'}}
        >
          <b>
            <h3>Job Postings</h3>
          </b>
        </div>
        <div>
        {currentJobs.map(job => {
            return (
                <JobItemEmployer key={job} job={job} />            
            );
          })}  
          </div>
          <div style={{marginLeft:'48%'}}>
          <Pagination jobsPerPage={jobsPerPage}  totalJobs={jobs.length} paginate={paginate}/>
        </div>
          
          {/* <div>
        <Pagination/>
        </div>  */}
      </div>
      
    );
  }
// } 

export default ViewJobs;
