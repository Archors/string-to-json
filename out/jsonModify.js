"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeDeep_1 = require("./mergeDeep");
//Merge multiple strings with JSON
function modifyJSONWithArray(data, jsonAsArray) {
    for (let json of jsonAsArray)
        data = modifyJSON(data, json);
    return data;
}
exports.default = modifyJSONWithArray;
//Merge data with JSON keeping the value of the string
function modifyJSON(data, jsonAsString) {
    return (0, mergeDeep_1.default)(data, JSON.parse(parseTxt(jsonAsString)));
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
