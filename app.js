// const amount = 15
// if (10>amount) {
// console.log("small  number");
// }
// else {
//     console.log("big number");
// }
// const john = "john"
// const vishal = "vishal"
   
//     module.exports = {john, vishal};

// const os = require('os');

// const user = os.userInfo();
// console.log(user);
// // method for getting uptime
// console.log(`${os.uptime}`)

// const method = {
//     name : os.type(),
//     release : os.release(),
//     totalmem : os.totalmem(),
//     freemem : os.freemem()
// };

// console.log(method);

// const path = require('path');

// console.log(path.sep);

// const filename = path.join('/content/','subfolder','name.txt');
// console.log(filename);

// const base = path.basename(filename);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content','subfolder','name.txt');
// console.log(absolute);

// const {readFileSync,writeFileSync} = require('fs');
// console.log("start");
// const first = readFileSync('./content/first.txt', 'utf-8');

// const second = readFileSync('./content/second.txt', 'utf-8');

// // console.log(first , second);

// writeFileSync('./content/result.txt',`here's what inside ${first} ${second}`,{flag : 'a'});
// const result = readFileSync('./content/result.txt', 'utf-8');
// console.log(result);
// console.log("finished the task");
// const {readFile, writeFile} = require ('fs');
// console.log('start');
// readFile('./content/first.txt','utf-8',(error,result) => {
//     if(error) {
//         console.log(error);
//       return
//     }
//     const first = result;
//     readFile('./content/second.txt','utf-8',(error,result) => {
//         if(error) {
//             console.log(error);
//           return
//         }
//         const second = result;
//         writeFile('./content/result_async.txt',`hello ${first} and ${second}`,(error,result) => {
//             if(error) {
//                 console.log(error);
//               return
//             }
//             console.log(result);
//         console.log('finish');
//         });
//     });
// });

// console.log('next');

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if (req.url === '/') {
//         res.end('welcome to our home page')
//     }
//     if (req.url === '/about') {
//         res.end("here a short history")
//     }

// res.end(`
// <h1>wrong page<h1>
// <a href="/">back home</a>
// `)
// })
// server.listen(8000)

console.log("hello there");


