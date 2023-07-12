const mongoose=require("mongoose");

const ServiceSchema= new mongoose.Schema({
    firstname:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true,
        // unique:true
    },
    phone:{
        type:Number,
        // required:true
    }
})

const Service=new mongoose.model("Service",ServiceSchema);
module.exports=Service;

