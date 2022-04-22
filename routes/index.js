const express=require('express');
const router=express.Router();
const {dummy}=require('../controllers/dummy.controller')

router.get('/',dummy)

module.exports=router