#!/bin/bash
# By @jonkeegan
# These scripts will take a directory full of iOS screenshots of notifications, and OCR them, and export a corresponding CSV of each notification panel with text, and a crop of each panel.
 
# first generate the imagemagick commands to crop the iOS screenshots to eliminate the header and footer
node 1_crop_srceens.js > crop_screens.sh

# run these crop commands
sh crop_screens.sh

# generate the imagemagick commands to identify the blobs in the cropped screenshots, and return their coordinates
node 2_split_test.js > crop_coords.sh

# execute these commands and save out the coordinates in text files
sh crop_coords.sh

# generate the imagemagick commands to actually crop each blob from the screenshots
node im_pass_2.js > part_2_im.sh

# execute these commands
sh part_2_im.sh

# run the node script that performs tesseract OCR on each cropped notification, export JSON of the data
node notification-ocr.js

# convert the JSON to a CSV for convenience
in2csv crops/all_text.json > all_text.csv
