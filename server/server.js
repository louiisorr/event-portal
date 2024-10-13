const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // Ensure you have mysql2 installed
const registerRoute = require('./routes/register'); // Adjust path if necessary
const loginRoute = require('./routes/login'); // Add this below the registration route import
const eventsRoute = require('./routes/events'); // Import the events route
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
}));

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1); // Exit if there's an error
    }
    console.log('Connected to MySQL');
});

// Make the db object available to routes
app.use((req, res, next) => {
    req.db = db; // Attach db connection to the request
    next(); // Move to the next middleware/route handler
});

// Routes
app.use('/api/register', registerRoute); // Use the registration route
app.use('/api/login', loginRoute); // Use the login route
app.use('/api/events', eventsRoute); // Add the events route

// Start the server
const PORT = process.env.PORT || 3001; // Use port from .env or default to 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
