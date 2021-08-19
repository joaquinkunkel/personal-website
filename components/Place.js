import { withTheme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const Place = withTheme(({theme, text, innerRef, strikeThrough, highlight, subtitle, style}) => (
  <Box
    ref={innerRef}
    paddingY={1}
    style={style}
  >
    <Typography
      variant="subtitle1"
      noWrap
      style={{textDecoration: strikeThrough && 'line-through', color: highlight && theme.palette.secondary.main}}
    >
      {text}
    </Typography>
    {
      subtitle
    }
  </Box>
));

export default Place;
