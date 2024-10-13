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
  ThemeProvider,
} from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Clear any previous error message
    setErrorMessage('');

    try {
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Send email and password in the request body
        });

        const data = await response.json();

        if (response.ok) {
            // If login is successful, navigate to Home page
            alert('Login successful');
            navigate('/home'); // Navigate to /home after successful login
        } else {
            // If login failed, show error message
            setErrorMessage(data.message || 'Login failed. Please try again.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        setErrorMessage('An error occurred. Please try again later.');
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
          <Typography variant="h2">Sign In</Typography>
          <Typography sx={{ color: grey[700] }}>
            Welcome, please sign in to continue
          </Typography>
          {/* Display error message if present */}
          {errorMessage && (
            <Typography color="error" sx={{ marginTop: 2 }}>
              {errorMessage}
            </Typography>
          )}
          <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <FormGroup sx={{ width: '100%', gap: 2, marginTop: 2 }}>
              <Stack spacing={1}>
                <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
                />
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update state on change
                />
              </Stack>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Me"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </FormGroup>
          </Form>
          <Button
            variant="text"
            color="primary"
            sx={{ marginTop: 1 }}
            onClick={() => navigate('/register')}
          >
            Register for an account
          </Button>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
