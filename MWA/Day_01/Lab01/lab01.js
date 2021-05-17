const new_thread=require('child_process');

console.log('Before start the new task (new progress)');

const newOne=new_thread.spawn('node',['fibonacci.js'],{stdio:'inherit'});

console.log('it\'s After');