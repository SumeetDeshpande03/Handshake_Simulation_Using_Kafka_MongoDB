const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventPostSchema = new Schema({
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
    students: []
})

const EventPost = mongoose.model('eventpost', EventPostSchema);

module.exports = EventPost;