const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobPostSchema = new Schema({  
    companyName: String,
    title: {
        type: String,
        required: true
    } ,
    jobRequiremnts: String,
    postingDate: String,
    deadline: String,
    location: String,
    salary: String,
    jobDescription: {
        type: String,
        required: true
    },
    category: String,
    students: []
})

const JobPost = mongoose.model('jobpost', JobPostSchema);

module.exports = JobPost;