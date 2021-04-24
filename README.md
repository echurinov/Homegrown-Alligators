
# Welcome to the UF Space Systems Design Club Website Repository

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The project is hosted via heroku

Can be loacted at [http://ufssdc.herokuapp.com/](http://ufssdc.herokuapp.com/)

## Available Scripts 

### `npm run dev`

Runs the project in development mode.

Launches the backend server which connectes to the MongoDB database.

## Project editing Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Server is hosted via MongoDB and connected with [Axios](https://www.npmjs.com/package/axios).

### How to edit the Homepage Scrolling Banner images

The files that are stored for the scrolling banner images are hosted in '/client/src/components/Images'
Currently there are 4 images used for the banner. Stored in an object in '/client/src/components/ScrollerData.js'
'space1.png', 'space2.png', 'space3.png', 'space4.png'

Without editing the code the images can be changed by removing any of those 4 files and replacing them with files of the same name
Editing ScrollerData.js can be done to change the image files used and add more images to the scrolling banner. 

### Other homepage elements

The two homepage elements are stored in '/client/components/Images' as 'stock1.png' and 'stock2.png'
The can be replaced in the file '/client/Pages/home.js'

All homepage text can be replaced in '/client/Pages/home.js' as well
Update style changes on '/client/Pages/home.css'

### How to edit the About Us Page

Image is stored in '/client/components/Images' as "Gator Logo.png"
Image and text can be replaced in '/client/Pages/About.js'
All colors and other style changes can be made in '/client/Pages/About.css'

## How to edit the Members Page

Members can be added/removed via the admin portal member tool

All colors and other style changes can be made in '/client/Pages/members.css'

## How to edit the Projects Page

Projects can be added/removed via the admin portal project tool

Update style changes on '/client/Pages/projects.css'

## How to edit the Contact Us Page

Edit the contact information in '/client/Pages/Contact.js' by replacing the current contact information listed
The map location was created using [embedmaps.org](https://embedmaps.org/) and can be edited by creaing a new widget code and replacing the <iframe> section

Update style changes on '/client/Pages/Contact.css'

## How to edit the Calendar Page

Edit the calendar events via the admin portal calendar tool

Update style changes on 'client/src/Pages/calendar.css'
