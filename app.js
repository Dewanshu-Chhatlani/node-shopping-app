const express = require("express");

// Establish DB Connection
require("./db/connect");

// Import all API routes
const routes = require("./routes/index");

const app = express();

// Get JSON Data from request body
app.use(express.json());
// Define API Routes
app.use("/api", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is now running on port: ${PORT}`));
