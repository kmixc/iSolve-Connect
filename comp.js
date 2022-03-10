const mongoose = require("mongoose");

const CompSchema = new mongoose.Schema({
    name:{
        type:String
    }
})



CompSchema.post('init', (doc) => {
    console.log('%s has been initialized from the db', doc._id);
})
CompSchema.post('validate', (doc) => {
    console.log('%s has been validated (but not saved yet)', doc._id);
})
CompSchema.post('save', (doc) => {
    console.log('%s has been saved', doc._id);
})
CompSchema.post('remove', (doc) => {
    console.log('%s has been removed', doc._id);
})

const Company = mongoose.model("Company", CompSchema)
module.exports = Company
