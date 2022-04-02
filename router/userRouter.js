const express = require('express');
const User = require('../user')
const app = express();
const router = express.Router();


router.route("/create").post((req,res) => {
   const email = req.body.email;
   const password = req.body.password;
   const address = req.body.address;
   const occupation = req.body.occupation;

    const newComp = new User({
        email,
        password,
        address,
        occupation
    })

    newComp.save();

   
})



module.exports = router;