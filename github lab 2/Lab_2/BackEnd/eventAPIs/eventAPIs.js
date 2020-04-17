const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka = require('../kafka/client');

router.get('/', (req, res) => {
  req.body.path = "get-all-events"
  kafka.make_request('events', req.body, (err, results) => {
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

router.get('/:event_id', (req, res) => {
  req.body.id = req.params.event_id;
  req.body.path = "get-event-by-id"
  kafka.make_request('events', req.body, (err, results) => {
    if(err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return res.status(404).json({errors:[{msg:'Event Not Found'}]});
    } else{
      res.status(results.status).send(JSON.parse(results.data));
    }
  });
});

router.get('/:companyName', (req, res) => {
  req.body.companyName = req.params.companyName;
  req.body.path = "get-event-by-companyName"
  kafka.make_request('events', req.body, (err, results) => {
    if(err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return res.status(404).json({errors:[{msg:'Event Not Found'}]});
    } else{
      res.status(200).send(JSON.parse(results.data));
    }
  });
});

router.post('/', (req, res) => {
  req.body.path = "post-event"
  kafka.make_request('events', req.body, (err, results) => {
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

router.put('/:event_id', (req, res) => {
  req.body.id = req.params.event_id;
  req.body.path="update-event-by-id"
  kafka.make_request('events', req.body, (err, results) => {
    if(err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return res.status(404).json({errors:[{msg:'Event Not Found'}]});
    } else {
      res.status(results.status).send(JSON.parse(results.data));
    }
  });
});


router.post('/registered/:student_id', (req, res) => {
  req.body.id = req.params.student_id;
  req.body.path = "post-register-for-event"
  kafka.make_request('events', req.body, (err, results) => {
    if(err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else{
      // console.log(res)
      res.status(results.status).send(JSON.parse(results.data));
    }
  });
});

module.exports = router;
