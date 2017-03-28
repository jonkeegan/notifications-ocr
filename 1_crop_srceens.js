
var fs = require('fs');
var util = require("util");
var tesseract = require('node-tesseract');
var Exif = require("simple-exiftool");

// this is the path to the location of the screenshots
var directory = "screenshots/";

//console.log("======================================\r");

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
// convert screenshots/IMG_4451.PNG -black-threshold 40% -white-threshold 60% -morphology dilate octagon  -define connected-components:area-threshold=500 -define connected-components:verbose=true -connected-components 8 PNG8:lumps.png
// -gravity north -crop 750x1138+0+134 +repage
//console.log("convert screenshots/"+file+" -black-threshold 40% -white-threshold 60% -gravity north -crop 750x1138+0+134 +repage -morphology dilate octagon -define connected-components:area-threshold=500 -define connected-components:verbose=true -connected-components 8 -auto-level null | sed '/^Objects/d' > crop_coords/"+file+"_crops.txt");

console.log("convert screenshots/"+file+" -black-threshold 40% -white-threshold 60% -crop 750x1138+0+134 -gravity north +repage cropped/"+file);


//console.log("convert screenshots/"+file+" -black-threshold 40% -white-threshold 60% -morphology dilate octagon -define connected-components:area-threshold=500 -define connected-components:verbose=true -connected-components 8 -auto-level null | sed '/^Objects/d' > crop_coords/"+file+"_crops.txt");

    });
}, function(error){ console.log(error)});
