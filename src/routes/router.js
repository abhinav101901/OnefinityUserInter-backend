const express=require('express');
const { signUp } = require('../controllers/User/singup')
const router=express.Router();
// user section

// user regestration
router.post('/signup',signUp)

module.exports=router;