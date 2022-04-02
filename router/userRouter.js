const express = require('express');
const User = require('../user')
const app = express();
const router = express.Router();


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

router.route("/users").get((req,res) => {
    User.find({occupation: 'I am Programmer'})
        .then(foundUser => res.json(foundUser))
})

router.route("/company").get((req,res) => {
    User.find({occupation: 'I am Company'})
        .then(foundUser => res.json(foundUser))
})



module.exports = router;