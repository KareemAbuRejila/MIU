const readFromDbById=(numberToInsert,callback)=>{
    console.log('Insert data into db....');
    const radepNumber=Math.random()*10;
    if(radepNumber>5){
        callback(null,radepNumber);
    }else{
        callback({err:"con't save"});
    }
}

const afterRead=(err,reult)=>{
    if(err)console.log(err);
    else console.log(result);
}

readFromDbById(7,afterRead);