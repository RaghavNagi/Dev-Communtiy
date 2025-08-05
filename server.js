const express  = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRouter")


const app = express();

async function connectDB(){
    await mongoose.connect(process.env.CONNECTION_URL).then(() =>{
    console.log("DATABASE connected");   
 })
}
const PORT = process.env.PORT || 4500;

app.use(express.json())

app.use(function(req,res,next){
    console.log("This is global app middleware");
    next()
})

// console.log(process.env);
app.get("/",(req,res) => {
    res.send({message: "This is dashboard"})
})

app.use("/api/user",userRoute)

async function dbConnect() {
  await mongoose.connect(process.env.CONNECTION_URL).then(() => {
    console.log("DB CONNECTED");
  });
}

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});