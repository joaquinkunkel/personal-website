import Head from 'next/head'
import { useState, useRef, Children, useLayoutEffect, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useWindowSize from '@rooks/use-window-size';
import useScrollPosition from '@react-hook/window-scroll';
import { AppBar, Toolbar, IconButton, Box, Button, Divider, Grid, Link, Paper, Tab, Tabs, Typography, Container, useMediaQuery, recomposeColor } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../src/theme';
import { withTheme } from '@material-ui/core/styles';

const email = () => {
  window.location.href = "mailto:j@joaquin.world";
};

const Home = withTheme(({theme}) => {
  const scrollY = useScrollPosition(60);
  const showNav = scrollY > 200;
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isSmall = useMediaQuery('(max-width: 600px)');
  const isMedium = useMediaQuery('(min-width: 900px)');

  return (
    <>
      <Head key={0}>
        <link
          rel="preload"
          href="/fonts/ObjectSans-Heavy.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/ObjectSans-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/ObjectSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Cirka-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Cirka-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Cirka-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <AppBar
        position="static"
        elevation={0}
        // position="fixed"
        color="transparent"
        style={{
          // boxShadow: `0 1px 0 ${theme.palette.divider}`,
          // background: theme.palette.background.default,
        }}
      >
        <Toolbar>
          <Container maxWidth="sm" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <EmailButton simplified={!isMedium} text={!isMedium ? '' : 'j@joaquin.world'} icon={<EmailIcon />}/>
          </Container>
        </Toolbar>
      </AppBar>
        <Grid container spacing={5} style={{paddingTop: '8vh', width: '100%'}}>
          <Block>
            <Hero /> {/* Welcome to the world... */}
          </Block>
          <Block>
            <ValueProp /> {/* I empower... */}
          </Block>
          <Block />
          <Block
            // maxWidth="xl"
          >
            <Callout
              icon={<WorldIcon />}
              content={
                <Box paddingLeft={1}>
                  <Places orientation={isSmall ? 'vertical' : 'horizontal'} />
                </Box>
              }
              />
          </Block>
          <Block>
            <Bio />
          </Block>
          <Block>
            <Callout
              content={
                <EmailButton
                  variant="outlined"
                  text="j@joaquin.world"
                  icon={<EmailIcon />}
                />}
              caption="Let’s chat about design, eng, music, art, or life."
            />
          </Block>
        </Grid>
    </>
  );
});

const Muted = withTheme(({theme, color, children}) => (
  <Typography
    component="span"
    variant="inherit"
    style={{color: theme.palette.text.disabled}}
  >
    {children}
  </Typography>
));

const Hero = withTheme(({theme}) => (
  <Box paddingTop={5}>
    <Typography
      variant="h3"
      // style={{textShadow: `0 0 200px ${theme.palette.text.secondary}`}}
    >
      <Muted>
        Hi, I'm&nbsp;
      </Muted>
      <span
        style={{color: theme.palette.text.secondary}}
      >
        Joaquín Kunkel
      </span>
      <Muted>,<br/>
      <span style={{whiteSpace: 'pre'}}>product designer</span> who codes.</Muted>
    </Typography>
  </Box>
));

const ValueProp = () => (
  <Box maxWidth={600}>
    <Typography variant="h6">
      I write code, build design systems, and empower teams to ask
      the right questions. I work for high impact and elevated craft.
      I'm also a visual artist.
    </Typography>
  </Box>
);

const Bio = () => (
  <Box maxWidth={600}>
    <Typography variant="h6">
      Most recently, I owned product design at <Link rel="noopener" color="secondary" target="_blank" href="http://cambly.com">Cambly</Link>. Previously, I studied Computer Science and Visual Arts at <Link target="_blank" rel="noopener" color="secondary" href="https://nyuad.nyu.edu/">NYU Abu Dhabi</Link>.
    </Typography>
  </Box>
);

// A Block can contain one or multiple items inside.
// items in a block are vertically stacked in a single
// column with a spacing of 2.
// If a Block is empty, it serves as a md spacer.
const Block = ({children, maxWidth}) => (
  <>
  {
    children !== null ? (
      <Grid item xs={12}>
        <Container maxWidth={maxWidth}>
          <Grid container spacing={0}>
            {
              Children.map(children, child => (
                <Grid item xs={12}>
                  {child}
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Grid>
    )
    : (
      <Box height={4} width={4} />
    )
  }
  </>
);

Block.defaultProps = {
  maxWidth: 'sm',
};

// A Callout renders a primary action or piece of info
// along with an icon and an optional caption.
const Callout = ({icon, content, caption, color, rightAlign, style}) => (
  <Box style={{width: '100%', ...style}}>
    <Box style={{display: 'flex', alignItems: 'flex-start'}}>
      <Box paddingY={0.5}>
        {icon}
      </Box>
      <Box style={{width: '100%'}}>
        {content}
      </Box>
    </Box>
    {
      caption &&
        <Box
          style={{
            paddingLeft: !rightAlign && icon && 32,
            paddingTop: 8,
            maxWidth: 400,
            marginLeft: rightAlign && 'auto',
          }}
        >
          <Typography variant="body2" color={color} style={{textAlign: rightAlign && 'right'}}>
            {caption}
          </Typography>
        </Box>
    }
  </Box>
);

// Main CTA Button
const EmailButton = withTheme(({theme, simplified, text, icon, variant}) => (
  <>
  {
    simplified
    ? (
      <IconButton
        size={'small'}
        disableElevation
        onClick={email}
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

// Visualization of movings around
const Places = withTheme(({orientation, theme}) => {
  const containerRef = useRef(null);

  const abuDhabiRef = useRef(null);
  const sanFranciscoRef = useRef(null);
  const mexicoCityRef = useRef(null);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(timer);
    };
  }, [])

  const currentPlaceSubtitle = (
    <>
      <Typography
        variant="body2"
        noWrap
      >
        {date.toDateString()}
      </Typography>
      <Typography
        variant="body2"
        noWrap
      >
        {date.toLocaleTimeString().substring(0, date.toLocaleTimeString().length - 6)} {date.toLocaleTimeString().substring(date.toLocaleTimeString().length - 2, date.toLocaleTimeString().length)}
      </Typography>
    </>
  );
  
  const arrowContainer = (
    <Box
      padding={1.5}
      width="100%"
      display="flex"
      alignItems="center"
    >
      <Box height="1px" width="100%" bgcolor={theme.palette.text.disabled}/>
      <Arrow />
    </Box>
  )
  return (
    <div
      ref={containerRef}
      style={{display: orientation === 'horizontal' && 'flex', alignItems: 'flex-start', width: '100%', flexDirection: orientation === 'vertical' ? 'column' : 'row'}}
    >
      <Place
        text="Abu Dhabi"
        style={{marginRight: 'auto'}}
        strikeThrough
        subtitle={
          <Typography noWrap variant="body2" style={{color: theme.palette.text.disabled}}>
            2015 - 2019
          </Typography>
        }
      />
      {orientation === 'horizontal'
        &&  arrowContainer
      }
      <Place
        text="San Francisco"
        style={{marginLeft: 'auto', marginRight: 'auto'}}
        strikeThrough
        subtitle={
          <Typography noWrap variant="body2" style={{color: theme.palette.text.disabled}}>
            2019-2020
          </Typography>
        }
      />
      {orientation === 'horizontal'
        &&  arrowContainer
      }
      <Place
        text="Mexico City"
        style={{marginLeft: 'auto'}}
        subtitle={currentPlaceSubtitle}
        highlight
      />
    </div>
  );
});

Places.defaultProps = {
  orientation: 'horizontal',
};

const Place = withTheme(({theme, text, innerRef, strikeThrough, highlight, subtitle, style}) => (
  <Box
    ref={innerRef}
    paddingY={1}
    style={style}
  >
    <Typography
      variant="subtitle1"
      color={highlight && 'textSecondary'}
      noWrap
      style={{textDecoration: strikeThrough && 'line-through', color: !highlight && theme.palette.text.disabled}}
    >
      {text}
    </Typography>
    {
      subtitle
    }
  </Box>
));

// Icons:

const EmailIcon = withTheme(({theme, color, customColor}) => {
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

const WorldIcon = withTheme(({theme, color}) => {
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

const Arrow = withTheme(({theme, color}) => {
  const mainColor = theme.palette.text[color];
  return (
      <svg width="41" height="10" viewBox="0 0 41 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.3536 5.35355C40.5488 5.15829 40.5488 4.84171 40.3536 4.64645L37.1716 1.46447C36.9763 1.2692 36.6597 1.2692 36.4645 1.46447C36.2692 1.65973 36.2692 1.97631 36.4645 2.17157L39.2929 5L36.4645 7.82843C36.2692 8.02369 36.2692 8.34027 36.4645 8.53553C36.6597 8.7308 36.9763 8.7308 37.1716 8.53553L40.3536 5.35355ZM0 5.5H40V4.5H0V5.5Z" fill={mainColor} />
      </svg>
    );
});

Arrow.defaultProps = {
  color: 'disabled',
};

export default Home;
