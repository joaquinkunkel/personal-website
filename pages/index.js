import Head from 'next/head'
import { useState, useRef, Children, useLayoutEffect, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import useWindowSize from '@rooks/use-window-size';
import useScrollPosition from '@react-hook/window-scroll';
import { AppBar, Toolbar, IconButton, Box, Button, Chip, Divider, Grid, Link, Paper, Tab, Tabs, Typography, Container, useMediaQuery, recomposeColor } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../src/theme';
import { withTheme } from '@material-ui/core/styles';

const email = () => {
  // window.location.href = "mailto:j@joaquin.world";
  window.location.href = "mailto:joaquinkunkel@gmail.com";
};

const Home = withTheme(({theme}) => {
  const scrollY = useScrollPosition(60);
  const showNav = scrollY > 200;
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isSmall = !(useMediaQuery(theme.breakpoints.up('sm')));
  const isMedium = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

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
        <link
          rel="preload"
          href="/fonts/Agrandir-GrandHeavy.ttf"
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
          <Container maxWidth="lg" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <EmailButton
              simplified
              // text={!isMedium ? '' : 'j@joaquin.world'}
              icon={<EmailIcon />}
            />
          </Container>
        </Toolbar>
      </AppBar>
        <Grid container spacing={10} style={{paddingTop: '5vh', width: '100%', margin: 0}}>
          <Block>
            <Hero /> {/* Welcome to the world... */}
          </Block>
          <Block>
            <ValueProp /> {/* I empower... */}
          </Block>
          
          {/* Case studies */}

          <ArticleLink
            title="Cambly Onboarding"
            subtitle="Improving conversion by making a great first impression"
            color="#EEBFB4"
            imgSrc="/case_studies/Welcome Screen.png"
            comingSoon
          />

          <ArticleLink
            title="Tutor Reviews and Feedback"
            subtitle="Gathering meaningful, actionable feedback from students"
            color="#CBE5E1"
            imgSrc="/case_studies/Tutor Reviews.png"
            comingSoon
          />

          <ArticleLink
            title="Tutor Signup"
            subtitle="Smoothing the tutor onboarding funnel by briding gaps between our business and its end users"
            color="#EEEEEE"
            imgSrc="/case_studies/Tutor Signup Flow.png"
            comingSoon
          />

          <Block
            maxWidth={isMedium ? 'xl': 'md'}
            style={{paddingLeft: 20, paddingRight: 20, background: theme.palette.action.hover, borderTop: `2px solid ${theme.palette.divider}`, borderBottom: `2px solid ${theme.palette.divider}`}}
          >
            <Callout
              style={{paddingTop: 80, paddingBottom: 80}}
              icon={<WorldIcon />}
              content={
                <Box paddingX={4}>
                  <Places orientation={!isMedium ? 'vertical' : 'horizontal'} />
                </Box>
              }
              />
          </Block>
          <Block>
            <Bio />
          </Block>
          {/* <Block>
            <Bio />
          </Block> */}
          <Block>
            <Callout
              content={
                <EmailButton
                  variant="outlined"
                  color="primary"
                  // disableElevation={false}
                  text="joaquinkunkel@gmail.com"
                  // text="j@joaquin.world"
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
    // style={{color: theme.palette.text.disabled}}
  >
    {children}
  </Typography>
));

const Hero = withTheme(({theme}) => (
  <Box paddingTop={0}>
    <Typography
      variant="h3"
      // style={{textShadow: `0 0 200px ${theme.palette.text.secondary}`}}
    >
      <Muted>
        Hi. I'm&nbsp;
      </Muted>
      <span
        style={{color: theme.palette.text.secondary}}
      >
        Joaquín Kunkel
      </span>
      <Muted>,<br/>
      <span style={{whiteSpace: 'pre'}}>product designer</span> with an engineering background.</Muted>
    </Typography>
  </Box>
));

const ValueProp = () => (
  <Box>
    <Typography variant="h6">
      I write code, build design systems, and empower teams to ask
      the right questions. I work for high impact and elevated craft.
      I'm also a visual artist.
    </Typography>
  </Box>
);

const Bio = () => (
  <Box>
    <Typography variant="h6">
      I'm currently working as a freelance designer in my hometown. Before this, I owned product design at <Link rel="noopener" color="secondary" target="_blank" href="http://cambly.com">Cambly</Link>. I studied Computer Science and Visual Arts at <Link target="_blank" rel="noopener" color="secondary" href="https://nyuad.nyu.edu/">NYU Abu Dhabi</Link>.
    </Typography>
  </Box>
);

// A Block can contain one or multiple items inside.
// items in a block are vertically stacked in a single
// column with a spacing of 2.
// If a Block is empty, it serves as a md spacer.
const Block = ({children, maxWidth, style}) => (
  <>
  {
    children !== null ? (
      <Grid item style={{paddingLeft: 0, paddingRight: 0}} xs={12}>
        <Container maxWidth={maxWidth}>
          <Box style={style}>
            {
              Children.map(children, child => (
                <Box>
                  {child}
                </Box>
              ))
            }
          </Box>
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
  maxWidth: 'md',
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
            paddingTop: 16,
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
const EmailButton = withTheme(({theme, simplified, text, icon, variant, color}) => (
  <>
  {
    simplified
    ? (
      <IconButton
        size={'small'}
        // disableElevation
        onClick={email}
        color={color}
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
        color={color}
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
        color="textSecondary"
        style={{color: theme.palette.text.disabled}}
      >
        Now
      </Typography>
      <Typography variant="body2">
        Freelancer
      </Typography>
      {/* <Typography
        variant="body2"
        noWrap
        color="textSecondary"
        style={{color: theme.palette.text.disabled}}
      >
        {date.toDateString()}
      </Typography>
      <Typography
        variant="body2"
        noWrap
        color="textSecondary"
        style={{color: theme.palette.text.disabled}}
      >
        {date.toLocaleTimeString().substring(0, date.toLocaleTimeString().length - 6)} {date.toLocaleTimeString().substring(date.toLocaleTimeString().length - 2, date.toLocaleTimeString().length)}
      </Typography> */}
    </>
  );
  
  const arrowContainer = (
    <Box
      paddingY={1}
      paddingX={4}
      width="100%"
      display="flex"
      alignItems="center"
    >
      <ArrowLine width="100%"/>
      <Box position="relative" left="-3px">
        <ArrowTip />
      </Box>
    </Box>
  )
  return (
    <div
      ref={containerRef}
      style={{display: orientation === 'horizontal' && 'flex', alignItems: 'flex-start', width: '100%', flexDirection: orientation === 'vertical' ? 'column' : 'row'}}
    >
      <Place
        text="Abu Dhabi, UAE"
        style={{marginRight: 'auto'}}
        subtitle={
          <>
            <Typography noWrap variant="body2" style={{color: theme.palette.text.disabled}}>
              2015-2018
            </Typography>
            <Typography noWrap variant="body2">
              CS & VisArts
              {orientation === 'horizontal' ? <br /> : ' '}
              @ NYU
            </Typography>
          </>
        }
      />
      {orientation === 'horizontal'
        &&  arrowContainer
      }
      <Place
        text="New York, NY"
        style={{marginLeft: 'auto', marginRight: 'auto'}}
        // strikeThrough
        subtitle={
          <>
            <Typography noWrap variant="body2" style={{color: theme.palette.text.disabled}}>
              2018-2019
            </Typography>
            <Typography noWrap variant="body2">
              UI Design
              {orientation === 'horizontal' ? <br /> : ' '}
              @ Coursedog
            </Typography>
          </>
        }
      />
      {orientation === 'horizontal'
        &&  arrowContainer
      }
      <Place
        text="San Francisco, CA"
        style={{marginLeft: 'auto', marginRight: 'auto'}}
        // strikeThrough
        subtitle={
          <>
            <Typography noWrap variant="body2" style={{color: theme.palette.text.disabled}}>
              2019-2020
            </Typography>
            <Typography noWrap variant="body2">
              Product Design
              {orientation === 'horizontal' ? <br /> : ' '}
              @ Cambly
            </Typography>
          </>
        }
      />
      {orientation === 'horizontal'
        &&  arrowContainer
      }
      <Place
        text="Mexico City, MX"
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
      style={{textDecoration: strikeThrough && 'line-through'}}
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
    <svg width="21" height="9" viewBox="0 0 21 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1716 8.03568L20.3536 4.8537C20.5488 4.65844 20.5488 4.34186 20.3536 4.1466L17.1716 0.964616C16.9763 0.769354 16.6597 0.769354 16.4645 0.964616C16.2692 1.15988 16.2692 1.47646 16.4645 1.67172L18.7929 4.00015L3.656e-07 4.00015L2.78178e-07 5.00015L18.7929 5.00015L16.4645 7.32858C16.2692 7.52384 16.2692 7.84042 16.4645 8.03568C16.6597 8.23095 16.9763 8.23095 17.1716 8.03568Z" fill={mainColor} />
    </svg>
  );
});

Arrow.defaultProps = {
  color: 'disabled',
};

const ArrowTip = withTheme(({theme, color}) => {
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

const ArrowLine = withTheme(({theme, width, color}) => {
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

const ArticleLink = withTheme(({theme, title, subtitle, imgSrc, color, comingSoon}) => {
  return (
    <Block>
      <div
        style={{
          textAlign: 'center',
          maxHeight: 400,
          background: color,
          borderRadius: 4,
        }}
      >
        <img style={{
          maxHeight: 400,
          height: 'auto',
          maxWidth: '100%',
        }} src={imgSrc} />
      </div>
      <br />
      <Typography variant="h5">
        {
          comingSoon &&
          <>
            <Chip
              // color="primary"
              // variant="outlined"
              label="WIP"
              style={{marginRight: 10}}
              />
          </>
        }
        {title}
      </Typography>
      <Typography
        variant="h6"
        // color="textSecondary"
        style={{color: theme.palette.text.disabled}}
      >
        {subtitle}
      </Typography>
    </Block>
  );
});

export default Home;
