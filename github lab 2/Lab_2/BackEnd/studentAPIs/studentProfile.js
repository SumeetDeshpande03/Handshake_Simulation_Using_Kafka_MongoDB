const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka= require('./../kafka/client')

router.get('/', (req, res) => {
  req.body.path="get-all-students"
  kafka.make_request('studentProfile', req.body, (err, results) => {
    if (err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    }else{
      res.status(results.status).send(JSON.parse(results.data));
    }
  });
});

router.get('/:student_id', (req, res) => {
  req.body.id = req.params.student_id;
  req.body.path="get-student-by-id"
  kafka.make_request('studentProfile', req.body, (err, results) => {
    if (err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return res.status(201).json({errors:[{msg:'Student Not Found'}]});
    } else {
      res.status(200).send(JSON.parse(results.data));
    }
  });
});

router.put('/:student_id', (req, res) => {
  req.body.id = req.params.student_id;
  req.body.path="update-student-by-id"
  kafka.make_request('studentProfile', req.body, (err, results) => {
    if(err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return res.status(404).json({errors:[{msg:'Student Not Found'}]});
    } else {
      res.status(results.status).send(JSON.parse(results.data));
    }
  });
});

module.exports = router;
