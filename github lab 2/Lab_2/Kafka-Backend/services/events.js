const EventPost = require('../models/event')
const Student = require('../models/student')

getAllEvents = async (msg, callback) => {
    var res = {}
    try {
        const posts = await EventPost.find({})
        res.status = 200
        res.data = JSON.stringify(posts)
        callback(null, res)
    } catch (e) {
        res.status = 500
        callback(null, res)
    }
}


getEventByIdHandler = async (msg, callback) => {
    var res = {}
    const _id = msg.id
    try {
        const post = await EventPost.findById(_id)
        if (!post) {
            res.status = 404
            callback(null, res)
        } else{
            res.status = 200
            res.data = JSON.stringify(post)
            callback(null, res)
        }
    } catch (e) {
        res.status = 500
        callback(null, res)
    }
}

getEventByCompanyNameHandler = async (msg, callback) => {
    var res = {}
    const companyName = msg.companyName
    try {
        const post = await EventPost.find({companyName : companyName})
        if (!post) {
            res.status = 404
            callback(null, res)
        } else{
            res.status = 200
            res.data = JSON.stringify(post)
            callback(null, res)
        }
    } catch (e) {
        res.status = 500
        callback(null, res)
    }
}

postEventHandler = async (msg, callback) => {
    var res = {}
    const post = new EventPost(msg)
    try {
        await post.save()
        res.status = 200
        res.data = JSON.stringify(post)
        callback(null, res)
    } catch (e) {
        res.status = 400
        callback(null, res)
    }
}

updateEventByIdHandler=async(msg,callback)=>{
    var res={}
    try {
      const eventPost = await EventPost.findByIdAndUpdate(msg.id, msg, {new: true})
      if (!eventPost) {
        res.data=JSON.stringify(eventPost)
        res.status=404
        callback(null,res)
      } else {
        res.data=JSON.stringify(eventPost)
        res.status=200
        callback(null,res)
      }
    } catch (e) {
      console.log(e)
      callback(null,"err")
    }
  }

postRegisterForEvent = async (msg, callback) => {
    var res = {}
    const student_id = msg.id
    // const student = msg.student
    const event_id = msg.event_id
    try {
        const post = await EventPost.findById(event_id)
        if (!post) {
            res.status = 404
            callback(null, res)
        } else {
            console.log("Event Found")
            const user = await Student.findById(student_id)
            post.students.push(user)
            await post.save()
            const { companyName, eventName, eventDescription, eventLocation, fromDate, toDate } = post
            user.registeredEvents.push({ companyName, eventName, eventDescription, eventLocation, fromDate, toDate })
            await user.save()
            res.status = 200
            res.data = JSON.stringify(user)
            callback(null, res)
        }
    } catch (e) {
        res.status = 400
        callback(null, res)
    }

}


function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === "get-all-events") {
        delete msg.path
        getAllEvents(msg, callback)
    }else if (msg.path === "get-event-by-id") {
        delete msg.path
        getEventByIdHandler(msg, callback)
    }else if (msg.path === "get-event-by-companyName") {
        delete msg.path
        getEventByCompanyNameHandler(msg, callback)
    }else if (msg.path === "post-event") {
        delete msg.path
        postEventHandler(msg, callback)
    }else if (msg.path === 'post-register-for-event') {
        delete msg.path
        postRegisterForEvent(msg, callback)
    }else if(msg.path==="update-event-by-id"){
        delete msg.path
        updateEventByIdHandler(msg,callback)
    }
};

exports.handle_request = handle_request;