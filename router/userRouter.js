const express = require('express');
const User = require('../user')
const app = express();
const router = express.Router();
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
    .then(foundUser => res.json(foundUser))
})

//List out Companies
router.route("/company").get((req,res) => {
    User.find({occupation: 'I am Company'})
        .then(foundUser => res.json(foundUser))
})

//Login
router.route("/userLogin").post((req,res) => {

    const user = User.findOne({
        email: req.body.email,
        password: req.body.password,
    }, function(err, result) {
        console.log(!!result)
        console.log(!result)

        if(!result){            
            res.send(false)
        }else{
            const token = jwt.sign({
                name: user.name,
                email: user.email
            }, 'secret')
            res.json({status: 'ok', user: token})
        }
        
    })
    
})

router.route("/").get((req,res) => {

    
})




module.exports = router;