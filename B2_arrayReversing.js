function arrayRv(inputArr){
    var inputArrRv = [];
    for(var i=inputArr.length -1 ; i>=0; i--){
        inputArrRv.push(inputArr[i]);
    }
    return inputArrRv;
}

// example
var inputArr = [1,2,3,4,5];
var inputArrRv = arrayRv(inputArr);
console.log(inputArrRv);