let express= require('express');
const router=require('./route.js')
const bodyParser = require('body-parser');
let app=express();

app.use(bodyParser.json())
app.use(router)
app.listen(8000)
