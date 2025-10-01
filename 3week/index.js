// const{odd,even} = require('./var');
// const checkNumber = require('./func');
// const os = require('os');
// const path = require('')

const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data)=>{
        console.log(data.toString());
    })
    .catch((err)=>{
        console.log(err)
    })

    fs.writeFile('./readme.txt','읽었습니다.')
    .then(()=>{
        return fs.readFile('./readme.txt')
    })
    .then((data) => {
        console.log(data.toString()); // 새로 쓴 내용을 읽어와 출력
    })
    .catch((err)=>{
        console.log(err)
    })

// function checkStringOddOrEven(str){
//     if(str.length % 2){
//         return odd;
//     }
//     return even;
// }

// console.log(checkNumber(10));
// console.log(checkStringOddOrEven('hello'));
