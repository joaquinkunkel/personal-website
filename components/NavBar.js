import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Link,
} from '@material-ui/core';
import {
  EmailIcon,
} from './icons/Icons';

import EmailButton from './EmailButton';

const NavBar = () => (
<AppBar
  position="static"
  elevation={0}
  color="transparent"
>
<Toolbar>
  <Container maxWidth="lg" style={{display: 'flex', justifyContent: 'flex-end'}}>
    <Box display="flex" alignItems="center">
    <EmailButton
      simplified
      // text={!isMedium ? '' : 'j@joaquin.world'}
      icon={<EmailIcon />}
    />
    <Box marginLeft={2}>
      <Link underline="never" href="/">
        Work
      </Link>
    </Box>
    <Box marginLeft={2}>
      <Link underline="never" href="/about">
        About
      </Link>
    </Box>
    </Box>
  </Container>
</Toolbar>
</AppBar>
);

export default NavBar;
