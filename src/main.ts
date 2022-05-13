import modifyJSONWithArray from "./jsonModify"

let output: any = modifyJSONWithString("edit", "text");
console.log(output);

//Modify a JSON file with a string
//Takes two string as parameter :
// 1: Name of data file 
// 2: Name of modification file
function modifyJSONWithString(dataString: string, toModify: string) {
  //Load files
  const data = require("../data/" + dataString + ".json");
  const fs = require("fs");
  try {
    var dataToChange = fs.readFileSync("data/" + toModify + ".txt", "utf8");
  } catch (err) {
    console.error(err);
  }

  const dataToChangeArray = dataToChange.split(/\r?\n/); //Split string to an array of each line

  return modifyJSONWithArray(data, dataToChangeArray);
}
