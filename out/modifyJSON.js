"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonModify_1 = require("./jsonModify");
let output = modifyJSONWithString("edit", "text");
console.log(output);
function modifyJSONWithString(dataString, toModify) {
    const data = require("../" + dataString + ".json"); //Load JSON file
    console.log(data);
    console.log(typeof data);
    //load txt file
    const fs = require("fs");
    try {
        var dataToChange = fs.readFileSync(toModify + ".txt", "utf8");
    }
    catch (err) {
        console.error(err);
    }
    const dataToChangeArray = dataToChange.split(/\r?\n/); //Split string to an array of each line
    return (0, jsonModify_1.default)(data, dataToChangeArray);
}
