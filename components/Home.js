import NavBar from './NavBar';
import useScrollPosition from '@react-hook/window-scroll';
import EmailButton from './EmailButton';
import ArticleLink from './ArticleLink';
import Block from './Block';
import Callout from './Callout';
import Places from './Places';
import Hero from './Hero';

import {
  WorldIcon,
  EmailIcon,
} from './icons/Icons';
import {
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';

const Home = withTheme(({theme}) => {
  const scrollY = useScrollPosition(60);
  const showNav = scrollY > 200;
  const isSmall = !(useMediaQuery(theme.breakpoints.up('sm')));
  const isMedium = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      {/* CSS imports and meta tags go in HomeHead */}
      <NavBar />

        <Grid container spacing={10} style={{paddingTop: '5vh', width: '100%', margin: 0}}>
          <Block>
            <Hero />
          </Block>
          <Block>
            <ValueProp />
            <br />
            <Callout
              // style={{borderRadius: 4, background: theme.palette.action.hover, padding: 8}}
              icon={<WorldIcon color="primary" />}
              content={
                <Box padding={1}>
                  <Typography variant="body2" color="textSecondary">
                    This website is a work in progress. I'm building it using NextJS and Material-UI.&nbsp;
                    <Link color="secondary" href="https://github.com/joaquinkunkel/personal-website">See it on GitHub</Link> if curious!
                  </Typography>
                </Box>
              }
              />
          </Block>
          
          {/* Case studies */}

          <ArticleLink
            title="Cambly Onboarding"
            subtitle="Improving conversion by making a great first impression"
            color="#FFCEBE"
            imgSrc="/case_studies/Welcome Screen.png"
            fields="UX | Design Systems | Illustration"
            href="/posts/cambly-onboarding"
            comingSoon
          />

          <ArticleLink
            title="Tutor Reviews and Feedback"
            subtitle="Gathering meaningful, actionable feedback from students"
            color="#CBE5E1"
            imgSrc="/case_studies/Tutor Reviews.png"
            fields="UX | Front-end"
            comingSoon
          />

          <ArticleLink
            title="Tutor Signup"
            subtitle="Smoothing the tutor onboarding funnel by briding gaps between our business and its end users"
            color="#EEEEEE"
            imgSrc="/case_studies/Tutor Signup Flow.png"
            fields="UI | User Flows | Design systems"
            comingSoon
          />
        </Grid>
    </>
  );
});

const ValueProp = () => (
  <Box>
    <Typography variant="h6">
      I write code, build design systems, and empower teams to ask
      the right questions. I work for high impact and elevated craft.
      I'm also a visual artist.
    </Typography>
  </Box>
);
  
export default Home;
  