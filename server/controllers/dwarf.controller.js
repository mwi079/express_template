const Dwarf=require('../model/schema')

const getDwarfs=async(_,res)=>{
    try{
        const dwarfs=await Dwarf.find();
        res.send(dwarfs)
    } catch (error){
        response.sendStatus(500)
    }
}

const postDwarf=async (req,res)=>{
    try{
        const dwarf=req.body
        const newDwarf=await Dwarf.create(dwarf)
        res.send(newDwarf)
    }
    catch{
        res.sendStatus(500)
    }
}

module.exports={getDwarfs,postDwarf}