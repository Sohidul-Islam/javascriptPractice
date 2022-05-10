
//Convert Json To StringiFy
//Convert StringiFy To Json
const std = {
    name: "shufol",
    id: 123,
    dept: "CSE"
}

console.log("Json object ", std);

const StringiFy = JSON.stringify(std);
console.log("Json to stringify object: ", StringiFy);
const JsonObject = JSON.parse(StringiFy);
console.log("Stringify to Json object: ", JsonObject);