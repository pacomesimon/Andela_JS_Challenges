function majority(inputArr){
    var inputSet = new Set(inputArr);
    var inputArrValues = [... inputSet];
    for (var i=0; i<inputArrValues.length; i++){
        var counter = 0;
        for (var j=0; j<inputArr.length; j++){
            if(inputArr[j]==inputArrValues[i]){
                counter++;
            }
        }
        if(counter > inputArr.length/2){
            console.log("   -the majority element: ",inputArrValues[i],
                        "\n   -occurences: ",counter,
                        "\n   -total array size: ", inputArr.length);
            return true;
        }
    }
    console.log("the input array has NO MAJORITY ELEMENT!");
    return false;
}

// example
var inputArr=[3,1,3,4,4,5,3,5,3,3,3,6,3];
majority(inputArr)