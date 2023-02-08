const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const members = require("./Members");


const app = express();



// Init middleware
// app.use(logger);

// gets all members
app.get("/api/members", (req, res) => res.json(members));

// get a single member
app.get("/api/members/:id", (req, res) => {
    res.json(members.filter(member => member.id === req.params.id))
});

// set a static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port${PORT}`));
