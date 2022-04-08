const express = require('express');
const User = require('../user')
const app = express();
const router = express.Router();
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken');
//const { response } = require('express');

//Register User
router.route("/create").post((req,res) => {
   const email = req.body.email;
   const name = req.body.name;
   const password = req.body.password;
   const address = req.body.address;
   const occupation = req.body.occupation;

    const newComp = new User({
        email,
        name,
        password,
        address,
        occupation
    })

    newComp.save();
})

//List out Programmers
router.route("/users").get((req,res) => {
    User.find({occupation: 'I am Programmer'})
    .then(foundUser => {res.json(foundUser), console.log(foundUser)})
})

//List out Companies
router.route("/company").get((req,res) => {
    User.find({occupation: 'I am Company'})
        .then(foundUser => res.json(foundUser))
})

router.route('/profile').get((req,res) => {
    const token = req.headers['x-access-token']
    console.log(token)
    const decoded = jwt_decode(token,{complete: true})
    console.log(decoded.email)
    const email = decoded.email
    console.log(email)
    User.find({email: email})
        .then(foundUser => res.json(foundUser))
        return{status:'ok', user: token}
  
})

//Login
router.route("/userLogin").post((req,res) => {

    const user = User.find({
        email: req.body.email,
        password: req.body.password,
    }).then(foundUser => { 
            console.log(foundUser)
            if(!foundUser){            
                res.json(false)
                console.log('WRONG LOGIN')
            }else{
                foundUser.map(foundUser => {
                const token = jwt.sign({
                    name: foundUser.name,
                    email: foundUser.email
                }, 'secret')
                res.json({status: 'ok', user: token})
                console.log(token)
                })
            }
    })

    
})

router.route("/").get((req,res) => {

    
})




module.exports = router;