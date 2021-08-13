import Head from 'next/head'
import Link from 'next/link';
import { useState, useRef, Children, useLayoutEffect, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useWindowSize from '@rooks/use-window-size';
import useScrollPosition from '@react-hook/window-scroll';
import { AppBar, Box, Button, Divider, Grid, Paper, Tab, Tabs, Typography, Container, useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../src/theme';
import { withTheme } from '@material-ui/core/styles';

const email = () => {
  window.location.href = "mailto:j@joaquin.world";
};

const Home = () => {
  const scrollY = useScrollPosition(60);
  const showNav = scrollY > 200;
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)');

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
      </Head>
          <Container>
            <Grid container spacing={5}>
              <Block>
                <Hero /> {/* Welcome to the world... */}
                <ValueProp /> {/* I empower... */}
              </Block>
              <Block>
                <Callout
                  icon={<EmailIcon />}
                  content={<EmailButton />}
                  caption="Let’s chat about design, eng, music, art, or life."
                />
              </Block>
              <Block>
                <Callout
                  icon={<WorldIcon />}
                  content={<Places />}
                  // caption="I grew up in Mexico City. I've been around, but I'm based here for now. I'm open to working anywhere, but have a keen eye on New York right now."
                  // rightAlign
                />
              </Block>
            </Grid>
          </Container>
    </>
  );
}

const Hero = withTheme(({theme}) => (
  <Box style={{paddingTop: '10vh'}}>
    <Typography
      variant="h3"
      style={{color: theme.palette.text.disabled}}
    >
    {/* <span>
      Welcome to the world of<br/>
    </span> */}
    <span
      style={{color: theme.palette.text.secondary}}
    >
      Joaquin Kunkel
    </span>
    <span>
      {/* , */}
      <br/>Product designer with an<br/>engineering background
      {/* . */}
    </span>
    {/* <Typography variant="h3" style={{color: 'rgba(25, 54, 34, 0.2)'}}>
      I'm also a visual artist.
    </Typography> */}
    </Typography>
  </Box>
));

const ValueProp = () => (
  <Box style={{maxWidth: 600}}>
    <Typography variant="h6">
      I write code, connect stakeholders, and empower people to ask
      the right questions in order to deliver products with high impact and elevated craft.
    </Typography>
  </Box>
);

// A Block can contain one or multiple items inside.
// items in a block are vertically stacked in a single
// column with a spacing of 2.
const Block = ({children}) => (
  <Grid item xs={12}>
    <Grid container spacing={3}>
      {
        Children.map(children, child => (
          <Grid item xs={12}>
            {child}
          </Grid>
        ))
      }
    </Grid>
  </Grid>
);

// A Callout renders a primary action or piece of info
// along with an icon and an optional caption.
const Callout = ({icon, content, caption, rightAlign}) => (
  <Box style={{width: '100%'}}>
    <Box style={{display: 'flex', alignItems: 'flex-start', maxWidth: 'calc(100% - 32px)'}}>
      <Box style={{padding: 4}}>
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
            paddingLeft: !rightAlign && 40,
            paddingTop: 8,
            maxWidth: 400,
            marginLeft: rightAlign && 'auto',
          }}
        >
          <Typography variant="body2" style={{textAlign: rightAlign && 'right'}}>
            {caption}
          </Typography>
        </Box>
    }
  </Box>
);

// Main CTA Button
const EmailButton = () => (
  <Paper elevation={0} style={{width: 'fit-content'}}>
    <Button
      color="secondary"
      size="large"
      onClick={email}
      endIcon={<PinkArrow />}
    >
      j@joaquin.world
    </Button>
  </Paper>
);

// Visualization of movings around
const Places = () => {
  const containerRef = useRef(null);

  const abuDhabiRef = useRef(null);
  const sanFranciscoRef = useRef(null);
  const mexicoCityRef = useRef(null);

  const [widths, setWidths] = useState({abuDhabi: 0, sanFrancisco: 0});
  const [containerWidth, setContainerWidth] = useState(0)
  // const { innerWidth } = useWindowSize();
  const [date, setDate] = useState(new Date());


  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(timer);
    };
  }, [])

  const arrowWidth = (containerWidth - widths.abuDhabi - widths.sanFrancisco - widths.mexicoCity) / 2;

  return (
    <div
      ref={containerRef}
      style={{display: 'flex', alignItems: 'flex-start', width: '100%'}}
    >
      <Place innerRef={abuDhabiRef} text="Abu Dhabi" />
      <Box padding={1}>
        <Arrow width={arrowWidth} />
      </Box>
      <Place innerRef={sanFranciscoRef} text="San Francisco" />
      <Box padding={1}>
        <Arrow width={arrowWidth} />
      </Box>
      <Place innerRef={mexicoCityRef} text="Mexico City" highlight date={date} />
    </div>
  );
};

const Place = ({text, innerRef, strikeThrough, highlight, date}) => (
  <Box
    ref={innerRef}
    style={{
      padding: 8,
    }}
  >
    <Typography
      variant="subtitle1"
      color={highlight && 'textSecondary'}
      noWrap
      style={{textDecoration: strikeThrough && 'line-through'}}
    >
      {text}
    </Typography>
    {
      highlight && date
      && (
        <>
          <Typography
            variant="body2"
            color="textSecondary"
          >
            {date.toDateString()}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
          >
            {date.toLocaleTimeString().substring(0, date.toLocaleTimeString().length - 6)} {date.toLocaleTimeString().substring(date.toLocaleTimeString().length - 2, date.toLocaleTimeString().length)}
          </Typography>
        </>
      )
    }
  </Box>
);

// Icons:

const EmailIcon = withTheme(({theme}) => {
  const color = theme.palette.text.primary;
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="-0.5" y="0.5" width="19" height="13" rx="0.5" transform="matrix(-1 0 0 1 25 9)" stroke={color}/>
      <path d="M15.8535 18.2929L25 9.14645L25.0606 10.5L16.5606 19C16.1701 19.3905 15.5369 19.3905 15.1464 19L6.54305 10.3966L6.70707 9.14645L15.8535 18.2929Z" fill={color}/>
    </svg>
  );
});

const WorldIcon = withTheme(({theme}) => {
  const color = theme.palette.text.primary;
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="9.5" stroke={color} />
      <path d="M21.5 16C21.5 18.6864 20.8456 21.0942 19.8139 22.8138C18.7762 24.5434 17.4122 25.5 16 25.5C14.5878 25.5 13.2238 24.5434 12.1861 22.8138C11.1544 21.0942 10.5 18.6864 10.5 16C10.5 13.3136 11.1544 10.9058 12.1861 9.18618C13.2238 7.45665 14.5878 6.5 16 6.5C17.4122 6.5 18.7762 7.45665 19.8139 9.18618C20.8456 10.9058 21.5 13.3136 21.5 16Z" stroke={color} />
      <line x1="16" y1="7" x2="16" y2="25" stroke={color} />
      <line x1="25" y1="16" x2="7" y2="16" stroke={color} />
      <line x1="24" y1="10.5" x2="8" y2="10.5" stroke={color} />
      <line x1="24" y1="21.5" x2="8" y2="21.5" stroke={color} />
    </svg>
  );
});

const Arrow = withTheme(({theme}) => {
  const color = theme.palette.text.primary;
  return (
<svg width="41" height="9" viewBox="0 0 41 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.3536 5.35355C40.5488 5.15829 40.5488 4.84171 40.3536 4.64645L37.1716 1.46447C36.9763 1.2692 36.6597 1.2692 36.4645 1.46447C36.2692 1.65973 36.2692 1.97631 36.4645 2.17157L39.2929 5L36.4645 7.82843C36.2692 8.02369 36.2692 8.34027 36.4645 8.53553C36.6597 8.7308 36.9763 8.7308 37.1716 8.53553L40.3536 5.35355ZM0 5.5H40V4.5H0V5.5Z" fill={color}/>
</svg>

  );
});

const PinkArrow = withTheme(({theme}) => {
  const color = theme.palette.text.secondary;
  return (
    <svg width="32" height="13" viewBox="0 0 32 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.3536 6.85355C26.5488 6.65829 26.5488 6.34171 26.3536 6.14645L23.1716 2.96447C22.9763 2.7692 22.6597 2.7692 22.4645 2.96447C22.2692 3.15973 22.2692 3.47631 22.4645 3.67157L25.2929 6.5L22.4645 9.32843C22.2692 9.52369 22.2692 9.84027 22.4645 10.0355C22.6597 10.2308 22.9763 10.2308 23.1716 10.0355L26.3536 6.85355ZM6 7H26V6H6V7Z" fill={color} />
    </svg>
  );
});


export default Home;
