const fs = require('fs');
const convertToCsv = require('json-2-csv');

convert = (jsonData) => {

    if(!jsonData) throw "No json data !";

    // convert JSON array to CSV string
    convertToCsv.json2csv(jsonData, (err, csv) => {

        if (err) {
            throw err;
        }

        // print CSV string
        console.log(csv);

        // write CSV to a file
        fs.writeFileSync('./assets/csv-files/todos.csv', csv);

    });

}

convertFromFile = (jsonFile) => {

    if(!jsonFile) throw "No json data !";

    // convert JSON array to CSV string
    convertToCsv.json2csv(jsonFile, (err, csv) => {

        if (err) {
            throw err;
        }

        // print CSV string
        console.log(csv);

        // write CSV to a file
        fs.writeFileSync('./assets/csv-files/todos.csv', csv);

    });

}


module.exports = convert, convertFromFile;