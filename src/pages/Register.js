import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import customTheme from '../theme/customTheme';
import { grey } from '@mui/material/colors';
import {
    Container,
    TextField,
    Typography,
    FormControlLabel,
    FormGroup,
    Checkbox,
    Button,
    Stack,
    ThemeProvider
} from '@mui/material';

function Register() {
    const navigate = useNavigate();

    // States for the form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Submitting form with data:", { email, password });

    if (!termsChecked) {
        alert('Please agree to the terms and conditions');
        return;
    }

    // API call to register the user
    try {
        const response = await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log("Response from server:", data); // Log server response

        if (response.ok) {
            alert('Registration successful');
            navigate('/login'); // Navigate to login page after success
        } else {
            alert(`Registration failed: ${data.message}`);
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert('Something went wrong. Please try again later.');
    }
};
    

    return (
        <ThemeProvider theme={customTheme}>
            <Container
                maxWidth="xs"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Stack
                    sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        border: 1,
                        borderColor: grey[300],
                        padding: 8,
                        gap: 1,
                    }}
                >
                    <Typography variant="h2">Register</Typography>
                    <Typography sx={{ color: grey[700] }}>
                        Welcome, please register for an account
                    </Typography>
                    
                    {/* Updated Form */}
                    <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
                        <FormGroup sx={{ width: '100%', gap: 2, marginTop: 2 }}>
                            <Stack spacing={2}>
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    variant="outlined"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Update email state
                                />
                                <TextField
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Update password state
                                />
                            </Stack>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={termsChecked}
                                        onChange={(e) => setTermsChecked(e.target.checked)} // Handle terms checkbox
                                    />
                                }
                                label="I agree to the terms and conditions"
                            />
                            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 1 }}>
                                Register
                            </Button>
                        </FormGroup>
                    </Form>

                    <Button
                        variant="text"
                        color="primary"
                        sx={{ marginTop: 1 }}
                        onClick={() => navigate('/login')}
                    >
                        Already have an account? Sign In
                    </Button>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}

export default Register;
