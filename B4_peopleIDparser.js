function peopleIDparser(inputArr){
    var outputObj = {};
    var nameAgeArr = [];
    var namesArr = [];
    for(var i in inputArr){
        nameAgeArr = inputArr[i].split(",");
        namesArr = nameAgeArr[0].split(" ");
        outputObj[namesArr[0]] = {second_name : namesArr[1], age: 
           parseInt(nameAgeArr[1])};
    }

    return outputObj;
}



// example
var inputArr = ["Patrick wyne, 30",
                "lil wyne, 32",
                "Eric mimi, 21",
                "Dodos deck, 21",
                "Alian Dwine,     22",
                "Patrick wyne, 33",
                "Patrick wyne, 100",
                "Patrick wyne, 40"
            ];
var outputObj = peopleIDparser(inputArr);
console.log(outputObj);