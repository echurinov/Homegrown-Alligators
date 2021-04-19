// npm i install -D nodemon

// In backend
// npm i express body-parser cors mongoose validation config 

// In server
// axios react-router-dom


const express = require('express');
const connectMembersDB = require('./config/membersdb');
const connectCalendarDB = require('./config/calendardb');
const connectProjectsDB = require('./config/projectsdb');
var cors = require('cors');

const members = require('./routes/api/members');
const calendar = require('./routes/api/events');
const projects = require('./routes/api/projects');

const app = express();

// Connect Databases
connectMembersDB();
connectCalendarDB();
connectProjectsDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/members', members);
app.use('/api/projects', projects);
app.use('/api/events', calendar);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));