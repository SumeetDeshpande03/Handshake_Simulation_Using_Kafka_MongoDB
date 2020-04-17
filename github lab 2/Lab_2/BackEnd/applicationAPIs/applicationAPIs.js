const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka=require('./../kafka/client')


router.put('/:applicationId', (req, res) => {
    req.body.applicationId=req.params.applicationId;
    req.body.path="update-application"
    kafka.make_request('applications', req.body, (err, results) => {
      if(err){
        console.log("Inside err");
        res.json({
            status:"error",
            msg:"System Error, Try Again."
        })
      } else if(results.status==404){
        return res.status(404).json({errors:[{msg:'Application Not Found'}]});
      } else {
        res.status(results.status).send(JSON.parse(results.data));
      } 
   });
});


router.put('/apply/:jobId', (req, res) => {
  req.body.job_id=req.params.jobId;
  req.body.path="apply"
 kafka.make_request('applications', req.body, (err, results) => {
  if(err){
    console.log("Inside err");
    res.json({
        status:"error",
        msg:"System Error, Try Again."
    })
  } else if(results.status==404){
    return res.status(404).json({errors:[{msg:'Application Not Found'}]});
  } else{
    res.status(results.status).send(JSON.parse(results.data));
  }
 });
});

module.exports = router;