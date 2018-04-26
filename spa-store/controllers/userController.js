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
   if(!name || !req.body.password){
      res.json({
         success: false,
         message:"Username and password required",
         data:{}
      });
      return;
   }
   console.log('attempting login. username: ', name);
   newUser.findOne({username: name}).exec().then((user,err) =>{
      console.log(user);
      if(err){
         res.status(204);
         res.json({
            success:false,
            message:"Error occured while checking if user exists",
            data:{
               'error':err
            }
         });
      }      
      if (user) { 
         bcrypt.compare(req.body.password, user.password, (isMatch, err)=>{
            console.log("compare password");
            if(err){
               console.log("error: ",err);
               res.json({
                  success:false,
                  message:"Error occured while checking if the user exists",
                  data:{
                     "error": err
                  }
               });
               return;
            }
            if(isMatch){
               var token = jwt.sign({
                  "id": user._id,
                  "email":user.email
               },
               config.jwt.secret,{
                  expiresIn: 1440*1260*3600 //expires in 24 hr
               });
               console.log("Token is created");
               res.json({
                  "token":token,
                  "token_for":req.body.username
               });
            }
            else{
               console.log("did not go to token creation");
               res.status(204);
               res.json({
                  "message":"Incorrect password"
               });
            }
         });      
      }else{
         res.status(200);
         res.json({
            "message":"No username found"
         });
      }     
   });  
}); 

//Route to logout.
router.post('/logout', function (req, res) {
   res.json({});
});



module.exports = router;