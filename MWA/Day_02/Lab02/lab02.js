const express=require('express');
const app=express();
const path=require('path');
app.set('port',5000);
const server=app.listen(app.get('port'),(req,resp)=>{
    console.log(`Listening on http://localhost:${server.address().port}`);
});

app.use(express.static(path.join(__dirname,'public')));


const router=require('./routing');
app.use('/games',router);