const express=require('express');
// const PORT = require("./")
const Router = require("./Routes/Router")
const app=express();
const cors = require("cors")
// const connect=require("./Database/Connection")
const body_parser = require("body-parser")
const path = require('path')

app.use("/Images",express.static("images"))


app.use(body_parser.json())

app.use(cors({
    origin:"*"
}))

app.use("/",Router)
app.get("/api",(req,res) => {
    res.send("iam an api")
    
})

app.listen(8080, async () => {
    console.log("server is running at port 8080")
    // await connect()
})


