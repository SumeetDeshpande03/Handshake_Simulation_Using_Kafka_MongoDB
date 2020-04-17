const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka = require('../kafka/client');

router.post('/', async (request, response) => {
  request.body.path="company-signup"
  kafka.make_request('companyAuth', request.body, (err, results) => {
    if (err){
      console.log("Inside err");
      response.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    }else if(results.status==404){
      return response.status(201).json({errors:[{msg:'User with this email id already exists'}]});
    } else{
      response.status(200).send(JSON.parse(results.data));
    }
  });
})

module.exports = router;