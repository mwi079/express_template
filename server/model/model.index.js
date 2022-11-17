const mongoose = require('mongoose');
const db_url='mongodb://localhost:27017/demo';

mongoose.connect(db_url,()=>console.log('connected to db server'),{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

module.exports=mongoose;