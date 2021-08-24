import Link from 'next/link';
import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

// My little design system's styled version of next-js link.

const StyledLink = withTheme(({theme, outlined, children, href, color, target}) => {
  const InnerLink = styled.a`
  color: ${theme.palette[color].main};
  cursor: pointer;
  padding: 4px;
  margin: -2px;
  border-radius: 8px;
  border: ${outlined ? `1px solid ${theme.palette.divider}` : 'none'};
  transition: 0.2s all;
  background: ${theme.palette.action.hover};
  &:hover {
    background: ${theme.palette.action.focus};
  };
  `;
  return (
    <Link href={href} target={target}>
      <InnerLink>
        {children}
      </InnerLink>
    </Link>
  )
});

StyledLink.defaultProps = {
  target: '_blank',
  href: '#',
  color: 'primary',
  outlined: false,
};

export default StyledLink;
