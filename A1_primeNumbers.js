function primeNumbersFilter(inputArr){
    var outputArr=[];
    for(var i in inputArr){
        if(checkPrime(inputArr[i])){
            outputArr.push(inputArr[i]);
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

    return outputArr;
}

// example:
var exampleArr = [1,2,3,41,51,61,7,83,9,10];
var filteredArr = primeNumbersFilter(exampleArr);
console.log(filteredArr);