 function Calculator() {
     let sum = (x, y) => { return x + y };
     let substract = (x, y) => { return x - y };
     let multiply = (x, y) => { return x * y };
     let divide = (x, y) => { return x / y };
 }

 let myCal = new Calculator;
 console.log(myCal.sum(2, 3));