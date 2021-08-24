import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';
import {
  EmailIcon,
} from './icons/Icons';
import styled from 'styled-components';

import { withTheme } from '@material-ui/core/styles';

import EmailButton from './EmailButton';


const NavBar = withTheme(({theme, fixed}) => {
  const StyledLink = styled.a`
    color: ${theme.palette.text.primary};
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: 0.2s all;
    &:hover {
      background: ${theme.palette.action.hover};
    }
  `;

  return (
    <AppBar
      position={fixed ? 'sticky' : 'static'}
      elevation={0}
      color="white"
      style={{
        borderBottom: fixed && `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.paper,
        backdropFilter: 'blur(30px)',
      }}
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
          <Typography variant="subtitle1">
            <Link underline="never" href="/">
              <StyledLink>Work</StyledLink>
            </Link>
          </Typography>
        </Box>
        <Box marginLeft={2}>
          <Typography variant="subtitle1">
            <Link underline="never" href="/about">
              <StyledLink>About</StyledLink>
            </Link>
          </Typography>
        </Box>
        </Box>
      </Container>
    </Toolbar>
    </AppBar>
  );
});

NavBar.defaultProps = {
  fixed: false,
};

export default NavBar;
