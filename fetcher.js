// it should take two command line arguments
// arr 1 = url, arr 2 = path
const arguments = process.argv.slice(2);
//  use Node's fs (file system) module
const fs = require("fs");
// use the request library to make the HTTP request
const request = require("request");

// making HTTP request with arguments using request library
request(arguments[0], (error, response, body) => {
  // writing Node file - fs.writeFile() API.
  fs.writeFile(arguments[1], body, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(
      `Downloaded and saved ${body.length} bytes to ${arguments[1]}.`
    );
  });
});
