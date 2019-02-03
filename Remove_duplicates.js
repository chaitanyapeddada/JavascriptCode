var arr = new Array();
arr = [1, 2, 5, 1, 7, 2, 4, 2];
console.log(arr);
var result = [];
for (var i =0 ;i<arr.length;i++) {
   if(!result.includes(arr[i])) {
       result.push(arr[i]);
   }
}
console.log(result);