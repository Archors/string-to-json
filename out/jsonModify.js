"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Merge multiple strings with JSON
function modifyJSONWithArray(data, jsonAsArray) {
    for (let i = 0; i < jsonAsArray.length; i++)
        data = modifyJSON(data, jsonAsArray[i]);
    return data;
}
exports.default = modifyJSONWithArray;
//Merge data with JSON keeping the value of the string
function modifyJSON(data, jsonAsString) {
    let jsonAsObject = JSON.parse(parseTxt(jsonAsString));
    console.log(data);
    return Object.assign(Object.assign({}, data), jsonAsObject); //This line erase my first object instead of merging the two
}
//Parse dot json to json
function parseTxt(txt) {
    while (txt.includes(".")) {
        txt = txt.replace(".", '": {"');
        txt += "}";
    }
    txt = "{" + txt + " }";
    return txt;
}
