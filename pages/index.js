import Head from 'next/head'
import Link from 'next/link';
import { useState, useRef, Children, useLayoutEffect, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useWindowSize from '@rooks/use-window-size';
import useScrollPosition from '@react-hook/window-scroll';
import { AppBar, Box, Button, Divider, Grid, Paper, Tab, Tabs, Typography, Container, useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';

const email = () => {
  window.location.href = "mailto:j@joaquin.world";
};

const Home = () => {
  const scrollY = useScrollPosition(60);
  const showNav = scrollY > 200;

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
      <CssBaseline>      
        <ThemeProvider theme={theme}>
          <Container>
            <Grid container spacing={5}>
              <Block>
                <Hero /> {/* Welcome to the world... */}
                <ValueProp /> {/* I empower... */}
              </Block>
              <Block>
                <Callout
                  icon={<WorldIcon />}
                  content={<EmailButton />}
                  caption="Let’s chat about design, eng, music, art, or life."
                />
              </Block>
              <Block>
                <Callout
                  icon={<EmailIcon />}
                  content={<Places />}
                  // caption="I grew up in Mexico City. I've been around, but I'm based here for now. I'm open to working anywhere, but have a keen eye on New York right now."
                  // rightAlign
                />
              </Block>
            </Grid>

            

          </Container>
        </ThemeProvider>
      </CssBaseline>
    </>
  );
}

const Hero = () => (
  <Box style={{paddingTop: '10vh'}}>
    <Typography
      variant="h3"
      style={{color: 'rgba(25, 54, 34, 0.6)'}}
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
);

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
      endIcon={<img alt="arrow" src="PinkArrow.svg" />}
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
      <Arrow width={arrowWidth} />
      <Place innerRef={sanFranciscoRef} text="San Francisco" />
      <Arrow width={arrowWidth} />
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

// const Arrow = ({width}) => (
//   <Box style={{width: width, display: 'flex', alignItems: 'center', padding: '16px 0'}}>
//     <Box style={{background: theme.palette.primary.main, height: 1, width: width - 21}} />
//     <img alt="arrow-point" src="Arrow.svg" style={{width: 21, position: 'relative', top: 0.5}} />
//   </Box>
// );

const Arrow = ({width}) => (
  <Box style={{display: 'flex', alignItems: 'center', padding: '14px'}}>
    <img alt="arrow-point" src="ArrowLong.svg" style={{width: 40}} />
  </Box>
);

// Icons:

const WorldIcon = () => (
  <img alt="world" src="Mail.svg" />
);

const EmailIcon = () => (
  <img alt="world" src="World.svg" />
);

export default Home;
