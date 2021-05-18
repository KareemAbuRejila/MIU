const express=require("express");
const app=express();
app.set('port',5000);
const server=app.listen(app.get('port'),(req,resp)=>{
    const currentPort=server.address().port;
    console.log("The Server is Started");
    console.log(`Server Start Lisenting in ${currentPort} ....`);
    console.log(`Go to http://127.0.0.1:${currentPort}`);
});

app.get('/',(req,resp)=>{

    console.log('First Log it\'s Received');
    resp.status(404).send("First Recive with 404");
    resp.status(200).send("First Recive with 200");
});




