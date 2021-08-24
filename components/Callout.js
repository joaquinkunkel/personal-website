import { Box, Typography } from "@material-ui/core";

// A Callout renders a primary action or piece of info
// along with an icon and an optional caption.
const Callout = ({icon, content, caption, color, rightAlign, style}) => (
  <Box style={{width: '100%', ...style}}>
    <Box style={{display: 'flex', alignItems: 'flex-start'}}>
      <Box paddingY={0.5}>
        {icon}
      </Box>
      <Box style={{width: '100%', paddingTop: '2px'}}>
        {content}
      </Box>
    </Box>
    {
      caption &&
        <Box
          style={{
            paddingLeft: !rightAlign && icon && 32,
            paddingTop: 16,
            marginLeft: rightAlign && 'auto',
          }}
        >
          <Typography variant="body2" color={color} style={{textAlign: rightAlign && 'right'}}>
            {caption}
          </Typography>
        </Box>
    }
  </Box>
);

export default Callout;
