// tokens.js
const colorTokens = {
    neutral: {
        _0: '#FFFFFF',
        _50: '#F6F6F6',
        _100: '#E7E7E7',
        _200: '#D1D1D1',
        _300: '#B0B0B0',
        _400: '#888888',
        _500: '#6D6D6D',
        _600: '#5D5D5D',
        _700: '#4F4F4F',
        _800: '#454545',
        _900: '#242424',
        _950: '#0C0C0C',
    },

    primary: {
        50: '#F4F6FB',
        100: '#E8ECF6F',
        200: '#CBD8EC',
        300: '#9DB7DC',
        400: '#6890C8',
        500: '#4573B2',
        600: '#335A96',
        700: '#2B4879',
        800: '#273E65',
        900: '#253655',
        950: '#090D15',
    },

    secondary: {
        50: '#F6F4FB',
        100: '#ECE8F6',
        200: '#D1CBEC',
        300: '#A89DDC',
        400: '#7868C8',
        500: '#5745B2',
        600: '#463396',
        700: '#3B2B79',
        800: '#342765',
        900: '#253655',
        950: '#302555',
    },
};



const typographyTokens = {
    text: {
        _xs: 'clamp(10.88px, calc(0.5rem + 2vw), 10.88px)',
        _sm: 'clamp(13.06px, calc(0.5rem + 2vw), 13.06px)',
        _md: 'clamp(15.67px, calc(0.5rem + 2vw), 15.67px)',
        _lg: 'clamp(16px, calc(0.5rem + 3vw), 17px)',
        _xl: 'clamp(18px, calc(0.5rem + 3vw), 22.56px)',
        _2xl: 'clamp(20.25px, calc(0.5rem + 3vw), 27.07px)',
        _3xl: 'clamp(22.78px, calc(0.5rem + 3vw), 32.49px)',
        _4xl: 'clamp(25.63px, calc(0.5rem + 3vw), 38.98px)',
        _5xl: 'clamp(28.83px, calc(0.5rem + 4vw), 46.78px)',
        _6xl: 'clamp(32.44px, calc(0.5rem + 4vw), 56.14px)',
        _7xl: 'clamp(36.49px, calc(0.5rem + 4vw), 67.35px)',
        _8xl: 'clamp(41.05px, calc(0.5rem + 5vw), 80.84px)',
        _9xl: 'clamp(51.05px, calc(0.5rem + 5vw), 125px)',
    },

    lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
    },
    letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
    },
};

// Combine both tokens
const tokens = {
    color: colorTokens,
    typography: typographyTokens,
};

export default tokens;