"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonModify_1 = require("./jsonModify");
let output = modifyJSONWithString("edit", "text");
console.log(output);
//Modify a JSON file with a string
//Takes two string as parameter :
// 1: Name of data file 
// 2: Name of modification file
function modifyJSONWithString(dataString, toModify) {
    const data = require("../data/" + dataString + ".json"); //Load JSON file
    //load txt file
    const fs = require("fs");
    try {
        var dataToChange = fs.readFileSync("data/" + toModify + ".txt", "utf8");
    }
    catch (err) {
        console.error(err);
    }
    const dataToChangeArray = dataToChange.split(/\r?\n/); //Split string to an array of each line
    return (0, jsonModify_1.default)(data, dataToChangeArray);
}
