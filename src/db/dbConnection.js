const mongoose = require("mongoose");

module.exports.dbConnection = function(){
    mongoose.set("strictQuery",true);
    mongoose.connect('mongodb+srv://abhinav:abhi123@cluster0.qicwtqo.mongodb.net/onefinity',{useNewUrlParser:true})
    .then(()=>console.log("mongo db is connected 🟢"))
    .catch((err)=>console.log("connection error with mongoDB: ", err.message)
    );
};