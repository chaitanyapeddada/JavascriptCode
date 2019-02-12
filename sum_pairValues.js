var sumValue = 6;
var arr = new Array(7,
    6,
    6,
    3,
    9,
    3,
    5,
    1,
    12);
var result = [];
console.log(arr);
for (var i = 0; i < arr.length-1; i++) {
    for (var j = i+1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sumValue) {
            var data = [arr[i] , arr[j]];
            // result.push(arr[i]);
            // result.push(arr[j]);
            result.push(data);
        }
    }
}
// result.push([5,1]);
var charMap ={};
var max = 1;
var count = 0;
for (let char of result) {
    if (charMap[char]) {
        console.log(charMap[char]);
        charMap[char]++;
    } else {
        charMap[char] = 1;
    }
}

for (let char in charMap) {
    // if (charMap[char] === max) {
    //    count++
    // }
    
}
console.log( count);