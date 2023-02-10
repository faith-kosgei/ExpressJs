const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");



const app = express();



// Init middleware
// app.use(logger);


// set a static folder
app.use(express.static(path.join(__dirname, "public")));

// members API Routes
app.use('app/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port${PORT}`));
