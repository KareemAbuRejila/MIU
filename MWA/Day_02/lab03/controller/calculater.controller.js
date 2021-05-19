module.exports.getResult=(req,resp)=>{
    const fNumber=0;
    const lNumber=0;
    if(req.params.fNumber) fNumber=parseInt(req.params.fNumber,0);
    if(req.query.fNumber) lNumber=parseInt(req.query.lNumber,0);

    console.log(`Get Result ${fNumber},${lNumber}`);
    
}