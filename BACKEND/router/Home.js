const express = require("express");
const router = express.Router();

const Home = require("../models/Homeschema");

//Router to create new member
router.post("/adddata", async (req, res) => {
  try {
    console.log(req.body);
    // var firstname: req.body.firstname;
    // var truck: req.body.truck;
    // var options: req.body.options;
    // var email: req.body.email;
    // var income: req.body.income;
    // var phone: req.body.phone;
    // var average: req.body.average;
    // const newmember = new Contact({
    //   firstname: firstname,
    //   truck: truck,
    //   email: email,
    //   phone: phone,
    //   options: options,
    //   income: income,
    //   average: average,
    // });
    let { firstname, truck, options, email, income, phone, average } = req.body;
    if (
      !firstname ||
      !email ||
      !phone ||
      !truck ||
      !options ||
      !income ||
      !average
    ) {
      return res.json({ message: "Empty fields" });
    }
    // let member_firstname = req.body.firstname;
    // let member_truck = req.body.truck;
    // let member_options = req.body.options;
    // let member_email = req.body.email;
    // let member_income = req.body.income;
    // let member_phone = req.body.phone;
    // let member_average = req.body.average;

    let user = new Home({
      firstname: firstname,
      truck: truck,
      options: options,
      email: email,
      income: income,
      phone: phone,
      average: average,
    });
    const result = await user.save();
    // res.send("Your Response Has been submitted");
    res.status(200).json({msg:"Your response submitted"});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
