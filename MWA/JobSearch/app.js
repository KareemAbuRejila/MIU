require('./api/data/db');
const express=require('express');
const app=express();
const path=require('path');
const router=require('./api/route')
const bodyParser=require('body-parser');


app.set('port',5996);

app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules',express.static(path.join(__dirname,'node_modules')));
// app.use(express.static({}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',router);

const server=app.listen(app.get('port'),()=>{
    const port=server.address().port;
    console.log("Listening on http://localhost:"+port);
});