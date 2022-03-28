function inplaceArrayRv(inputArr){
    for(var i=0; i<=Math.floor(inputArr.length/2-1); i++){
        inputArr[i] = [inputArr[inputArr.length-1-i],inputArr[i]];
        inputArr[inputArr.length-1-i] = inputArr[i][1];
        inputArr[i] = inputArr[i][0];
    }
    return inputArr;
}

// example
var inputArr = [1,2,3,4,5];
inplaceArrayRv(inputArr);
console.log(inputArr);