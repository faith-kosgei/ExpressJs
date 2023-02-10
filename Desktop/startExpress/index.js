const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const member = require('./routes/api/members'); 

const app = express();
// Init middleware
// app.use(logger);


// set a static folder
app.use(express.static(path.join(__dirname, "public")));

// members API Routes
app.use('/api', member);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port${PORT}`));
