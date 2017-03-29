// command-line-graphics by Jon Keegan
// this is some sample code created for my NICAR 2016 talk "Command Line Graphics"
// Twitter: @jonkeegan
// Github: https://github.com/jonkeegan
// Repo: https://github.com/jonkeegan/command-line-graphics
var fs = require('fs');
var util = require("util");
var directory = "crop_coords";

process_files();

function process_files() {
    // loop through all of the images...
    fs.readdir(directory, function(err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }
        // how many files do we have?
        var num_files = files.length;
      //  console.log("num_files: "+num_files)
        var this_list = files.forEach(function(file, index) {
            if (file != '.DS_Store' && file != '..' && file != '.') { // skip these files...
            //  console.log("file: "+file)
                // now load the matching json file

                //IMG_4451.PNG_crops.txt
                var file_basename = file.split("_crops.txt")[0];

                fs.readFile(directory+"/"+file, 'utf8', function(err, data) { // Read each file
                    if (err) {
                        console.log("cannot read the file, something goes wrong with the file", err);
                    }

                //    console.log("FILE: "+file+" data: "+data)

                    var split_data = data.split("\n");
                //  console.log("---------- "+split_data.length+" lines found!");
                if(split_data.length > 1){

                  for(var i = 0; i< split_data.length-1; i++){

                    var this_line_split = split_data[i].split(" ");
                    //IMG_4446.PNG_crops.txt
                    var original_file = file.split("_crops.txt")[0];
                    //console.log("LINE # "+i+" "+this_line_split[3]);

                    // check to see if it is large enough to report
                    var this_width = this_line_split[3].split("x")[0];
                    var this_height = this_line_split[3].split("x")[1].split("+")[0];
                    //    console.log("width: "+this_width+" height: "+this_height+" "+original_file);
                         if(this_width >= 700 && this_height >= 70 && this_height < 800){
                            console.log("convert -crop "+this_line_split[3]+" cropped/"+original_file+" crops/"+file_basename+"_"+i+".png");
                        }
                  }
                }


                    if (index == num_files - 1) { // when we get to the end...

                    }
                })




            }
        });
    });
}
