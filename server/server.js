const express = require('express')
const mongoose=require('mongoose')

const DB_URL='mongodb://localhost:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
    console.log('mongodb is ok')
})
const User=mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true},
}))
// User.create({
//     user:'imooc',
//     age:22
// },function (err,doc) {
//     if(!err){
//         console.log(doc)
//     }else {
//         console.log(err)
//     }
// })

// 新建APP
const app=express()

app.get('/',function (req,res) {
    res.send('<h1>Hello MongoDB</h1>')
})

app.get('/data',function (req,res) {
    User.find({},function (err,doc) {
        res.json(doc)
    })
})

app.listen(9093,function () {
    console.log('node app start at port 9093')
})