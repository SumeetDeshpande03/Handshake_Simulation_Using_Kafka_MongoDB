const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: String,
    description: String,
    contactNumber: Number,
    jobs: [{
        companyName: String,
        title: String,
        postingDate: String,
        deadline: String,
        location: String,
        salary: String,
        jobDescription: String,
        category: String,
        students: [{    
            studentId: Schema.Types.ObjectId,
            name: String,
            collegeName: String,
            major: String,
            cgpa: String, 
        }]
    }],
    events: [{
        companyName: String,
        eventName: {
            type: String,
            required: true,
        },
        eventDescription: {
            type: String,
            required: true,
        },
        eventLocation: String,
        eligibility: String,
        fromDate: Date,
        toDate: Date,
        students: [{
            name: String,
            studentId: Schema.Types.ObjectId,
            major: String,
            collegeName: String
        }]
    }],
    messages:[]
})

const Employer = mongoose.model('employer', EmployerSchema);

module.exports = Employer;