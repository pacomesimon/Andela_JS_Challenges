function palindromeChecker(inputStr){
    var inputStrRv = "";
    for(var i=inputStr.length -1 ; i>=0; i--){
        inputStrRv += inputStr[i];
    }
    if(inputStrRv == inputStr){
        return true;
    }
    else{
        return false;
    }
}

// example

var inputStr = "madam";
var palChecker = palindromeChecker(inputStr);
console.log(palChecker);