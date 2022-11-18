const mongoose = require ('./model.index')

const dwarfSchema= new mongoose.Schema(
    {
        name: {type:String,required:true},
        score:{type:Number,required:true}
    },
    {autocreate:true}
);

const Dwarf=mongoose.model('dwarf',dwarfSchema);

module.exports=Dwarf;
