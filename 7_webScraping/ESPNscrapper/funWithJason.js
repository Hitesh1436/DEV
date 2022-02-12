const fs = require("fs");

const xlsx = require('xlsx');

// let buffer = fs.readFileSync("./example.json");

// //console.log(buffer)

// let data = JSON.parse(buffer);
// This methods is used to covert buffer or any type of  data to json



let jsonFile = require('./example.json') // requiring JSON File
//console.log(data)

jsonFile.push({
  Name: "Thor",
  "Last Name": "Odinson",
  isAvenger: true,
  Friends: ["Tony", "Peter", "Bruce"],
  Age: 102,
  Address: {
    planet: "Asgard",
  },
});

// pushing a new object into JSON File

//console.log(data)

let stringData = JSON.stringify(jsonFile);
// converting json data into string so that we can write it in other files

//console.log(stringData)

fs.writeFileSync("example.json", stringData);

// writing to json file

console.log("JSON file Updated");


// json file ko excel mn kia hai
let newWB = xlsx.utils.book_new(); // creating a new workbook
let newWS = xlsx.utils.json_to_sheet(jsonFile);  // json is converted to sheet format (rows and columns)
xlsx.utils.book_append_sheet(newWB, newWS, 'Avengers');
xlsx.writeFile(newWB, 'abc.xlsx');

// excel ko json mn
let wb = xlsx.readFile('abc.xlsx');
let excelData = wb.Sheets['Avengers'];
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans)
