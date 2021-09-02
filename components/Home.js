import NavBar from './NavBar';
import ArticleLink from './ArticleLink';
import Block from './Block';
import Callout from './Callout';
import Hero from './Hero';
import StyledLink from './StyledLink';
import {
  WorldIcon,
} from './icons/Icons';
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';

const Home = withTheme(({theme}) => {
  const isSmall = !(useMediaQuery(theme.breakpoints.up('sm')));
  const isMedium = useMediaQuery(theme.breakpoints.up('md'));
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      {/* CSS imports and meta tags go in HomeHead */}
      <NavBar fixed />

        <Grid container spacing={10} style={{
          paddingTop: '5vh',
          width: '100%',
          margin: 0}
        }>
          <Block>
            <Hero />
          </Block>
          <Block>
            <ValueProp />
          </Block>
          <Block>
            <Callout
              style={{marginLeft: -4}}
              icon={<WorldIcon color="primary" />}
              content={
                <Box paddingX={1} paddingY={0.5}>
                  <Typography variant="body2" color="textSecondary">
                    This website is a work in progress. I'm building it in NextJS.&nbsp;
                    <StyledLink disableBackground href="https://github.com/joaquinkunkel/personal-website">See it on GitHub</StyledLink> if curious!
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
            // href="/posts/tutor-reviews"
            comingSoon
          />

          <ArticleLink
            title="Tutor Signup"
            subtitle="Smoothing the tutor onboarding funnel by briding gaps between our business and its end users"
            color="#EEEEEE"
            imgSrc="/case_studies/Tutor Signup Flow.png"
            // href="/posts/tutor-signup"
            comingSoon
          />

          <ArticleLink
            title="Hiring"
            subtitle="Curating better candidate profiles for hiring partners."
            color="#CEEAD9"
            imgSrc="/case_studies/Hiring.png"
            // href="/posts/tutor-signup"
            comingSoon
          />

        </Grid>
    </>
  );
});

const ValueProp = withTheme(({theme}) => {
  return (
    <Box>
      <Typography variant="h6" color="textSecondary">
        I believe in a culture of user empathy, artistic creativity, and contextual awareness.
        <br />
        {/* I work for high impact and elevated craft.<br /> */}
        I'm also a&nbsp;
        <StyledLink href="/art">
          visual artist.
        </StyledLink>
      </Typography>
    </Box>
  );
});

export default Home;
