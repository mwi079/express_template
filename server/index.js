const express=require('express')
const router=require('./routes')
const port=3000
const app=express()

app.use(express.json())
app.use(router)

// app.get('/',(_,res)=>{
//     res.send({name:'Hello Malcolm'})
// })

const server=app.listen(port,()=>{
    console.log(`Port:${port}`)
})

module.exports= server