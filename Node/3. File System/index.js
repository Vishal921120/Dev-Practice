const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'text.html'), 'utf8', (err, data) => {
    if (err) {
      // Handle error - send a 500 Internal Server Error response
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      console.error(err);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });

//   fs.appendFile('random.txt', 'I love you krishna' , (err) => {
//     if (err) throw err;
//     console.log('saved');
//   })

//   fs.writeFile('random.txt', "i love ram also"  , () => console.log('updated'));

  fs.unlink('random.txt' , () => console.log("file deleted"))
});



const PORT = process.env.PORT || 9000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
