import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const sansSerif = ['ObjectSans', 'system-ui', 'sans-serif'].join(',');
const serif = ['Cirka', 'ObjectSans', 'sans-serif'].join(',');

const theme = createTheme({
    palette: {
      text: {
        primary: '#246636',
        secondary: '#DB2768',
        disabled: 'rgba(25, 54, 34, 0.5)',
      },
      primary: {
        main: '#246636',
      },
      secondary: {
        main: '#DB2768',
      },
      background: {
        paper: 'rgba(219, 39, 104, 0.1)',
      },
    },

    shape: {
      borderRadius: 12,
    },

    typography: {
      fontSize: 16,
      allVariants: {
        color: '#246636',
      },
      fontFamily: sansSerif,
      h3: {
        fontWeight: 700,
        fontSize: 60,
      },
      h6: {
        fontFamily: serif,
        fontSize: 24,
      },
      body1: {
        fontFamily: serif,
      },
      body2: {
        fontFamily: serif,
        fontWeight: 600,
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
        text: {
          textTransform: 'none',
          fontWeight: 700,
        },
      }, 
    },

    props: {
      MuiButtonBase: {
        disableRipple: true,
        disableElevation: true,
      },
    },
});

export default responsiveFontSizes(theme);
