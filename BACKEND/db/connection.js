const mongoose= require("mongoose");

const connect = async (db) => {
    try {
      const result = await mongoose.connect(db);
      if (result) {
        console.log("Connected To Database");
      }
    } catch (error) {
      console.log(error, "Database Connection Failed");
    }
};

connect("mongodb+srv://hamzaatif08:lccsccit@cluster0.espxr0v.mongodb.net/Dispatcher?retryWrites=true&w=majority");

//  module.exports=connect();