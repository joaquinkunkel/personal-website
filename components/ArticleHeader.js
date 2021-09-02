import ArticleImage from './ArticleImage';
import { Typography, Box, Container, Grid, Chip, useMediaQuery } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import Block from './Block';
import StyledLink from './StyledLink';
import { Arrow } from './icons/Icons';

const ArticleHeader = withTheme(({
  size,
  theme,
  title,
  subtitle,
  imgSrc,
  color,
  fields,
  comingSoon,
  overlay,
}) => {
  const md = size === 'large' ? 6 : 12;
  const isMedium = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div style={{position: 'relative'}}>
      <Block maxWidth={size === 'large' ? 'none' : 'md'}>
        <ArticleImage imgSrc={imgSrc} color={color} />
        {overlay}
      </Block>
      <Block maxWidth="md" style={{paddingTop: size === 'large' ? 48 : 32, paddingBottom: 48}}>
        <Grid container direction="row" spacing={size === 'large' && isMedium ? 3 : 1}>
          <Grid item xs="12" md={md}>
            {
              size === 'large'
                && (
                  <>
                    <StyledLink href="/">
                      <Box display="inline-flex">
                        <Box>
                          <div style={{transform: 'rotate(180deg)'}}>
                            <Arrow />
                          </div>
                        </Box>
                        <Box width={8} />
                        <Box>
                          <Typography variant="body2">
                            Projects
                          </Typography>
                        </Box>
                      </Box>
                    </StyledLink>
                    <Box height={16} />
                  </>
                )
            }
            <Typography variant={size === 'large' ? 'h2' : 'h5'}>
              {title}
            </Typography>
          </Grid>
          <Grid item="12" md={md}>
            <Typography
              variant="body1"
              // color="textSecondary"
              gutterBottom
              >
              {subtitle}
            </Typography>
            {
              fields && size === 'large' &&
              <>
                <Box height={12} />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  gutterBottom
                  >
                  {fields}
                </Typography>
              </>
            }
            {
              comingSoon &&
                <>
                  <Box height={12} />
                  <Chip
                    variant="outlined"
                    // color="secondary"
                    label={size === 'large' ? 'Work in progress' : 'WIP'}
                    size={size}
                    />
                </>
              }
          </Grid>
        </Grid>
      </Block>
    </div>
  );
});

ArticleHeader.defaultProps = {
  size: 'medium',
};

export default ArticleHeader;