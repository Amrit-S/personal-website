# Personal Website - Amrit Kaur Singh

I decided to make my personal website 'from scratch' using ReactJS, opting out from tools like Wix because 1) I wanted full creative control
over my representation and 2) I wanted to try my hand out in making a website from the ground up by myself. 

The website itself acts as an interactive resume for my technical skillset, providing an in-depth overview of my work history and projects. I've also included a printable resume that gives a condensed version of my more significant work. 

This repository contains all source code for this project, and contains primarily front-end related work that is located 
inside of the 'src' directory, where it is further split up into sub folders based off functionality. Tech stack is mostly ReactJS, with a bit of backend Express for hosting purposes (backend serves frontend). All Express related work can be found under 'server.js'. 

### Production

During production, the Express backend hosts the React frontend, pushing all domain requests not taken care of by
the Express routes to the frontend's index.html located at `\public\index.html`. Website itself is hosted using
Heroku on a custom domain.

### Acknowledgements

Any of the non-personal project related images are not mine, but rather photos under the Creative Commons license that I am using,
most notably from Unsplash (see [https://unsplash.com/license](license)). 

The butterfly animation I would like to give credit to these CodePen authors [https://codepen.io/Thumper/pen/RxGrwM](Thumper) and [https://codepen.io/Katrine-Marie/pen/MYZNOG](Katrine-Marie Burmeister) for their code. 

I also want to credit Pascal van Gemert as I used his website outline and style as a creative starting point to mold my own. His 
website is linked [http://www.pascalvangemert.nl/#/profile](here) for reference. 

## Dependencies

### Node Installation

Dependencies you'll need:

- Node 14+
- NPM 6+

Node.js can be downloaded from here: https://nodejs.org/en/

_Note_: Downloading Node will automatically download NPM for you.

To verify Node installation, you can do:

`node -v`

To verify NPM installation, you can do:

`npm -v`

If you find your NPM version is out of date, you can install the latest version using:

`npm install npm@latest -g`

### Running Frontend (Locally)

While in the `root` directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3006](http://localhost:3006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
