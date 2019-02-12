// localStorage.setItem('test', 'Afsar');
// // console.log(document.getElementsByTagName('h1')[0].textContent, localStorage.getItem('test'));
// document.getElementsByTagName("h1")[0].innerHTML =
// localStorage.getItem('test');
// localStorage.removeItem("test");
'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }
// function main() {
//     const parameterVariable = readLine();
    
//     output(parameterVariable);
// }
// function output(out) {
//     console.log(out);
// }


function vowelsAndConsonants(s) {
    // console.log(typeof (s));
    let oldArray = s.toLowerCase().split('');
    let vowels = [];
    let consonats = [];
    let vowelsarray = ['a', 'e', 'i', 'o', 'u'];
    for (let i of oldArray) {
        if (vowelsarray.includes(i)) {
            vowels.push(i);
        } else {
            consonats.push(i);
        }
    }

    // console.log((vowels.concat(consonats).length));
    console.log(...vowels, ...consonats);
}


function main() {
    
    
    vowelsAndConsonants("javascriptloops");
}
main();