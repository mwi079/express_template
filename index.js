const express=require('express')
const router=require('./routes')
const cors=require('cors')

const port=3000

// app.get('/',(req,res)=>{
//     res.send('Malcolm')
// })

const app=express()
app.use(cors())
app.use(express.json())
app.use(router)


app.listen(port,()=>{
    console.log(`Port:${port}`)
})