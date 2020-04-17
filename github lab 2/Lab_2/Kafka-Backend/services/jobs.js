const JobPost = require('../models/job')

const getAllJobs = async(msg, callback) => {
    var res = {}
    try {
        const posts = await JobPost.find({})
        res.status=200
        res.data=JSON.stringify(posts)
        callback(null,res)
    } catch (e) {
        res.status=500
        callback(null,res)
    }
}

const getJobByIdHandler = async(msg, callback) => {
    var res = {}
    const _id = msg.id
    try {
        const post = await JobPost.findById(_id)
        if (!post) {
            res.status=404
            callback(null,res)
        }
        else{
            res.status=200
            res.data=JSON.stringify(post)
            callback(null,res)
        }
    } catch (e) {
        res.status=500
        callback(null,"err")
    }
}

getJobByCompanyNameHandler = async (msg, callback) => {
    var res = {}
    const companyName = msg.companyName
    try {
        const post = await JobPost.find({companyName : companyName})
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

const PostJobHandler = async(msg, callback) => {
    var res = {}
    console.log(msg)
    const post = new JobPost(msg)
    try {
        await post.save()
        res.status=200
        res.data=JSON.stringify(post)
        callback(null,res)
    } catch (e) {
        res.status=400
        callback(null,"err")
    }
}

updateJobByIdHandler=async(msg,callback)=>{
    var res={}
    try {
      const jobPost = await JobPost.findByIdAndUpdate(msg.id, msg, {new: true})
      if (!jobPost) {
        res.data=JSON.stringify(jobPost)
        res.status=404
        callback(null,res)
      } else {
        res.data=JSON.stringify(jobPost)
        res.status=200
        callback(null,res)
      }
    } catch (e) {
      console.log(e)
      callback(null,"err")
    }
  }

function handle_request(msg, callback) {
    if (msg.path === "get-all-jobs") {
        delete msg.path
        getAllJobs(msg, callback)
    }
    else if (msg.path === "get-job-by-jobId") {
        delete msg.path
        getJobByIdHandler(msg, callback)
    }
    else if (msg.path === "post-job") {
        delete msg.path
        PostJobHandler(msg, callback)
    } else if(msg.path==="update-job-by-id"){
        delete msg.path
        updateJobByIdHandler(msg,callback)
    }else if(msg.path==="get-jobs-by-companyName"){
            delete msg.path
        getJobByCompanyNameHandler(msg, callback)
    }
};

exports.handle_request = handle_request;
