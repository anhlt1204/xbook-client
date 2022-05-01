import { createTheme } from '@mui/material/styles';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';

const DefaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00E5FF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#51BF29',
    },
    error: {
      main: '#F04F5B',
    },
    success: {
      main: '#28CE7E',
    },
    black: {
      main: '#000000',
      10: '#202225',
      20: '#303339',
    },
    white: {
      main: '#FFFFFF',
      10: '#D1D1D1',
      20: '#B8B8B8',
    },
    neutral: {
      main: '#171A23',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            size: 'large',
          },
          style: {
            padding: '14px 183px',
            height: '52px',
          },
        },
        {
          props: {
            size: 'medium',
          },
          style: {
            padding: '16px 67px',
            height: '52px',
          },
        },
        {
          props: {
            size: 'small',
          },
          style: {
            padding: '8px 37.5px',
            height: '36px',
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: ['"primus"', 'sans-serif'].join(','),
    h1: {
      fontSize: '54px',
      lineHeight: '65.83px',
    },
    h2: {
      fontSize: '40px',
      lineHeight: '48.76px',
    },
    h3: {
      fontSize: '32px',
      lineHeight: '39px',
    },
    h4: {
      fontSize: '20px',
      lineHeight: '24.38px',
    },
    h5: {
      fontSize: '14px',
      lineHeight: '21px',
    },
    h6: {
      fontSize: '12px',
      lineHeight: '14.63px',
    },
    subtitle1: {
      fontSize: '16px',
      lineHeight: '19.5px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '16px',
      lineHeight: '19.5px',
      fontWeight: 500,
    },
    body2: {
      fontSize: '16px',
      lineHeight: '19.5px',
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

interface Shade extends SimplePaletteColorOptions {
  10: string;
  20: string;
}

interface Neutral {
  [key: string]: string;
}

interface ThemeCustomColors {
  black?: true;
}

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
    white: Palette['primary'];
    neutral: Neutral;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    black?: Shade;
    white?: Shade;
    neutral?: Neutral;
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides extends ThemeCustomColors {}
}
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides extends ThemeCustomColors {}
}
declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides extends ThemeCustomColors {}
}
declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides extends ThemeCustomColors {}
}
declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides extends ThemeCustomColors {}
}

export default DefaultTheme;
