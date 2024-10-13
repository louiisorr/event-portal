import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, ThemeProvider } from '@mui/material';
import customTheme from '../theme/customTheme'; 

function FontPage() {
    const fontStyles = ['Arial', 'Helvetica', 'Times New Roman', 'Courier New', 'Verdana'];

    return (
        <ThemeProvider theme={customTheme}>
            <Container>
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Font Styles
                </Typography>
                <Grid container spacing={2}>
                    {fontStyles.map((fontStyle, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {fontStyle}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Example text in {fontStyle} font style.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default FontPage;