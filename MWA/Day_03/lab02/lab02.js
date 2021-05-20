console.log('Server Started');

const express=require('express');
const app=express();
const path=require('path');
const route=require('./routes');
require('./data/dbConnection.js').open();
app.set('port',5000);
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);
const server=app.listen(app.get('port'),()=>{
    const port=server.address().port;
    console.log(`Listening to port ${port}`);
    console.log(`go To http://127.0.0.1:${port}`);
})