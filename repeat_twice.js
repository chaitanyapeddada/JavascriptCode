// var a = [9];
var a = [9, 7, -1, -1, 5, -9, 7,11,23,11,5,-3,4,5];
// var a = [9, 7, 1, 1, 5, 9, 7,11,23,11,5,3,4,5];
//sorting array we can use in built function sort();
//console.log(a.sort());
// a.sort();
//selection sort
// var min;
// for(var i=0;i<a.length;i++) {
//     min = i;
//     for(var j =i;j<a.length;j++) {
//         if (a[min] > a[j]) {
//             min = j;
//         }
//     }
//     var value = a[min];
//     a[min] = a[i];
//     a[i] = value;
// }
// console.log(a);
//bubble sort
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length-1; j++) {
        if (a[j] > a[j+1]) {
            var value = a[j];
            a[j] = a[j+1];
            a[j+1] = value;
        }
    }
}
console.log(a);
var result = [];
for (var i = 0;i<a.length;i++) {
    if (a[i] === a[i+1]) {
        i = i+1;
    } else {
        result.push(a[i]);
    }
}

console.log(result);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        