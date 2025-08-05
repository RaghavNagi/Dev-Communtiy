const express = require("express");
const {registerUser} = require("../controllers/userController")
const router = express.Router();

router.use(function(req,res,next){
    console.log("This is router user middleware");
    next();
})

router.post("/register",registerUser)





module.export = router;