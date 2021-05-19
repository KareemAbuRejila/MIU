const bodyParser = require('body-parser');
const express=require('express');

const app=express();
const path=require('path');
app.set('port',5000);
const server=app.listen(app.get('port'),(req,resp)=>{
    console.log(`Listening Lab03 on http://localhost:${server.address().port}`);
});
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
const router=require('./routing');
// app.use('/',router);

