

const promise=new Promise((res,rej)=>{
    const fibonacciFun=(number)=>{
        if(number<2){
            return number;
        }else{
            return fibonacciFun(number-1)+fibonacciFun(number-2);
        }
    };
    res('Fibonacci of 2 is '+ fibonacciFun(2));
})

const success=(value)=>{
    console.log('Success');
    console.log("Returned value: ",value);
}
const err=(err)=>{
    console.log('Failed');
    console.log("Returned value: ",err);
}
// console.log('start');
// promise.then(success).catch(err);
// console.log('end');




promise.then(success)
        .catch(err);

     


// console.log('Fibonacci of 45 is '+fibonacciFun(45));