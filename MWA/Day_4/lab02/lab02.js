require('./api/data/db')
const express=require('express');
const app=express();
const path=require('path');
const routes=require('./routes');
app.set('port',5000);

app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
})
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',routes);

const server=app.listen(app.get('port'),()=>{
    const port=server.address().port;
    console.log(`Listening to port ${port}`);
    console.log(`go To http://127.0.0.1:${port}`);
})