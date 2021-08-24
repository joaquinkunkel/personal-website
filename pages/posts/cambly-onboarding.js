import { Box, Divider, Typography } from "@material-ui/core";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleSummary from '../../components/ArticleSummary';
import Block from "../../components/Block";
import NavBar from "../../components/NavBar";
import { Arrow } from '../../components/icons/Icons';

const CamblyOnboarding = () => (
  <>
    <NavBar/>
    <Block maxWidth="none">
      {/* TODO: Reorganize so homehead isn't required in all components */}
      <ArticleHeader
        size="large"
        title="Cambly Onboarding"
        subtitle="Improving conversion by making a great first impression"
        color="#FFCEBE"
        imgSrc="/case_studies/Welcome Screen.png"
        fields="UX | Design Systems | Illustration"
        href="/posts/cambly-onboarding"
        comingSoon
      />
    </Block>
    <Box height={16} />
    <Block>
      <Divider />
    </Block>
    <Box height={40} />
    <Block>
      <ArticleSummary
        problem={
          <Typography variant="body2" color="textSecondary" component="span">
            How can we&nbsp;
            <Typography variant="body2" component="span" color="textPrimary">
              address <Typography variant="body" component="span" noWrap>pre-conversion</Typography> dropoff&nbsp;
            </Typography>
            in our onboarding flow?
          </Typography>
        }
        solution={
          <Typography variant="body2" color="textSecondary" component="span">
            We developed an onboarding flow that&nbsp;
            <Typography variant="body2" component="span" color="textPrimary">
              surfaces value props specific to the user's goal
            </Typography>
            .
          </Typography>
        }
        impact={
          <Typography variant="body2" color="textSecondary" component="span">
            <Typography variant="h5" component="span" color="textPrimary">
              1.2x<br />
            </Typography>
            {/* 3% <Arrow color="secondary" /> 3.3%<br/> */}
            <Typography variant="body2" component="span" color="textPrimary">Conversion rate </Typography>
            increased because a more personalized flow outweighs the friction it may introduce.
          </Typography>
        }
        team={<>
          <>a Product Designer (me),</>
          <br />
          <>a Product Manager,</>
          <br />
          <>2 Engineers (iOS & Web)</>
          </>
        }
      />
    </Block>
    <Box height={32} />
    <Block highlight style={{marginTop: 32, marginBottom: 32}}>
      <Box paddingY={2}>
        <Typography variant="body2" color="textSecondary">
          This case study is a work in progress! Coming soon.
        </Typography>
      </Box>
    </Block>
  </>
);

export default CamblyOnboarding;
