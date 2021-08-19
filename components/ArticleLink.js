import { useState } from 'react';
import Block from './Block';
import {
  Chip,
  Typography,
} from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

const ArticleLink = withTheme(({theme, title, subtitle, imgSrc, color, fields, comingSoon}) => {
  const [hovering, setHovering] = useState(null);
  return (
    <Block>
      <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <div
          style={{
            textAlign: 'center',
            maxHeight: 400,
            borderRadius: 4,
            position: 'relative',
          }}
        >
            <div
              style={{borderRadius: 4, position: 'absolute', zIndex: -2, top: 0, left: 0, width: '100%', height: 400, background: color}}
            />
          <Fade
            in={!hovering}
            timeout={200}
            >
            <div
              style={{borderRadius: 4, position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: 400, background: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}}
              />
          </Fade>
          <img style={{
            maxHeight: 400,
            height: 'auto',
            maxWidth: '100%',
          }} src={imgSrc} />
        </div>
        <br />
        <Typography variant="h5" gutterBottom>
          {
            comingSoon &&
            <>
              <Chip
                // color="primary"
                // variant="outlined"
                label="WIP"
                style={{marginRight: 10}}
                />
            </>
          }
          {title}
        </Typography>
        <Typography
          variant="h6"
          // color="textSecondary"
          style={{color: theme.palette.text.disabled}}
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
    </Block>
  );
});

export default ArticleLink;
