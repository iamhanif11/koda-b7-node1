const dateConversion = require("./minitask-1.js");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan tanggal :', (date) => {
    console.log(dateConversion(date))
    rl.close();
})