const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const newUser = require('../models/users');

router.post('/api/register', (req,res)=>{
   console.log(req.body);
   console.log(req.body.name);
   bcrypt.genSalt(6, (err,salt)=>{
      if(err){
         return res.status(500).json({
            error:err
         });
      }else{
         bcrypt.hash(req.body.password, salt, null, (err,hash) =>{
            console.log("Bcrypt has hashed the password");
            
            if(err){
               return res.status(500).json({
                  error:err                  
               });
            }else{
               const newReg = new newUser({
                  name: req.body.name,
                  username: req.body.username,
                  email: req.body.email,
                  password: hash
               });

               newReg.save().then(result =>{
                  console.log(result);
                  res.status(201).json({
                     message: "Handling POST request to /register. New User created",
                     createdUser: newReg
                  });
               }).catch(err =>{
                  console.log(err);
                  res.status(500).json({
                     error: err
                  });
               });
            }
         });
      }
   });
});

module.exports = router;