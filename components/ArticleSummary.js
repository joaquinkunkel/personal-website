import { Typography, Box, Grid } from "@material-ui/core";
import Block from "./Block";

const ArticleSummary = ({problem, solution, impact, team}) => (
  <Grid container spacing={4}>
    <Grid item xs={6} md={3}>
      <Typography gutterBottom variant="h6">
        Problem
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {problem}
      </Typography>
    </Grid>
    <Grid item xs={6} md={3}>
      <Typography gutterBottom variant="h6">
        Solution
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {solution}
      </Typography>
    </Grid>
    <Grid item xs={6} md={3}>
      <Typography gutterBottom variant="h6">
        Impact
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {impact}
      </Typography>
    </Grid>
    <Grid item xs={6} md={3}>
      <Typography gutterBottom variant="h6">
        Team
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {team}
      </Typography>
    </Grid>
  </Grid>
);

export default ArticleSummary;