require('./api/data/db')
var bodyParser = require('body-parser');
const express=require('express');
const app=express();
const path=require('path');
const routes=require('./routes');
app.set('port',5000);

// create application/json parsern
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)
app.use(jsonParser);

app.use(express.static(path.join(__dirname,'public')));
app.use('/api',routes);

const server=app.listen(app.get('port'),()=>{
    const port=server.address().port;
    console.log(`Listening to port ${port}`);
    console.log(`go To http://127.0.0.1:${port}`);
})

