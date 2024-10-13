const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'users',
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Create a new event
router.post('/', (req, res) => {
    const { event_name, event_date, event_location, user_id } = req.body;
    const query = 'INSERT INTO events (event_name, event_date, event_location, user_id) VALUES (?, ?, ?, ?)';
    
    db.query(query, [event_name, event_date, event_location, user_id], (err, result) => {
        if (err) {
            console.error('Database error:', err); // Log error to console
            return res.status(500).json({ error: err.message });
        }
        console.log('Inserted event with ID:', result.insertId); // Log successful insert
        res.status(201).json({ id: result.insertId, event_name, event_date, event_location });
    });
});



// Get all events
router.get('/', (req, res) => {
    const query = 'SELECT * FROM events';
    
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

// Update an event by ID
router.put('/:id', (req, res) => {
    const { id } = req.params; // Ensure this is being passed in the URL
    const { event_name, event_date, event_location } = req.body;

    const query = 'UPDATE events SET event_name = ?, event_date = ?, event_location = ? WHERE id = ?';
    
    db.query(query, [event_name, event_date, event_location, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json({ message: 'Event updated successfully' });
    });
});

// Delete an event by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params; // Ensure this is being passed in the URL
    const query = 'DELETE FROM events WHERE id = ?';
    
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    });
});

module.exports = router;
