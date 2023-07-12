const express = require("express");
const router = express.Router();

const Service = require("../models/ServiceSchema");
//Router to create new member
router.post("/adddata", async (req, res) => {
  try {
    let {firstname,email,phone}=req.body;
    if(!firstname||!email||!phone){
        return res.json({message:"Empty fields"});
    }
    

    var user = new Service({
        firstname: firstname,
        email: email,
        phone: phone,
    })
    
    // const newmember = new Contact({
    //   firstname: firstname,
    //   email: email,
    //   phone: phone,
    // });
    const result = await user.save();
    
    res.status(200).json({msg:"Your response submitted"});

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
