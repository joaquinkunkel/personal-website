import {
  AppBar,
  Toolbar,
  Container,
} from '@material-ui/core';

import {
  WorldIcon,
  EmailIcon,
  Arrow,
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
    <EmailButton
      simplified
      // text={!isMedium ? '' : 'j@joaquin.world'}
      icon={<EmailIcon />}
    />
  </Container>
</Toolbar>
</AppBar>
);

export default NavBar;
