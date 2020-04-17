const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka = require('../kafka/client');

router.post('/', async (request, response) => {
  request.body.path = "student-login";
  kafka.make_request('studentAuth', request.body, (err, results) => {
    if (err){
      console.log("Inside err");
      response.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return response.status(201).json({errors:[{msg:'Invalid Credentials'}]});
    } else {
      response.status(200).send(JSON.parse(results.data));
    }
  });
});

module.exports = router;