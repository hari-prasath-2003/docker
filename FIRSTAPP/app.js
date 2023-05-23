const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const mongoose = require("mongoose")
const User = require("./modals/user")
app.use(bodyParser.urlencoded())
mongoose.connect("mongodb://dockertutorial-database-1:27017/db1")
app.get('/', (req, res) => res.sendFile(__dirname+"/index.html"))
app.get("/test", async (req, res) => {
    const response = await Book.find({})
    res.send(response)
})
app.post("/signup",async (req,res)=>{
    console.log(req.body);
    const user = new User({
        name:req.body.username,
        password:req.body.password
    })
    await user.save()
    res.json({name:user.name,pass:user.password})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))