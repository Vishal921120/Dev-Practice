const path = require('path')
const fs = require('fs')

// let srcfilePath = 'C:\\Users\\visha\\Desktop\\clone\\practice\\myDir1\\txt.txt'
// let destFolder = 'C:\\Users\\visha\\Desktop\\clone\\practice\\mydir2'

// let fileToBeCopied = path.basename(srcfilePath) //basename gives actual file name like txt.txt
// console.log(fileName)

// let destPath = path.join(destFolder,fileToBeCopied)
// console.log(destPath)

// fs.copyFileSync(srcfilePath,destPath)

// ============================================================================== //

console.log(__dirname) // gives current folder path or directory path in which you are working
console.log(__filename) // gives current file path in which you are working

let fileExtension = path.extname('C:\\Users\\visha\\Desktop\\clone\\practice\\fs.js')
console.log(fileExtension) // will give .js as the output as a file extension


