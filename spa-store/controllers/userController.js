const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

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


router.post('/api/login', (req,res) =>{
   let name = req.body.username;
   console.log(name);
   
   newUser.findOne({username: name}).exec().then(user =>{
      console.log(user);

      if (user.length < 1) {
         console.log("User is Invalid");

         return res.status(403).json({
            message: 'Auth Failed'
         });
      }
      console.log(req.body.password);
      console.log(user.password);
      bcrypt.compare(req.body.password, user.password, (err, result) =>{
         console.log("Started comparing passwords");
         if (err) {
            return res.status(403).json({
               message: 'Auth failed'
            });
         }
         if (result) {
            const token = jwt.sign({
               email: user.email,
               manID: user.manager_U_id,
               uID: user.user_U_id,
               type: user.type,
               username: user.username
            }, process.env.JWT_Key,
               //define the options
               {
                  expiresIn: "4h"
               }
            );
            console.log("token created");
            return res.status(200).json({
               message: 'Auth successful',
               token: token,
               authTok: user.manager_U_id,
               userType: user.type,
               userId: user.user_U_id
            });
            // window.location('/home');
         }

      });
   }).catch(err => {
      console.log(err.result);
   });
});

//Route to logout.
router.post('/logout', function (req, res) {
   res.json({});
});



module.exports = router;