# notifications-ocr
This will use tesseract to OCR a directory full of iOS screenshots and export the text

# Requirements
[Node.js](https://nodejs.org/en/), [Imagemagick](http://www.imagemagick.org/), [csvkit](https://csvkit.readthedocs.io/en/1.0.1/), [python](https://www.python.org/), [Homebrew](https://brew.sh/) (On the Mac). `npm` should install all other dependencies.

# Usage

First make sure you have `Node.js` installed:
##### On the Mac
```brew install node```

##### On Windows
*TKTKTK*

Then install `in2csv` (Part of `csvkit`):
```sudo pip install csvkit```

Clone this repo, then `cd` into it in the Terminal.
Place your screenshots into the `screenshots` directory.
*NOTE:* This works best when the background wallpaper of the phone is dark, and solid.

Install the node dependencies.
```npm install```

To run the scripts:
```sh run_all.sh```

Your text will be saved in `all_text.csv`.
