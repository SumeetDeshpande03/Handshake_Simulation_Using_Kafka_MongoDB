const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    major:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    country:{
        type: String
    },
    careerObjective:{
        type: String
    },
    phoneNumber: {
        type: Number
    },
    dateOfBirth: {
        type: Date
    },
    skillSet: [],
    education: [{
        collegeName: String,
        location: String,
        degree: String,
        major: String,
        yearOfPassing: String,
        cgpa: String
    }],
    experience: [{
        companyName: String,
        jobTitle: String,
        location: String,
        workDescription: String,
        startDate: Date,
        endDate: Date
    }],
    applications: [{
        applicationId: Schema.Types.ObjectId,
        status: String,
        companyName: String,
        title: String,
        location: String,
        salary: String,
        jobDescription: String,
        category: String,
        applicationDate: Date
    }],
    registeredEvents: [{
        companyName: String,
        eventName: String,
        eventDescription: String,
        eventLocation: String,
        fromDate: Date,
        toDate: Date
    }],
    messages: []
})

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;