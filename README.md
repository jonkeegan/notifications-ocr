# notifications-ocr
This will use tesseract to OCR a directory full of iOS screenshots and export the text

#Usage
First make sure youhave Nodejs installed
```brew install node```

Clone this repo, then cd into it. Place your screenshots into the `screenshots` directory.

Install the node dependencies.
```npm install```

To run the script:

```node  notification-ocr.js | sed '/DeprecationWarning/d' > output.txt```

Your text will be saved in `outout.txt`
