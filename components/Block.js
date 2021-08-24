import { Children } from 'react';
import { Grid, Container, Box } from "@material-ui/core";
import { withTheme } from '@material-ui/core/styles';

// A Block can contain one or multiple items inside.
// items in a block are vertically stacked in a single
// column with a spacing of 2.
// If a Block is empty, it serves as a md spacer.
const Block = withTheme(({theme, children, maxWidth, style, highlight}) => (
  <>
  {
    children !== null ? (
      <Grid item style={{paddingLeft: 0, paddingRight: 0}} xs={12}>
        <Container maxWidth={maxWidth}>
          <Box
            style={
              highlight
                ? {...style, paddingLeft: 20, paddingRight: 20, background: theme.palette.action.hover, borderTop: `1px solid ${theme.palette.divider}`, borderBottom: `1px solid ${theme.palette.divider}`}
                : style
              }>
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
      <Box height="32px" width="32px" />
    )
  }
  </>
));

Block.defaultProps = {
  maxWidth: 'md',
};

export default Block;
