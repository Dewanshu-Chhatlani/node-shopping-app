const express = require("express");

require("./db/connect");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is now running on port: ${PORT}`));
