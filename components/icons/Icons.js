import { withTheme } from '@material-ui/core/styles';  
  // Icons:
  
export const EmailIcon = withTheme(({theme, color, customColor}) => {
  const mainColor = customColor ? color : theme.palette[color].main;
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="-0.5" y="0.5" width="19" height="13" rx="0.5" transform="matrix(-1 0 0 1 25 9)" stroke={mainColor}/>
      <path d="M15.8535 18.2929L25 9.14645L25.0606 10.5L16.5606 19C16.1701 19.3905 15.5369 19.3905 15.1464 19L6.54305 10.3966L6.70707 9.14645L15.8535 18.2929Z" fill={mainColor}/>
    </svg>
  );
});

EmailIcon.defaultProps = {
  color: 'primary',
  customColor: false,
};

export const WorldIcon = withTheme(({theme, color}) => {
  const mainColor = theme.palette[color].main;
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="9.5" stroke={mainColor}/>
      <path d="M20.5 16C20.5 18.7006 19.9516 21.1209 19.0883 22.8475C18.2101 24.604 17.0893 25.5 16 25.5C14.9107 25.5 13.7899 24.604 12.9117 22.8475C12.0484 21.1209 11.5 18.7006 11.5 16C11.5 13.2994 12.0484 10.8791 12.9117 9.15254C13.7899 7.39605 14.9107 6.5 16 6.5C17.0893 6.5 18.2101 7.39605 19.0883 9.15254C19.9516 10.8791 20.5 13.2994 20.5 16Z" stroke={mainColor}/>
      <path d="M16 13.5C18.7268 13.5 21.1761 13.8322 22.9274 14.3576C23.8062 14.6212 24.481 14.9252 24.9249 15.2401C25.3818 15.5642 25.5 15.8282 25.5 16C25.5 16.1718 25.3818 16.4358 24.9249 16.7599C24.481 17.0748 23.8062 17.3788 22.9274 17.6424C21.1761 18.1678 18.7268 18.5 16 18.5C13.2732 18.5 10.8239 18.1678 9.07261 17.6424C8.19378 17.3788 7.51902 17.0748 7.07512 16.7599C6.61823 16.4358 6.5 16.1718 6.5 16C6.5 15.8282 6.61823 15.5642 7.07512 15.2401C7.51902 14.9252 8.19378 14.6212 9.07261 14.3576C10.8239 13.8322 13.2732 13.5 16 13.5Z" stroke={mainColor}/>
      <line x1="16" y1="7" x2="16" y2="25" stroke={mainColor}/>
    </svg>
  );
});

WorldIcon.defaultProps = {
  color: 'primary',
};

export const Arrow = withTheme(({theme, color}) => {
  const mainColor = theme.palette.text[color];
  return (
    <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1716 8.03568L20.3536 4.8537C20.5488 4.65844 20.5488 4.34186 20.3536 4.1466L17.1716 0.964616C16.9763 0.769354 16.6597 0.769354 16.4645 0.964616C16.2692 1.15988 16.2692 1.47646 16.4645 1.67172L18.7929 4.00015L3.656e-07 4.00015L2.78178e-07 5.00015L18.7929 5.00015L16.4645 7.32858C16.2692 7.52384 16.2692 7.84042 16.4645 8.03568C16.6597 8.23095 16.9763 8.23095 17.1716 8.03568Z" fill={mainColor} />
    </svg>
  );
});

Arrow.defaultProps = {
  color: 'disabled',
};

export const ArrowTip = withTheme(({theme, color}) => {
  const mainColor = theme.palette.text[color];
  return (
    <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.853553 0.964318L4.03553 4.1463C4.2308 4.34156 4.2308 4.65814 4.03553 4.85341L0.853553 8.03539C0.658291 8.23065 0.341708 8.23065 0.146446 8.03539C-0.0488162 7.84012 -0.0488161 7.52354 0.146446 7.32828L2.47487 4.99985L3 4.5L2.47487 3.99985L0.146447 1.67142C-0.0488156 1.47616 -0.0488156 1.15958 0.146447 0.964318C0.341709 0.769056 0.658291 0.769056 0.853553 0.964318Z" fill={mainColor}/>
    </svg>
  );
});

ArrowTip.defaultProps = {
  color: 'disabled',
};

export const ArrowLine = withTheme(({theme, width, color}) => {
  const mainColor = theme.palette.text[color];
  return (
<svg width={width} height="9" viewBox="0 0 20 9" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 4L8.74228e-08 4L0 5L20 5L20 4Z" fill={mainColor} />
</svg>

    );
  });
  
ArrowLine.defaultProps = {
  color: 'disabled',
  width: '20',
};
