require("./db/connection"); 
const cors = require("cors");
const express = require ("express");

const port =process.env.PORT || 5000;

const HomeRoute=require("./router/Home");
const ServiceRoute=require("./router/Service");


const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      credentials: true,
    })
  );
//ROUTES
app.use("/Home",HomeRoute);
app.use("/Service",ServiceRoute);



app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})