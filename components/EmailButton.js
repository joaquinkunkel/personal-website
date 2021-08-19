import {
    IconButton,
    Button,
  } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';

const email = () => {
  // window.location.href = "mailto:j@joaquin.world";
  window.location.href = "mailto:j@joaquin.world";
};
  
// Main CTA Button
const EmailButton = withTheme(({theme, simplified, text, icon, variant, color}) => (
  <>
  {
    simplified
    ? (
      <IconButton
        size={'small'}
        // disableElevation
        onClick={email}
        color={color}
      >
        {icon}
      </IconButton>
    )
    : (
      <Button
        size={'medium'}
        disableElevation
        onClick={email}
        variant={variant}
        endIcon={icon}
        color={color}
      >
        {text}
      </Button>
    )
  }
  </>
));

EmailButton.defaultProps = {
  variant: 'text',
  color: 'primary',
};

export default EmailButton;
