import { Box, Typography } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";

const Hero = withTheme(({theme}) => (
  <Box paddingTop={0}>
    <Typography
      variant="h2"
      color="textSecondary"
    >
      Hi. I'm&nbsp;
      <Typography variant="h2" component="span" color="textPrimary">
      {/* <span
        style={{color: theme.palette.secondary.main}}
      > */}
        Joaquín Kunkel
      </Typography>
      ,<br/>
      <span style={{whiteSpace: 'pre'}}>product designer</span> with an engineering background.
    </Typography>
    {/* <span style={{color: theme.palette.text.disabled}}><br/>(Or is it the other way around?)</span> */}
  </Box>
));

export default Hero;
