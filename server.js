const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send('hello from github actions')
})

app.listen(3000, ()=>{
    console.log('server is runnning');
})