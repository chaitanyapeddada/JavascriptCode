var sumValue = 6;
var arr = new Array(2, 3, 4, 5, 6, 7, 1);
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
console.log(result);