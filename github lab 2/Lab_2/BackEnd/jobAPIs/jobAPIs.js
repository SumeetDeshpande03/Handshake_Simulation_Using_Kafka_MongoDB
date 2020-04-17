const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka = require('../kafka/client');

router.get('/', (req, res) => {
    req.body.path="get-all-jobs"
    kafka.make_request('jobs', req.body, (err, results) => {
      if(err){
        console.log("Inside err");
        res.json({
            status:"error",
            msg:"System Error, Try Again."
        })
      } else{
        res.status(results.status).send(JSON.parse(results.data));
      }
   });
});


router.get('/:job_id', (req, res) => {
    req.body.id = req.params.job_id;
    req.body.path="get-job-by-jobId"
    kafka.make_request('jobs', req.body, (err, results) => {
      if(err){
        console.log("Inside err");
        res.json({
            status:"error",
            msg:"System Error, Try Again."
        })
      } else if(results.status==404){
        return res.status(404).json({errors:[{msg:'Job Not Found'}]});
      } else{
        res.status(results.status).send(JSON.parse(results.data));
      }   
   });
});


router.post('/', (req, res) => {
    req.body.path="post-job";
    kafka.make_request('jobs', req.body, (err, results) => {
      if(err){
        console.log("Inside err");
        res.json({
            status:"error",
            msg:"System Error, Try Again."
        })
      } else{
        res.status(results.status).send(JSON.parse(results.data));
      } 
   });
});

router.put('/:job_id', (req, res) => {
  req.body.id = req.params.job_id;
  req.body.path="update-job-by-id"
  kafka.make_request('jobs', req.body, (err, results) => {
    if(err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return res.status(404).json({errors:[{msg:'Job Not Found'}]});
    } else {
      res.status(results.status).send(JSON.parse(results.data));
    }
  });
});

router.get('/company/:companyName', (req, res) => {
  req.body.companyName = req.params.companyName;
  req.body.path = "get-jobs-by-companyName"
  kafka.make_request('jobs', req.body, (err, results) => {
    if(err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return res.status(404).json({errors:[{msg:'Company Jobs Not Found'}]});
    } else{
      res.status(200).send(JSON.parse(results.data));
    }
  });
});

module.exports = router;
