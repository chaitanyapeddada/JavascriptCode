function modifyArray(nums) {
    let result = [];
    nums.forEach((el,index) => {
        console.log(index);
        if ((index+1) % 2 != 0) {
            el = el * 3;
        } else {
            el =el * 2;
        }
        result.push(el)
    });
    return result;
}

function main() {
    const re = modifyArray([14 ,25 ,36, 47 ,58, 69, 70, 81, 92]);
    // const s = readLine();
    
    console.log(re);
}
main();