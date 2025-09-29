const express =require("express");

const app=express();
const port=8080;

app.listen(port,()=>
{
    console.log(`app is listening at port${port}`)
})


app.get("/",(req,res)=>
{
    console.log("this is / page");
    res.json({
        success:true,
        message:"helo there",
        data:{}
    })
})