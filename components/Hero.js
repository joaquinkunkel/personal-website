import { Box, Typography } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";

const Hero = withTheme(({theme}) => (
  <Box paddingTop={0}>
    <Typography
      variant="h3"
    >
      Hi. I'm&nbsp;
      <span
        style={{color: theme.palette.secondary.main}}
      >
        Joaquín Kunkel
      </span>
      ,<br/>
      <span style={{whiteSpace: 'pre'}}>product designer</span> with an engineering background.
    </Typography>
  </Box>
));

export default Hero;
