// file system module

const fs = require('fs')

// let content = fs.readFileSync('file1.txt') // readFileSync is used to read
// console.log('THIS is the content of file1 ->' + content)

// let newTxtFile = fs.writeFileSync('file3.txt','doctored by writeFileSync')
// writeFileSync will create new file3.txt automatic and write the content which is after the colon
// console.log('New content' + newTxtFile)

// fs.appendFileSync('file2.txt', 'doctored by appendfile') 
// this will go to file2 and update the content by appending the text after colon

// fs.unlinkSync('file1.txt') // this will delete the file corresponding to the path given

// creating directory  
// fs.mkdirSync("myDirectory") 
//deleting directory
// fs.rmdirSync("myDirectory")

//this will give true if file exist in the directory otherwise false
// let doesExist = fs.existsSync('file2.txt')
// console.log(doesExist)



// let statOfFile = fs.lstatSync("file2.txt") // for getting stats or details of any file
// console.log(statOfFile)

// console.log('isfile?' + statOfFile.isFile()) //returns boolean , true if it is file otherwise false
// console.log('isfile?' + statOfFile.isDirectory()) // true if it is folder/directory

let filePath = 'C:\\Users\\visha\\Desktop\\clone\\practice' // in path use double backward slash
let dirContent = fs.readdirSync(filePath) // gives details of folder/directory like file names etc
console.log(dirContent)