import { Typography } from "@material-ui/core";
import ArticleHeader from "../../components/ArticleHeader";
import Block from "../../components/Block";

const CamblyOnboarding = () => (
  <Block maxWidth="lg">
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
);

export default CamblyOnboarding;
