require('dotenv').config();

const express=require('express');
const app=express();
const Port =process.env.PORT||5000;
const route=require('./Routes/route')

app.use(express.json())


app.use('/api',route)

app.listen(Port,()=>{
    console.log(`Server is the running on the http://localHost:${Port}`)
})




