const fibonacciFun=(number)=>{
    if(number<=2){
        return 1;
    }else{
        return fibonacciFun(number-1)+fibonacciFun(number-2);
    }
};

console.log('Fibonacci of 45 is '+fibonacciFun(45));