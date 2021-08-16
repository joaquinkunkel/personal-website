import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const sansSerif = ['ObjectSans', 'system-ui', 'sans-serif'].join(',');
const serif = ['Libre Baskerville', 'ObjectSans', 'sans-serif'].join(',');

export const lightTheme = responsiveFontSizes(createTheme({
    palette: {
      type: 'light',
      text: {
        primary: 'rgba(25, 54, 34, 0.8)',
        secondary: '#DB2768',
        disabled: 'rgba(25, 54, 34, 0.55)',
      },
      primary: {
        main: 'rgba(25, 54, 34, 0.8)',
      },
      secondary: {
        main: '#DB2768',
      },
      background: {
        // default: '#000',
      },
    },

    shape: {
      borderRadius: 12,
    },

    typography: {
      fontSize: 14,
      fontFamily: sansSerif,
      h2: {
        fontFamily: serif,
        fontSize: 60,
      },
      h3: {
        fontWeight: 700,
        fontSize: 60,
      },
      h6: {
        fontFamily: serif,
        fontSize: 20,
      },
      body1: {
        fontFamily: serif,
      },
      body2: {
        fontFamily: serif,
      },
      subtitle1: {
        fontSize: 14,
        fontWeight: 700,
      },
      subtitle2: {
        fontFamily: serif,
      },
    },
    
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      }, 
    },

    props: {
      MuiButtonBase: {
        disableRipple: true,
        disableElevation: true,
      },
      MuiTypography: {
        color: 'textPrimary',
      },
    },
}));

export const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'dark',
    text: {
      primary: 'rgba(255, 255, 255, 0.6)',
      secondary: 'rgba(255, 255, 255, 0.85)',
      disabled: 'rgba(255, 255, 255, 0.3)',
    },
    primary: {
      main: 'rgba(255, 255, 255, 0.85)',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#0C1517',
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontSize: 14,
    fontFamily: sansSerif,
    h3: {
      fontWeight: 700,
      fontSize: 60,
    },
    h6: {
      fontFamily: serif,
      fontSize: 20,
    },
    body1: {
      fontFamily: serif,
    },
    body2: {
      fontFamily: serif,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: serif,
    },
  },
  
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
      },
      outlined: {
        
      },
    }, 
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableElevation: true,
    },
    MuiTypography: {
      color: 'textPrimary',
    },
  },
}));

export default lightTheme;
