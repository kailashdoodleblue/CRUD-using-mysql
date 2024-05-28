let sql=require('mysql');


con=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sampledb'
})

con.connect((err)=>{
    if(err) throw err;
    console.log("Database connected")
})

module.exports=con


