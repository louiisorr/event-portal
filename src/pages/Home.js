import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Box, ThemeProvider, Card, CardContent } from '@mui/material';
import customTheme from '../theme/customTheme'; 
import { useNavigate } from 'react-router-dom';
import EventModal from '../components/EventModal';

function Home() {
    const navigate = useNavigate();
    const handleSignOut = () => {
        localStorage.removeItem('authToken'); 
        console.log('User signed out');
        navigate('/login');
    };

    // State to manage modal open/close and events
    const [openModal, setOpenModal] = useState(false);
    const [events, setEvents] = useState([]); // State for events

    // Function to open the modal
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // Function to add new event
    const addEvent = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
        handleCloseModal(); // Close the modal after adding the event
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Container sx={{ marginTop: 4, display: 'flex', justifyContent: 'center', maxWidth: 'lg' }}>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    margin={0}
                >
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        Welcome to the portal
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 2
                        }}
                    >
                        <Button variant="outlined" color="secondary" onClick={handleOpenModal}>
                            Create Event
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleSignOut}>
                            Sign Out
                        </Button>
                    </Box>
                </Box>
            </Container>

            <Container sx={{ paddingTop: 4, paddingBottom: 4, maxWidth: 'lg' }}>
                <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'space-between' }}>
                    {events.map((event, index) => ( // Map over the events state
                        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <CardContent sx={{ padding: 4 }}>
                                    <Typography variant="h6" component="h2">
                                        {event.event_name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" sx={{ marginTop: 2 }}>
                                        {new Date(event.event_date).toLocaleDateString()} {/* Format the date */}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event.event_location}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Render the EventModal conditionally based on openModal state */}
            <EventModal open={openModal} handleClose={handleCloseModal} addEvent={addEvent} /> {/* Pass the addEvent function */}
        </ThemeProvider>
    );
}

export default Home;
