//Merge multiple strings with JSON
export default function modifyJSONWithArray(
  data: object,
  jsonAsArray: Array<string>
) {
  for (let i = 0; i < jsonAsArray.length; i++)
    data = modifyJSON(data, jsonAsArray[i]);
  return data;
}

//Merge data with JSON keeping the value of the string
function modifyJSON(data: any, jsonAsString: string) {
  let jsonAsObject: any = JSON.parse(parseTxt(jsonAsString));
  return { ...data, ...jsonAsObject }; //This line erase my first object instead of merging the two
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
