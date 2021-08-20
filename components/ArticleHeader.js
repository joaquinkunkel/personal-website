import ArticleImage from './ArticleImage';
import { Typography, Chip } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';

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
}) => (
  <div style={{position: 'relative'}}>
    <ArticleImage imgSrc={imgSrc} color={color} />
    {overlay}
    <br />
    <Typography variant={size === 'large' ? 'h3' : 'h5'} gutterBottom>
      {title}
      {
        comingSoon &&
        <>
          <Chip
            // color="primary"
            // variant="outlined"
            label="WIP"
            size={size}
            style={{marginLeft: 10}}
            />
        </>
      }
    </Typography>
    <Typography
      variant="h6"
      color="textSecondary"
      gutterBottom
    >
      {subtitle}
    </Typography>
    <Typography
      variant="subtitle2"
      color="textSecondary"
      gutterBottom
    >
      {fields}
    </Typography>
  </div>
));

ArticleHeader.defaultProps = {
  size: 'medium',
};

export default ArticleHeader;