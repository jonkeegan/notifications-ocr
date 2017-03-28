# notifications-ocr
This will use tesseract to OCR a directory full of iOS screenshots and export the text

#Requirements
`Node.js` and `inc2csv`

#Usage
First make sure you have Node.js installed
```brew install node```

Then install `in2csv`

```sudo pip install csvkit```

Clone this repo, then cd into it. Place your screenshots into the `screenshots` directory.

Install the node dependencies.
```npm install```

To run the script:

```node  notification-ocr.js | sed '/DeprecationWarning/d' > output.txt```

Your text will be saved in `outout.txt`
