import { createTheme } from '@mui/material/styles';
import '@fontsource/plus-jakarta-sans'; // Import the font
import tokens from './tokens';

const customTheme = createTheme({
    palette: {
        border: {
            main: '#e0e0e0',
            light: '#f5f5f5',
            dark: '#bdbdbd',
        },
    },


    


    typography: {
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontWeight: 500,

        h1: {
            fontSize: tokens.typography.text._6xl ,
            fontWeight: 700,
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        h2: {
            fontSize: tokens.typography.text._4xl ,
            fontWeight: 700,
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        h3: {
            fontSize: tokens.typography.text._4xl ,
            fontWeight: 700,
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        h4: {
            fontSize: tokens.typography.text._3xl ,
            fontWeight: 600,
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        h5: {
            fontSize: tokens.typography.text._2xl ,
            fontWeight: 600,
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        h6: {
            fontSize: tokens.typography.text._xl ,
            fontWeight: 600,
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        subtitle1: {
            fontSize: tokens.typography.text._lg ,
            fontWeight: 600,
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        subtitle2: {
            fontSize: tokens.typography.text._md ,
            fontWeight: 600,
            lineHeight: tokens.typography.lineHeight.tight,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        body1: {
            fontSize: tokens.typography.text._lg ,
            fontWeight: 400,
            lineHeight: tokens.typography.lineHeight.normal,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        body2: {
            fontSize: tokens.typography.text._md ,
            fontWeight: 400,
            lineHeight: tokens.typography.lineHeight.normal,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        button: {
            fontSize: tokens.typography.text._lg ,
            fontWeight: 500,
            lineHeight: tokens.typography.lineHeight.none,
            letterSpacing: tokens.typography.letterSpacing.tight,
            textTransform: 'none',
        },
        
        caption: {
            fontSize:tokens.typography.text._sm ,
            fontWeight: 400,
            lineHeight: tokens.typography.lineHeight.normal,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
        overline: {
            fontSize: tokens.typography.text._2xl ,
            fontWeight: 500,
            lineHeight: 2.66,
            letterSpacing: tokens.typography.letterSpacing.tight,
        },
    },


    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '16px 32px', // Customize padding here
                },
                sizeSmall: {
                    padding: '8px 16px', // Customize padding for small buttons
                },
                sizeMedium: {
                    padding: '16px 32px', // Customize padding for medium buttons
                },
                sizeLarge: {
                    padding: '24px 48px', // Customize padding for large buttons
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: '#000000',
                    backgroundColor: '#FFFFFF',
                    width: '100%',  
                },
            },
        },
    },
});


export default customTheme;
