const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system");

const express = require("express");
const app = express();

//for user routes
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

//for admin routes
const adminRoute = require('./routes/adminRoute');
app.use('/admin',adminRoute);

// const sampleRoute = require('./routes/adminRoute')
// app.use('/sample',adminRoute);

app.listen(3000, function(){
    console.log("Server is running...");
});