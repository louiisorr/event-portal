import React from 'react';
import { Modal, Box, Typography, Button, TextField, FormGroup, Stack } from '@mui/material';
import { Form } from 'react-router-dom';


const EventModal = ({ open, handleClose, addEvent }) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventLocation = document.getElementById('event-location').value;

        // Send POST request to the server
        fetch('http://localhost:3001/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event_name: eventName,
                event_date: eventDate,
                event_location: eventLocation,
                user_id: 1 // Replace with dynamic user ID logic if needed
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Event created:', data);
            addEvent(data); // Call addEvent to add the new event to the Home component
            handleClose(); // Close the modal after submission
        })
        .catch((error) => {
            console.error('Error creating event:', error);
        });
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                }}
            >
                <Typography variant="h4" component="h2">
                    Create New Event
                </Typography>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Stack spacing={2}>
                            <TextField
                                id="event-name"
                                label="Event Name"
                                variant="outlined"
                                required
                            />
                            <TextField
                                id="event-date"
                                label="Event Date"
                                type="date"
                                variant="outlined"
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="event-location"
                                label="Event Location"
                                variant="outlined"
                                required
                            />
                        </Stack>
                    </FormGroup>
                    <Stack direction="row" spacing={2} sx={{ marginTop: 4 }}>
                        <Button variant="contained" color="primary" type="submit">
                            Create Event
                        </Button>
                        <Button variant="outlined" onClick={handleClose}>
                            Close
                        </Button>
                    </Stack>
                </Form>
            </Box>
        </Modal>
    );
};

export default EventModal;