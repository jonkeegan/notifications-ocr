
var fs = require('fs');
var util = require("util");
var tesseract = require('node-tesseract');
var Exif = require("simple-exiftool");

// this is the path to the location of the screenshots
var directory = "screenshots/";

console.log("======================================\r");

fs.readdir(directory, function(err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }
    files.forEach(function(file, index) {

          var options = {
              // l: 'deu',
              // psm: 6,
              // binary: '/usr/local/bin/tesseract'
          };
          //  Recognize text of any language in any format
          tesseract.process(__dirname + "/screenshots/"+file, options, function(err, text) {
            Exif("screenshots/"+file, (error, metadata) => {
                if (error) {
                // handle error
                  console.log("error!: "+error);
              } else {
                console.log("^^^^^^ FILE: "+file+" "+metadata.DateCreated);
                console.log("======================================\r");
              }
            });

            if(err) {
                console.error(err);
            } else {
                console.log(text);

            }
          });


    });
}, function(error){ console.log(error)});
