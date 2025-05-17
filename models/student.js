const mongoose = require("mongoose")

const StudentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll_number:{
        type:Number,
        required:true
    },
    standerd:{
        type:String,
        required:true
    },
    division:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("student",StudentSchema)