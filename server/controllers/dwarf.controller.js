const Dwarf=require('../model/schema')

const getDwarfs=async(_,res)=>{
    try{
        const dwarfs=await Dwarf.find();
        res.send(displayDwarfs(dwarfs));
    } catch (error){
        console.log(error)
        res.sendStatus(500);
    }
}

const displayDwarfs=(dwarfs)=>{
    let result='<h2> Who is the best dwarf? </h2>'
    for(const dwarf of dwarfs){
        result+=`<p><b>${dwarf.name}</b> has a score of ${dwarf.score}, his id is ${dwarf._id}</p>`
    }
    return result;
}

const postDwarf=async (req,res)=>{
    try{
        const dwarf=req.body;
        dwarf.score=0;
        const newDwarf=await Dwarf.create(dwarf);
        res.send(newDwarf);
    } catch (error){
        res.status(500)
        res.send(error._message);
       
    }
}

const deleteDwarf= async (req,res)=> {
    try {
      const {name,_id}=req.body;
      await Dwarf.deleteOne({
        _id
      });
      res.send(`${name} has been deleted`);
    } catch (error) {
      console.log (error);
      res.sendStatus(500);
    }
  }

const voteDwarf =async (req,res,direction)=> {
    try {
      const {_id}=req.body;
      
      await Dwarf.findOneAndUpdate( 
        {
          _id
        }, 
        {
          $inc: {score:direction}
        }
      );
      res.sendStatus(200)
   
    } catch (error) {
      console.log(error)
      res.sendStatus(500);
    }
  }
  
const voteUp =async(req,res)=> {
    voteDwarf(req,res, 1);
}
  
const voteDown =async(req,res) =>{
    voteDwarf(req,res, -1);
}

module.exports={getDwarfs,postDwarf, deleteDwarf,voteUp,voteDown}