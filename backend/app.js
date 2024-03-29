// npm i install -D nodemon

// In backend
// npm i express body-parser cors mongoose validation config

// In server
// axios react-router-dom

const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const path = require("path");
const member = require("./routes/api/member");
const project = require("./routes/api/project");
const calendar = require("./routes/api/calendar");
const account = require("./routes/api/account");

const app = express();

// Connect Databases
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('Hello world!'));
app.use("/", express.static(path.join(__dirname, "../client/build")));

// use Routes
app.use("/api/member", member);
app.use("/api/project", project);
app.use("/api/calendar", calendar);
app.use("/api/account", account);

const port = process.env.PORT || 8082;
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
app.listen(port, () => console.log(`Server running on port ${port}`));
