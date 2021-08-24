import { Box, Divider, Typography } from "@material-ui/core";
import ArticleHeader from "../../components/ArticleHeader";
import ArticleSummary from '../../components/ArticleSummary';
import Block from "../../components/Block";
import NavBar from "../../components/NavBar";

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
        problem="How can we get new users excited about achieving their goals with our product?"
        solution="A redesigned welcome screen and a conversational flow responding to users' specific needs."
        impact="Conversion rate increased by ~20%."
        team={<>
          <>Product Designer (me),</>
          <br />
          <>Product Manager,</>
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
