const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka = require('../kafka/client');

router.get('/:company_id', (req, res) => {
  req.body.path="get-company-profile"
  req.body.id=req.params.company_id
  kafka.make_request('companyProfile', req.body, (err, results) => {
    if (err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return res.status(404).json({errors:[{msg:'Company Not Found'}]});
    } else{
      res.status(200).send(JSON.parse(results.data));
    } 
  });
});

router.put('/:company_id', (req, res) => {
  req.body.path="Update-company-profile"
  req.body.id=req.params.company_id
  kafka.make_request('companyProfile', req.body, (err, results) => {
    if (err){
      console.log("Inside err");
      res.json({
          status:"error",
          msg:"System Error, Try Again."
      })
    } else if(results.status==404){
      return res.status(404).json({errors:[{msg:'Company Not Found'}]});
    } else{
      res.status(200).send(JSON.parse(results.data));
    }
  });
});

module.exports = router;