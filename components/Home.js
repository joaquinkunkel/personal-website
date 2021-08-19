import HomeHead from './HomeHead';
import NavBar from './NavBar';
import useScrollPosition from '@react-hook/window-scroll';
import EmailButton from './EmailButton';
import ArticleLink from './ArticleLink';
import Block from './Block';
import Callout from './Callout';
import Places from './Places';
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
      <HomeHead /> 
      <NavBar />

        <Grid container spacing={10} style={{paddingTop: '5vh', width: '100%', margin: 0}}>
          <Block>
            <Hero />
          </Block>
          <Block>
            <ValueProp />
          </Block>
          
          {/* Case studies */}

          <ArticleLink
            title="Cambly Onboarding"
            subtitle="Improving conversion by making a great first impression"
            color="#FFCEBE"
            imgSrc="/case_studies/Welcome Screen.png"
            fields="UX | Design Systems | Illustration"
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
          <Block>
            <Callout
              content={
                <EmailButton
                  variant="outlined"
                  color="primary"
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

const Hero = withTheme(({theme}) => (
  <Box paddingTop={0}>
    <Typography
      variant="h3"
    >
      Hi. I'm&nbsp;
      <span
        style={{color: theme.palette.secondary.main}}
      >
        Joaquín Kunkel
      </span>
      ,<br/>
      <span style={{whiteSpace: 'pre'}}>product designer</span> with an engineering background.
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

  
  export default Home;
  