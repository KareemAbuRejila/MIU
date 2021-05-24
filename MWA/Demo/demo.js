require('./api/data/db')
const express=require('express');
const app=express();
const router=require('./routes').router;

app.set('port',5000);

app.use((req,resp,next)=>{
    console.log("Request methid",req.method," request URL:",req.url);
    next()
})

app.use('/api',router);

const server=app.listen(app.get('port'),()=>{
    console.log("Listening to port",server.address().port);
})