const express=require('express');
const router=express.Router();
const {getDwarfs, postDwarf,deleteDwarf}=require('../controllers/dwarf.controller')

router.get('/',getDwarfs)

router.post('/addDwarf',postDwarf)

router.delete('/deleteDwarf',deleteDwarf)

module.exports=router