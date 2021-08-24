import { useState } from 'react';
import Block from './Block';
import Link from 'next/link';
import ArticleHeader from './ArticleHeader';
import { withTheme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';

const ArticleLink = withTheme(({
  theme,
  title,
  subtitle,
  imgSrc,
  color,
  fields,
  comingSoon,
  href,
}) => {
  const [hovering, setHovering] = useState(null);
  const HoverLink = styled.a`
    cursor: ${href && 'pointer'};
    width: 100%;
  `
  return (
    <Link href={href || '#'} scroll={!!href}>
      <HoverLink>
        <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
          <ArticleHeader
            title={title}
            subtitle={subtitle}
            imgSrc={imgSrc}
            color={color}
            fields={fields}
            comingSoon={comingSoon}
            overlay={
              href &&
              <Fade
                in={!hovering}
                timeout={200}
                >
                <div
                  style={{
                    borderRadius: 4,
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 400,
                    background: theme.palette.type === 'light' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                />
              </Fade>
            }
          />
        </div>
      </HoverLink>
    </Link>
  );
});

export default ArticleLink;
