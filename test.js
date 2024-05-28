const express = require('express');
let app=express();
let sql=require('mysql');


let con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sampledb'
})

con.connect((err)=>{
    if(err) throw err;
    console.log("Database connected")
})

app.get('/students', (req,res)=>{
  con.query(`select * from student`,(err,data)=>{
    console.log(data)
        res.status(200).send(JSON.stringify(data))
    }
    )
}).listen(8000)