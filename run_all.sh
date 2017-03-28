node 1_crop_srceens.js > crop_screens.sh
sh crop_screens.sh
node 2_split_test.js > crop_coords.sh
sh crop_coords.sh
node im_pass_2.js > part_2_im.sh
sh part_2_im.sh
in2csv crops/all_text.json > all_text.csv
