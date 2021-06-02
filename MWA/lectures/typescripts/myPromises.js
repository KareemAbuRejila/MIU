const promise1=new Promise((resolve,reject)=>{
    let num=Math.random();
    setTimeout(()=>{
        if(num>5) resolve(num);
        else reject(num);
    },1000);
});



const promise2=new Promise((resolve,reject)=>{
    let num=Math.random()+0.5;
    setTimeout(()=>{
        if(num>5) resolve(num);
        else reject(num);
    },800);
});


const promise3=new Promise((resolve,reject)=>{
    let num=Math.random()-0.5;
    setTimeout(()=>{
        if(num>5) resolve(num);
        else reject(num);
    },1200);
});


async function myword(){
    console.log('start');
    await promise1.then(success).catch(err)
    await promise2.then(success).catch(err)
    console.log('end');

}
const success=(value)=>{
    console.log("Success:");
    console.log("Returned value:",value);
}
const err=(value)=>{
    console.log("Error:");
    console.log("Returned value:",value);
}

myword();

// promise1.then(success).catch(err);
// Promise.all([promise1,promise2,promise3]).then(success).catch(err);
// Promise.race([promise1,promise2,promise3]).then(success).catch(err);