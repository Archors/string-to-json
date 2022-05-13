import mergeDeep from "./mergeDeep";

//Merge multiple strings with JSON
export default function modifyJSONWithArray(
  data: object,
  jsonAsArray: Array<string>
) {
  for (let json of jsonAsArray) data = modifyJSON(data, json);
  return data;
}

//Merge data with JSON keeping the value of the string
function modifyJSON(data: object, jsonAsString: string) {
  return mergeDeep(data, JSON.parse(parseTxt(jsonAsString)));
}

//Parse dot json to json
function parseTxt(txt: string) {
  while (txt.includes(".")) {
    txt = txt.replace(".", '": {"');
    txt += "}";
  }
  txt = "{" + txt + " }";
  return txt;
}
