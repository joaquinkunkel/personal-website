import NavBar from "../components/NavBar";
import { useMediaQuery } from "@material-ui/core";
import Block from "../components/Block";
import Places from "../components/Places";
import Callout from "../components/Callout";
import { Box, Grid, Link, Typography } from "@material-ui/core";
import { withTheme } from "@material-ui/core/styles";
import { WorldIcon, EmailIcon } from "../components/icons/Icons";
import Hero from "../components/Hero";
import EmailButton from "../components/EmailButton";

const About = withTheme(({theme}) => {
  const isMedium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
    <NavBar fixed />
    <Grid container spacing={10} style={{paddingTop: '5vh', width: '100%', margin: 0}}>
      <Block>
        <Hero />
      </Block>
        <Block>
          <Bio />
        </Block>
        <Block
          highlight
          maxWidth={isMedium ? 'xl': 'md'}
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

const Bio = () => (
  <Box>
    <Typography variant="h6">
      I'm currently working as a freelance designer in my hometown. Before this, I owned product design at <Link rel="noopener" color="secondary" target="_blank" href="http://cambly.com">Cambly</Link>. I studied Computer Science and Visual Arts at <Link target="_blank" rel="noopener" color="secondary" href="https://nyuad.nyu.edu/">NYU Abu Dhabi</Link>.
    </Typography>
  </Box>
);

export default About;