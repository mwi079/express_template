const express=require('express');
const router=express.Router();
const {getDwarfs, postDwarf,deleteDwarf,voteDown,voteUp}=require('../controllers/dwarf.controller')

router.get('/',getDwarfs)

router.post('/addDwarf',postDwarf)

router.delete('/deleteDwarf',deleteDwarf)

router.put('/voteUp',voteUp);

router.put('/voteDown',voteDown);

module.exports=router