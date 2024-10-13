// routes/register.js
const express = require('express');
const bcrypt = require('bcrypt'); // Make sure bcrypt is installed
const mysql = require('mysql'); // Make sure mysql is installed

const router = express.Router(); // Create a new router

// Database connection setup
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'users', // Your database name
});

// Register route
router.post('/', (req, res) => {
    const { email, password } = req.body; // Remove username from destructuring

    // Hash the password before storing it
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ message: 'Error hashing password' });
        }

        // Updated query without username
        const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
        db.query(query, [email, hash], (error, results) => {
            if (error) {
                return res.status(500).json({ message: 'Database error: ' + error });
            }
            res.status(201).json({ message: 'User registered successfully!' });
        });
    });
});

module.exports = router; // Export the router