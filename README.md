# [Outhrive] Jaguar Karaoke Website #

For Fall 2020, Outhrive is working with Jaguar Karaoke to launch a new redesigned website.

Site: http://www.jaguarkaraoke.com/

## Tools ##

We will use the following tools:
* Figma
* HTML/CSS
* ReactJS

## Usage ##

To start, you will need to install node.js Follow instructions here: https://nodejs.org/en/ or https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm.

### Editing ###

To use the reactjs app, go into the "web" directory, then run `npm install && npm start`. `npm install` installs the packages and modules related to reactjs. `npm start` launches a localhost of the app.

### Publishing ###

To publish the app, run `npm run build` to generate a /build directory that will contain the necessary files for uploading it to our web host services. ZIP the contents of /build and then unzip it in the web hosting.

## Code Breakdown ##

### App.js ###

This is the main file of our react program. This is the immediate thing that is shown and we use this file to render other pages and components such as the header/footer and different paths.


<br/>

### App.css ###

This is where all of the project's CSS is stored. There are comments pertaining to each individual page and component. At the top, we added media queries to try to fit it in a mobile screen.


<br/>

### /components ###

This folder contains the JS files for the header, footer, and popup.

#### Header.jsx ####

This file uses the Router, Switch, and Link react packages to switch tabs and determine what page to render based on the current path. This also contains a function to switch CSS depending on the path you are on.

#### Footer.jsx ####

This contains the code for the footer which contains the iframes of the gofundme and fb links.

#### Popup.jsx ####

This component is for the popup message displayed on the home tab.


<br/>

### /pages ###

This folder contains all the JS files for the different tabs and pages possible. 

#### Home.jsx ####

Contains the two column design of locations of the left and introduction on the right.

#### About.jsx ####

#### Rooms.jsx ####

Contains a gallery slideshow view of the karaoke rooms.

#### Rent.jsx ####

Contains a google form to collect requests.

#### FAQ.jsx ####

#### Calendar.jsx ####

This path is currently inaccessible through button clicks as it is not necessary at the time of making this.
