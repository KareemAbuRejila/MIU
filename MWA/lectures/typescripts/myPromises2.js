const mySecondPomiseFactory=()=>{
    return new Promise(resolve=> setTimeout(()=>resolve("Done 3"),3000));
}
const mySecondPomiseFactory2=()=>{

    return new Promise(resolve=> setTimeout(()=>resolve("Done 1"),1000));
}

// const result1=mySecondPomiseFactory();
// console.log(result1);
// const result2=mySecondPomiseFactory2();
// console.log(result2);

async function asyncFunc(){
    console.log('start Funcation');
    const result1=await mySecondPomiseFactory();
console.log(result1);
const result2=await mySecondPomiseFactory2();
console.log(result2);
console.log('end Funcation');
}

console.log('App Start');
asyncFunc();
console.log('App end');
