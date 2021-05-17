const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const linkRoute = require('./routes/linkRoute')
const path = require('path')

let db = mongoose.connection;

db.on("error", ()=>{
    console.log('houve um erro')
})

db.once('open', ()=>{
    console.log('banco carregado')
})

app.set("view engine", 'ejs')
app.set('views', path.join(__dirname, 'templates'))

mongoose.connect("mongodb://localhost/links", { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/',linkRoute)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})