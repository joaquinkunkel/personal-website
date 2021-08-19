import { Children } from 'react';
import { Grid, Container, Box } from "@material-ui/core";

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

export default Block;
