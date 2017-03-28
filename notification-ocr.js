var fs = require('fs');
var util = require("util");
var tesseract = require('node-tesseract');
var Exif = require("simple-exiftool");

// this is the path to the location of the screenshots
var directory = "crops/";

console.log("======================================\r");
var all_text = [];

fs.readdir(directory, function(err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    var counter = 0;
    files.forEach(function(file, index) {

        var options = {
            // l: 'deu',
            // psm: 6,
            // binary: '/usr/local/bin/tesseract'
        };
        //  Recognize text of any language in any format
        tesseract.process(__dirname + "/" + directory + file, options, function(err, text) {

            var base_file = file.split(".PNG")[0];
            var file_index = file.split("PNG_")[1];
            // EXIF metadata extraction

            //  end EXIF section

            if (err) {
                console.error(err);
            } else {
                //  console.log(text);

                Exif("screenshots/" + base_file + ".PNG", (error, metadata) => {
                    if (error) {
                        // handle error
                        //  console.log("error!: "+error);
                    } else {
                        //  console.log("^^^^^^ FILE: "+file+" "+metadata.DateCreated);
                        //  console.log("======================================\r");


                        var this_object = {};
                        this_object.master = base_file;
                        this_object.filename = base_file+".PNG_"+file_index;
                        this_object.text = text.trim();
                        this_object.timestamp = metadata.DateCreated;
                        this_object.index = file_index;
                        all_text.push(this_object);

                        //  console.log(this_object);
                        //    console.log("counter: "+counter+" INDEX: "+index+" files.length: "+files.length);
                        counter++;
                        if (counter == files.length - 2) {
                            //console.log(JSON.stringify(all_text));
                            fs.writeFile("crops/all_text.json", JSON.stringify(all_text));
                        }
                    }
                });



            }
        });



    });
}, function(error) {
    console.log(error)
});
