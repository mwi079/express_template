const express=require('express');
const router=express.Router();
const isAuthenticated=require('../middleware/authentication')
const {getDwarfs, postDwarf,deleteDwarf,voteDown,voteUp}=require('../controllers/dwarf.controller')

router.get('/',getDwarfs)

router.post('/addDwarf',isAuthenticated,postDwarf)

router.delete('/deleteDwarf',isAuthenticated,deleteDwarf)

router.put('/voteUp',voteUp);

router.put('/voteDown',voteDown);

module.exports=router