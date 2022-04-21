//child process is a node module which is inbuilt in nodejs , with this we can perform 
// many things ... like opening calculator 

const cp = require('child_process')

// cp.execSync('calc') //this command will open calculator 
// cp.execSync('start chrome https://www.youtube.com/') //this will open our youtube in chrome 

let output = cp.execSync('node text.js')
// console.log(output) // this will return kind of buffer which we dont want so need to convert this
// in string , so for this we will concate it with an empty string ...

console.log("" + output)