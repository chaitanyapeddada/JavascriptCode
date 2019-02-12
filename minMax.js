function miniMaxSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let except = i;
        let value = 0;
        let condition = 0;
        while (condition < arr.length) {
            if (condition != except) {
                value += arr[condition];
            }
            condition++;
        }
        result.push(value);
    }
    
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result.length - 1; j++) {
            if (result[j] > result[j + 1]) {
                var value = result[j];
                result[j] = result[j + 1];
                result[j + 1] = value;
            }
        }
    }
    console.log(result[0], result[result.length-1]);
}

function main() {
    
    miniMaxSum([1 ,2, 3 ,4, 5]);
}
main();