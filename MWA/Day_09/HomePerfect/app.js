require('./api/db/db')
const express=require('express');
const app=express();
const path=require('path');
const route=require('./api/routes');
const bodyParser=require('body-parser');

const jsonPaser=bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(jsonPaser);
app.use(urlencodedParser);

app.set('port',5996);
app.use(express.json({extened:false}));
app.use("/node_modules",express.static(path.join(__dirname,"node_modules")));
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);

const server=app.listen(app.get('port'),()=>{
    const port=server.address().port;
    console.log(`Listening on port: ${port}`);
    console.log(`Go to http://127.0.0.1:${port}`);
})