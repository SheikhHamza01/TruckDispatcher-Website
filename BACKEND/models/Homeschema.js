const mongoose=require("mongoose");

const homeSchema= new mongoose.Schema({
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
    },
    truck:{
        type:Number,
        // required:true
    },
    options:{
        type:String,
        // required:true
    },
    income:{
        type:Number,
        // required:true
    },
    average:{
        type:Number,
    }
    
})

const Home=new mongoose.model("Home",homeSchema);
module.exports=Home;