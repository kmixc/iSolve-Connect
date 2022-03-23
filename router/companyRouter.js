const express = require('express');
const compModel = require('../comp')
const app = express();
const router = express.Router();


router.route("/create").post((req,res) => {
    const name = req.body.name;
    const newComp = new compModel({
        name
    })

    newComp.save();
})



module.exports = router;