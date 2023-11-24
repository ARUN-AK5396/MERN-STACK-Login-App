const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./DataModel');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Users");

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("You have entered wrong password")
            }
        }
        else{
            res.json("No record exist")
        }
    })
})

app.post('/home',(req,res) => {
    const {email} = req.body;
    UserModel.findOne({email:email})
    .then(user => {
        if(user){
            res.json(user);
        }
        else{
            res.json("User not found")
        }
    })
    .catch(err => res.json(err));
})


app.post('/signup',(req,res) => {
    UserModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log("Server is running")
})