// routes/login.js
const express = require('express');
const bcrypt = require('bcrypt'); // To compare hashed passwords
const router = express.Router(); // Create a new router
const mysql = require('mysql'); // Make sure mysql is installed

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'users', // Your database name
});

// Login route
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists in the database
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database error: ' + error });
        }

        if (results.length === 0) {
            // If no user is found
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];

        // Compare the provided password with the hashed password in the database
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return res.status(500).json({ message: 'Error comparing passwords' });
            }

            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Password matches, successful login
            res.status(200).json({ 
                message: 'Login successful', 
                userId: user.id // Include user ID in the response
            });
        });
    });
});

module.exports = router;
