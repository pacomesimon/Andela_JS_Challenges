function sortinputArrD(inputArr){
    var inputArrLen = inputArr.length;
    var i = 0;
    while(i<inputArrLen){
        if(checkPrime(inputArr[i])){
            inputArr.splice(i,1);
            inputArrLen = inputArr.length;
            continue;
        }
        i++;
        
    }

    var sortingDone = false;
    while (!sortingDone) {
        sortingDone = true;
        for (var i = 1; i < inputArr.length; i += 1) {
            if (inputArr[i-1] < inputArr[i]) {
                sortingDone = false;
                var anomaly = inputArr[i-1];
                inputArr[i-1] = inputArr[i];
                inputArr[i] = anomaly;
            }
        }
    }


    function checkPrime(inputNum){
        if(inputNum < 1){return false;}
        if(inputNum == 1 || inputNum == 2) { return true;}
        for(var i=2; i<inputNum; i++){
            if(inputNum%i==0){ return false;}
        }
        return true;
    }
    
    return inputArr;
}


// example
var inputArr = [1,2,3,4,5,6,7,8,9,10,11];
sortinputArrD(inputArr);
console.log(inputArr);