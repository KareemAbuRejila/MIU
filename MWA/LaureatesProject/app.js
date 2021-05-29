require('./api/data/db')
var bodyParser = require('body-parser');
const express=require('express');
const app=express();
const path=require('path');
const routes=require('./api/routes');
app.set('port',5996);

// create application/json parsern
let jsonParser = bodyParser.json()
app.use(jsonParser);

app.use(express.json({extened:false}));
app.use("/node_modules",express.static(path.join(__dirname,"node_modules")));
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',routes);

const server=app.listen(app.get('port'),()=>{
    const port=server.address().port;
    console.log(`Listening to port ${port}`);
    console.log(`go To http://127.0.0.1:${port}`);
})

