const JobPost = require('../models/job')
const Student = require('./../models/student')

updateApplicationHandler = async (msg, callback) => {
    var res = {}
    const { applicationId, status } = msg
    try {
        const student = await Student.findById(msg.studentId)
        student.applications.filter((application) => {
            if (application.applicationId == applicationId) {
                application.status = status
            }
        })
        await student.save()
        console.log(student);
        res.status = 200
        res.data = JSON.stringify(student)
        callback(null, res)
    } catch (e) {
        console.log(e)
        res.status = 500
        callback(null, res)
    }
}

applyHandler = async (msg, callback) => {
    var res = {}
    const student_id = msg.student_id
    const job_id = msg.job_id
    try {
            const post = await JobPost.findById(job_id)
            if (!post) {
                res.status = 404
                callback(null, res)
            } else {
                const user = await Student.findById(student_id)
                post.students.push(user)
                console.log("Reached here")
                const applicationId = post.students[post.students.length - 1]._id
                await post.save()
                const { companyName, title, location, salary, jobDescription, category } = post
                const status = 'Pending'
                user.applications.push({ applicationId, status, companyName, title, location, salary, jobDescription, category });
                await user.save()
                res.status = 200
                res.data = JSON.stringify(user)
                callback(null, res)
            }
    } catch (e) {
        res.status = 400
        callback(null, res)
        return
    }

}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'apply') {
        delete msg.path
        applyHandler(msg, callback)
    }
    if (msg.path === "update-application") {
        delete msg.path
        updateApplicationHandler(msg, callback)
    }
};

exports.handle_request = handle_request;