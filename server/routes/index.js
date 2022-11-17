const express=require('express');
const router=express.Router();
const {getDwarfs, postDwarf}=require('../controllers/dwarf.controller')

router.get('/',getDwarfs)
router.post('/addDwarf',postDwarf)

module.exports=router